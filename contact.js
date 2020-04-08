'use strict';

const uuid = require('uuid')
const dynamodb = require('./dynamodb')

function saveContact({ firstName, lastName, message, topic}) {
  const timestamp = new Date().getTime();

  return new Promise((resolve, reject) => {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        firstName,
        lastName,
        message,
        topic,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    }

    dynamodb.put(params, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(true);
    })
  })
}


module.exports = {
  saveContact
}