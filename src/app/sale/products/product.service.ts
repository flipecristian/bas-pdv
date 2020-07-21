import { mongodb } from 'mongodb';

const URI = "mongodb://mongo.conciliation-provider.dev:27026/bas-pdv";

export class ProductService {
    private client;

    constructor () {
        this.client = new mongodb(URI);
    }

    getAllProducts() {
        this.client.connect();
        console.log(this.client.listDatabases(this.client));
    }
}