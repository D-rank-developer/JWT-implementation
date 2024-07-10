
const jwt= require('jsonwebtoken');
const CustomAPIError= require('../errors/custom-error')
const {badRequestError}= require('../errors')

const login= async (req,res)=>{
    const {username, password}= req.body
    if(!username || ! password){
        throw new badRequestError("please provide email and password")

    }

    const id= new Date().getDate()// for the demo database
// trying to get the jwt token

    const token = jwt.sign({id,username}, process.env.JWT_SECRETS,{expiresIn:'30d'})//providing a payload and jwt secret string, do not send confidential information in here
    res.status(200).json({msg:'user created', token})// setting authorization header and with the use of a bearer schema
    // signing a token and giving it to the front end request
    //emphazizing on securing resource access on the server

    res.send('Fake Login/Register/Signup Route')
    }
    
    const dashboard = async(req,res)=>{
        const luckyNumber= Math.floor(Math.random()*100)
            
            res.status(200).json({msg:`Hello, ${req.user.username}`, secret:` Here is your authorized data, your lucky number is ${luckyNumber}`})
           
        
       
    }
    
    module.exports ={
        login, dashboard
    }