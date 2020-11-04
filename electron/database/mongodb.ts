import * as mongoose from 'mongoose';

export class Mongodb {
    
    private static instance: Mongodb;
    private database : String = 'pdv';
    private host : String = 'localhost';
    private port : String = '27077';
    private connection : any;
    private mongooseObject : any;

    constructor() {
        this.setUpBD()
    }

    public static getInstance() : Mongodb {
        if (!Mongodb.instance) {
            Mongodb.instance = new Mongodb();
        }
        return Mongodb.instance;
    }

    private setUpBD() : void {
        mongoose.connect(`mongodb://${this.host}:${this.port}/${this.database}`, {useNewUrlParser: true, useUnifiedTopology: true});
        this.connection = mongoose.connection;
        this.deleteModels();
        this.connection.on('error', console.error.bind(console, 'connection error:'));
        //this.connection.once('open', function() {console.log('conectado')});
        this.mongooseObject = mongoose;
    }

    public getMongooseObject() : any {
        return this.mongooseObject;
    }

    private deleteModels() : void {
        Object.keys(this.connection.models).forEach(key => {
            delete this.connection.models[key];
        });
    }
}