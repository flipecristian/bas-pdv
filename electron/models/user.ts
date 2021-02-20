import {Mongodb} from '../database/mongodb';
  
export class User {

  private model : any;
  private modelName : String = 'user';
  private schema : any = {
    'login': String,
    'password': String,
    'name': String
  }

  constructor() {
    let mongoose = new Mongodb().getMongooseObject();
    let schema = new mongoose.Schema(this.schema);
    this.model = mongoose.model(this.modelName, schema);
  }
  
  async login (login: string, password: string) {
    let content = await this.model.find({login: login, password: password});
    return content;
  }
}