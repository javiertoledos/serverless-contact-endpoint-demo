'use strict';

function validate(data, validationRules) {
  return Object.entries(validationRules).reduce(( overallResult, [field, rules]) => {
    let validationResult = validateField(data[field], rules) 
    overallResult.valid = overallResult.valid && validationResult.valid
    if (validationResult.errors.length > 0) {
      overallResult.errors[field] = validationResult.errors
    }
    return overallResult
  }, {valid: true, errors: {}})
}

function validateField(value, rules) {
  return rules.reduce((validationResult, rule) => {
    let errors = rule(value);
    validationResult.valid = validationResult.valid && errors.length === 0
    validationResult.errors = validationResult.errors.concat(errors)
    return validationResult
  }, { valid: true, errors: []})
}

function requiredString(input) {
  let errors = []
  if (typeof input !== 'string') {
    errors.push('Value is not an string')
  }
  if (input === '') {
    errors.push('Value is empty'
    )
  }
  return errors;
}

function validChoice(choices) {
  return (input) => {
    let errors = choices.includes(input) ? [] : [`${input} is not a valid choice: ${choices.join(', ')}`]
    return errors;
  }
}

module.exports = { 
  validate,
  rules: {
    requiredString,
    validChoice
  }
};