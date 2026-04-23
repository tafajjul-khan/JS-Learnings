type chaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: chaiOrder) {
  console.log(order);
}

function serverChai(order: chaiOrder) {
  console.log(order);
}

type TeaRecepi = {
  water: number;
  milk: number;
};

// interface TeaRecepi {
//     water: number;
//     milk: number;

// }

class masalaChai implements TeaRecepi {
  water = 100;
  milk = 50;
}

// type CupSize = "small" | "large" => error in custome type
interface CupSize {
  size: "small" | "large";
}

class chai implements CupSize{
    size: "small" | "large" = "large";
}


// type Response = {ok: true} | {ok: false}
interface Response{ res: {ok: true} | {ok: false}}

// class myRes implements Response{
//    ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t)
}

type BaseChai = {teaLives: number}
type Extra = {masala: number}

type masalachai2 = BaseChai & Extra

const cup: masalachai2 = {
    teaLives: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "taffu"}
const u2: User = {username: "taffu", bio: "khan.com"}

type Config = {
    readonly appName: string
    vresion : number
}

const cfg: Config = {
    appName: "readly",
    vresion: 1
}

// cfg.appName = "taffu" => readonly property can ot assign 
