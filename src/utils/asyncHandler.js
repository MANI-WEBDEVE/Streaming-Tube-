const asyncHandler = (requestHandler) => {
     return (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
     }
};

export { asyncHandler };





//! let`s check higher order function siple is that function inside function

// const asyncHandler = () => {}

// const asyncHandler = (function) => {}

// const asyncHandler = (function) => {
// async () => {}
//}

/* 

? const asyncHandler = (fn) => {
  ?  async (req, res, next) => {
   ?     try {
    ?        await fn(req,res,next)  
     ?   } catch (error) {
     ?       res.status(error.code || 500).json({
      ?          success:false,
       ?         message: error.message
        ?    })
       ? }
   ? }
? }

*/
