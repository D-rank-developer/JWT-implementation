const CustomAPIError = require('./custom-error')
const badRequestError = require('./bad-request')
const unauthorizedError = require('./unauthorized')


module.exports ={
    CustomAPIError, 
    badRequestError, 
    unauthorizedError,
}// importing the proper error classes
// we use http- status codes then we use npm to install it

//npm install http-status-codes --save