const mongoClient = require('mongodb').MongoClient;

export class MongoClient {
    constructor() {
        mongoClient.connect('mongodb://localhost:27077/bas-pdv', (err, db) => {
            if (err) {
                console.log('error');
            } else {
                console.log('sucess');
            }
        });
    }
}