'use strict';
const validator = require('./validator')
const contact= require('./contact')

module.exports.contact = async (event) => {
  const data = JSON.parse(event.body || '{}')
  
  const validatedInput = validator.validate(data, {
    'firstName': [validator.rules.requiredString],
    'lastName': [validator.rules.requiredString],
    'topic': [validator.rules.requiredString, validator.rules.validChoice(['claim', 'question'])],
    'message': [validator.rules.requiredString],
  });

  if (!validatedInput.valid) {
    return invalidResponseFromInput(validatedInput)
  }

  await contact.saveContact(data);
  return validResponse() ;
};

function invalidResponseFromInput(validatedInput) {
  return {
    statusCode: 422,
    body: JSON.stringify({
      success: false,
      errors: validatedInput.errors
    })
  }
}

function validResponse(){
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true
    }),
  }
}