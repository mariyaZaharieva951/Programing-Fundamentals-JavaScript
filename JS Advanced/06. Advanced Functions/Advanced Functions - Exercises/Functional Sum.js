function functionalSum(number) {

    let inner = function(a) {
        number += a;
        return inner;
        
    }

    inner.toString = function() {
        return number;
    }
return inner;
}
console.log(functionalSum(1)(6)(-3).toString(

))