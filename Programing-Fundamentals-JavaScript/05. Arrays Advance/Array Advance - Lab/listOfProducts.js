function listOfProducts(arr) {

    let sortArr = arr.sort()

for(let i = 0; i < sortArr.length; i++) {
    let currentProduct = sortArr[i];

    console.log(`${i+1}.${currentProduct}`);

}


}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])