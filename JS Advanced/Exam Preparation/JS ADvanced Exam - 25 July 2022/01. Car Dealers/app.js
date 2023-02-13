window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let productionYear = document.getElementById('year');
  let fuelType = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let publishButton = document.getElementById('publish');
  let tBody = document.getElementById('table-body');
  let carsList = document.getElementById('cars-list');
  let profit = document.getElementById('profit');

  publishButton.addEventListener('click', publish);


  function publish(event) {
    event.preventDefault();

    if (make.value === '' || model.value === "" || productionYear.value === '' || fuelType.value === "" || originalCost.value > sellingPrice.value) {
      return
    }

    let makeValue = make.value;
    let modelValue = model.value;
    let productionYearValue = productionYear.value;
    let fuelTypeValue = fuelType.value;
    let originalCostValue = Number(originalCost.value);
    let sellingPriceValue = Number(sellingPrice.value);

    let tr = document.createElement('tr');
    let tdMake = document.createElement('td');
    let tdModel = document.createElement('td');
    let tdYear = document.createElement('td');
    let tdFuel = document.createElement('td');
    let tdOrigCost = document.createElement('td');
    let tdSellCost = document.createElement('td');
    let editButton = document.createElement('button');
    let sellButton = document.createElement('button');

    tr.classList = 'row';

    tdMake.textContent = makeValue;
    tdModel.textContent = modelValue;
    tdYear.textContent = productionYearValue;
    tdFuel.textContent = fuelTypeValue;
    tdOrigCost.textContent = originalCostValue;
    tdSellCost.textContent = sellingPriceValue;

    editButton.textContent = 'Edit';
    editButton.classList = 'action-btn edit';

    sellButton.textContent = 'Sell';
    sellButton.classList = 'action-btn sell';

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOrigCost);
    tr.appendChild(tdSellCost);
    tr.appendChild(editButton);
    tr.appendChild(sellButton);

    tBody.appendChild(tr);

    make.value = "";
    model.value = "";
    productionYear.value = "";
    fuelType.value = "";
    originalCost.value = "";
    sellingPrice.value = "";

    editButton.addEventListener('click', edit);

    function edit(event) {
      make.value = makeValue;
      model.value = modelValue;
      productionYear.value = productionYearValue;
      fuelType.value = fuelTypeValue;
      originalCost.value = originalCostValue;
      sellingPrice.value = sellingPriceValue;

      tr.remove();
    }

    sellButton.addEventListener('click', sell);

    function sell(event) {
      tr.remove();

      let liList = document.createElement('li');
      liList.classList = 'each-list';
      
      let spanModel = document.createElement('span');
      let spanYear = document.createElement('span');
      let spanDiffPrice = document.createElement('span');
      spanDiffPrice.id = 'profitMade';

      spanModel.textContent = `${makeValue} ${modelValue}`;
      spanYear.textContent = productionYearValue;
      spanDiffPrice.textContent = sellingPriceValue - originalCostValue;
      

      liList.appendChild(spanModel);
      liList.appendChild(spanYear);
      liList.appendChild(spanDiffPrice);

      carsList.appendChild(liList);

      let allSpanDiff = [...document.querySelectorAll('#profitMade')];
      console.log(allSpanDiff)

      let sum = 0;
      for(let price of allSpanDiff)
       sum += Number(price.textContent);

      profit.textContent = sum.toFixed(2);

    }
  }

}
