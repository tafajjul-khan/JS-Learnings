class Chai {
  flavour: string;
  // price: number

  // constructor(flavor: string, price: number){
  //     this.flavour = flavor
  //     this.price = price
  // }
  constructor(flavor: string) {
    this.flavour = flavor;
    console.log(this);
  }
}

// const adrakchai = new Chai("Adrak", 20)
const masalachai = new Chai("masala");

// access modifires

class chai {
  public flavor: string = "Ginger";

  private seceretIngredients = "cardamom";

  reveal() {
    return this.seceretIngredients;
  }

  protected shopName = "chai things";
}

class Shop {
  protected ShopName = "Chai corner";
}

const c = new chai();
// c.reveal

class Branch extends Shop {
  getName() {
    return this.ShopName; // ok
  }
}

class Walet {
  // # for private
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

class cup {
  readonly cpacity: number = 250;

  constructor(cpacity: number) {
    this.cpacity = cpacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("too sweet");
    this._sugar = value;
  }
}

const D = new ModernChai();
D.sugar = 6;

class EkChai {
  static shopName = "chai sizzling";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("chai drinking.. ");
  }
}

class Heater {
  heat() {}
}

class chaiMaker {
  constructor(private heater: Heater) {}

  // composistion
  make() {
    this.heater.heat;
  }
}


