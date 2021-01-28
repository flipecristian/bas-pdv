import {Mongodb} from './../database/mongodb';
  
export class Sale {

  private model : any;
  private modelName : string = 'sales';
  private schema : any = {
    'total_value': Number,
    'items': Object,
  }

  constructor() {
    let mongoose = new Mongodb().getMongooseObject();
    let schema = new mongoose.Schema(this.schema);
    this.model = mongoose.model(this.modelName, schema);
  }
  
  async finalizeSale (coupon: any) {
    console.log("cupon", coupon);
    let content = await this.model.create({
        items: coupon
    });
    return content;
  }
}