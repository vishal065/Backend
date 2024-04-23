const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
};

export { asyncHandler };

//higher order func jo func ko parameter ki trh bhi accpt kr skte h and return m bhi func de skte h
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.status(error.code || 500).json({success:false,message:error.message});
//   }
// };
