import http from "node:http"
import fs from "node:fs/promises"
import path from "path";
import { WebSocketServer } from "ws"

const PORT = 3000;

const httpServer = http.createServer(async function (req, res) {
    const indexfile = await fs.readFile(path.resolve('./index.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    return res.end(indexfile)
})

const webSocketServer = new WebSocketServer({ server: httpServer });

webSocketServer.on("connection", (websocket) => {
    console.log(`Websocket Connection...`)
    websocket.on("message", (data) => {
        console.log(`Websocket message receive. `, data.toString())
        // websocket.send("Pong hii from server")
        // websocket.send(data.toString()); not this becouse it send only one client
        // Broadcast to all the client conected to the serve 
        webSocketServer.clients.forEach((client) => {
            client.send(data.toString())
        });
    })
})


httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})