'use strict';

const db = require('mongoose');

const DB_URI = process.env.NODE_ENV === "test"
    ? process.env.MONGODB_URI_TEST
    : process.env.MONGODB_URI;

db.connect(
    DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => {
        if (error) {
            console.log('could not connect to mongo db -', error);
        }
    });

db.set('useFindAndModify', false);

module.exports = db;