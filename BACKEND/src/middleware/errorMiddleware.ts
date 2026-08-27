import {Request,Response,NextFunction} from "express"
export const errorhandler=(
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
console.log(err);
res.status(500).json({
    success:false,
    message:"Some thing went wrong"
})
}
