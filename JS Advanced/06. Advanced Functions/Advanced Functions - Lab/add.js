function solution(x) {

      return function sum(n) {
        return x + n;
    }

}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
