// setting up authentication middleware
const jwt = require('jsonwebtoken');
const{unauthorizedError}= require('../errors')
const CustomAPIError = require('../errors/custom-error');
const authMiddleware = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        throw new unauthorizedError('Invalid token', )
        }

        const token= authHeader.split(' ')[1]
        try {
            const decoded = jwt.verify(token , process.env.JWT_SECRETS)
            const {id, username} = decoded
            req.user = {id, username}

            next()
            
            
        } catch (error) {
            
            throw new unauthorizedError('Not authorized to access this route',)
        }


    
 
}

module.exports = authMiddleware;