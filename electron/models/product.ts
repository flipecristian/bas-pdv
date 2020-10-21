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
    let mongodb = new Mongodb;
    let mongoose = mongodb.getMongooseObject();
    let schema = new mongoose.Schema(this.schema);
    this.model = mongoose.model(this.modelName, schema);
  }
  
  all () {
    this.model.find(function (err, products) {
      if (err) return console.error(err);
      console.log(products);
    })
  }
}