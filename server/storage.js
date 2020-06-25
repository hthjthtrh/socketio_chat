const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var db;

// Use connect method to connect to the server
const initDbConnection = (cnntnString, dbName) => {
    MongoClient.connect(cnntnString, function (err, client) {
        assert.equal(err, null);
        console.log("Connected successfully to MongoDB");
        db = client.db(dbName)
    });
}

const insertDocuments = (collection, documents) => {
    db.collection(collection).insertMany(documents, (error, result) => {
        assert.equal(error, null);
        console.log(`${result.insertedCount}/${documents.length} documents for collection ${collection} backed up`)
    })
}

const retrieveDocuments = (collection, criterias, options) => {
    return db.collection(collection).find(criterias, options).toArray()
}

const updateDocument = (collection, criterias, update, options) => {
    return db.collection(collection).findOneAndUpdate(criterias, update, options)
}

module.exports = { initDbConnection, insertDocuments, retrieveDocuments, updateDocument }
