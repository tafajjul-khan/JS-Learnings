function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai....`;
  }
  return `chai order: ${kind}`;
}

// truthiness
function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `Serving default masala chai `;
}

// exsoustive check

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai...`;
  }

  return `chai order #${size}`;
}

class KulhadChai {
  serve() {
    return `Serving kulhad chai`;
  }
}

class cuttingChai {
  serve() {
    return `Serving cutting chai`;
  }
}

function serve(chai: KulhadChai | cuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

// types
type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `Serving cutom chai...`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ilaychi = { type: "ilaychi"; aroma: number };

type Chai = MasalaChai | GingerChai | ilaychi;

function makechai(order: Chai) {
  switch (order.type) {
    case "masala":
      return ` MASALA CHAI`;
      break;
    case "ginger":
      return ` GINGER CHAI`;
      break;
    case "ilaychi":
      return ` ELAYCHI CHAI`;
      break;
    default:
      break;
  }
}


function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        // ..
    }
}

// function isStringArray
// (arr: unknown): arr is string[]{
// }