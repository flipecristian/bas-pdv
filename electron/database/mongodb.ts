import * as mongoose from 'mongoose';

export class Mongodb {
    
    private database : String = 'pdv';
    private host : String = 'localhost';
    private port : String = '27077';
    private connection : any;
    private mongooseObject : any;

    constructor() {
        console.log('Passou no construtor')
        this.setUpBD()
    }
    
    private setUpBD() : void {
        mongoose.connect(`mongodb://${this.host}:${this.port}/${this.database}`, {useNewUrlParser: true, useUnifiedTopology: true});
        this.connection = mongoose.connection;
        this.connection.on('error', console.error.bind(console, 'connection error:'));
        this.connection.once('open', function() {console.log('conectado')});
        this.mongooseObject = mongoose;
    }

    private getConnection() : any {
        return this.connection;
    }

    public getMongooseObject() : any {
        return this.mongooseObject;
    }
}