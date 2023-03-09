const constants = require('../constants')
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({message:err.message,stackTrace:err.stack})


    
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Errors",
                message:err.message,
                stackTrace:err.stack
            })
            break;
            case constants.UNAUTHERIZED:
                res.json({
                    title:"UNAUTHERIZED",
                    message:err.message,
                    stackTrace:err.stack
                })
                break;
            case constants.FORBIDDEN:
                res.json({
                    title:"Forbidden",
                    message:err.message,
                    stackTrace:err.stack
                })
                break;
            case constants.NOT_FOUND:
                res.json({
                    title:"Page not Found",
                    message:err.message,
                    stackTrace:err.stack
                })
                break;
            case constants.SERVER_ERROR :
                res.json({
                    title:"INTERNAL_SERVER_ERROR",
                    message:err.message,
                    stackTrace:err.stack
                })
                break;
        default:
            console.log("no errors all are good")
            break;
    }
}

module.exports= errorHandler;