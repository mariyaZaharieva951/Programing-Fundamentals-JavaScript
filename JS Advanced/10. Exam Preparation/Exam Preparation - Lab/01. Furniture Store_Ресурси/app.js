window.addEventListener('load', solve);

function solve() {
    let inputModel = document.getElementById('model');
    let inputYear = document.getElementById('year');
    let inputDescription = document.getElementById('description');
    let inputPrice = document.getElementById('price');
    let total = document.getElementsByClassName('total-price')[0];


    let buttonAdd = document.getElementById('add');

    buttonAdd.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let model = inputModel.value;
        let year = Number(inputYear.value);
        let description = inputDescription.value;
        let price = Number(inputPrice.value);

        if(model ==='' || description === '') {
            return
        }
        if(price < 0 || year < 0) {
            return
        }

        let table = document.getElementById('furniture-list');

        let tr = document.createElement('tr');
        tr.classList.add('info');
        let tdModel = document.createElement('td');
        tdModel.textContent = model;
        let tdPrice = document.createElement('td');
        tdPrice.textContent = price.toFixed(2);
        let tdActions = document.createElement('td');

        let buttonMoreInfo = document.createElement('button');
        buttonMoreInfo.textContent = 'More Info';
        buttonMoreInfo.classList.add('moreBtn');
        buttonMoreInfo.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'More Info') {
                trHide.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info'
            } else {
                trHide.style.display = 'none';
                e.currentTarget.textContent = 'More Info'
            }
        });

        let buttonBuy = document.createElement('button');
        buttonBuy.textContent = 'Buy it';
        buttonBuy.classList.add('buyBtn');
        buttonBuy.addEventListener('click', (e) => {
            tr.remove();
            trHide.remove();
            let sum = Number(total.textContent) + Number(tdPrice.textContent);
            total.textContent = sum.toFixed(2)
        })

        let trHide = document.createElement('tr');
        trHide.classList.add('hide');
        trHide.style.display = 'none';
        let tdHideYear = document.createElement('td');
        tdHideYear.textContent = `Year: ${year}`;
        let tdHideDescription = document.createElement('td');
        tdHideDescription.setAttribute('colspan', '3')
        tdHideDescription.textContent = `Description: ${description}`;

        tdActions.appendChild(buttonMoreInfo);
        tdActions.appendChild(buttonBuy)

        tr.appendChild(tdModel);
        tr.appendChild(tdPrice);
        tr.appendChild(tdActions);
    
        trHide.appendChild(tdHideYear);
        trHide.appendChild(tdHideDescription);

        table.appendChild(tr);
        table.appendChild(trHide);

        inputModel.value = '';
        inputYear.value = '';
        inputDescription.value = '';
        inputPrice.value = '';
    }
}