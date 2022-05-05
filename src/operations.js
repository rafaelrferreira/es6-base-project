function applyDiscount(value, discount){
    if(discount > value) return 0;
    return value - discount;
 }
 
 module.exports = { applyDiscount }