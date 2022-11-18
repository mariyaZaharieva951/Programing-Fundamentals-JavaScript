function softUniBarIncome (input) {

let index = 0;
let line = input[index];
let totalSum = 0;

while(line !== 'end of shift'){
  let pattern = /\%(?<customer>([A-Z]{1}[a-z]+))\%[^%|$.]*?<(?<product>\w+)>[^%|$.]*?\|(?<quantity>\d+)\|[^%|$.]*?(?<price>\d+(\.\d+)?)+\$/g
  
  let matches = pattern.exec(line);

  if(matches !== null){
  let totalPrice = (Number(matches.groups.quantity) * Number(matches.groups.price)).toFixed(2);
  totalSum += Number(totalPrice);
 
 
  console.log(`${matches.groups.customer}: ${matches.groups.product} - ${totalPrice}`)
 }

  index++;
  line = input[index];
}
console.log(`Total income: ${totalSum.toFixed(2)}`)

}

softUniBarIncome (['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)