import {Mongodb} from './../database/mongodb';
  
export class Product {

  private model : any;
  private modelName : String = 'products';
  private schema : any = {
    'id': Number,
    'price': Number,
    'description': String
  }

  constructor() {
    let mongoose = new Mongodb().getMongooseObject();
    let schema = new mongoose.Schema(this.schema);
    this.model = mongoose.model(this.modelName, schema);
  }
  
  async findById (id: number) {
    let content = await this.model.find({id: id});
    return content;
  }
}