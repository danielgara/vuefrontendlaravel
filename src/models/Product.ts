export default class Product {
  private id:number;

  private name:string;

  private price:number;

  public constructor(id:number, name:string, price:number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getId():number {
    return this.id;
  }

  public setId(id:number) {
    this.id = id;
  }

  public getName():string {
    return this.name;
  }

  public setName(name:string) {
    this.name = name;
  }

  public getPrice():number {
    return this.price;
  }

  public setPrice(price:number) {
    this.price = price;
  }
}
