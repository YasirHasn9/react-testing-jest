
exports.isItEven = function(num , cb){
 if(num % 2 === 0){
   return cb(num)
 }
}