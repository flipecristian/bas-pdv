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
  
  async finalizeSale (sale: any) {
    return await this.model.create({
        total_value: sale.total_value,
        items: sale.cupon
    });
  }
}