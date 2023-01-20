function solve() {
    
    let [text1,text2] = document.querySelectorAll('textarea'); 
    let body = document.getElementsByTagName('tbody');
    let [buttonGenerate,buttonBuy] = [...document.querySelectorAll('button')];
    buttonGenerate.addEventListener('click', addFurniture)
    buttonBuy.addEventListener('click', buy);
    let totalSum = 0;
    let totalDecFactor = 0;
    let counter = 0;
    let totalBuy = [];

    function addFurniture(event){
        let inputText1 = JSON.parse(text1.value);
        inputText1.forEach(input => {
            
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let img = document.createElement('img');
        img.src = input.img;
        td1.appendChild(img);
        tr.appendChild(td1);
        body[0].appendChild(tr)

        let td2 = document.createElement('td');
        let p2 = document.createElement('p');
        p2.textContent = input.name;
        td2.appendChild(p2);
        tr.appendChild(td2);
        body[0].appendChild(tr);

        let td3 = document.createElement('td');
        let p3 = document.createElement('p');
        p3.textContent = input.price;
        td3.appendChild(p3);
        tr.appendChild(td3);
        body[0].appendChild(tr);

        let td4 = document.createElement('td');
        let p4 = document.createElement('p');
        p4.textContent = input.decFactor;
        td4.appendChild(p4);
        tr.appendChild(td4);
        body[0].appendChild(tr);

        let td5 = document.createElement('td');
        let input5 = document.createElement('input');
        input5.type = "checkbox";
        input5.disabled
        td5.appendChild(input5);
        tr.appendChild(td5);
        body[0].appendChild(tr);
    });    
    }

    function buy(event){
        let inputs = [...document.querySelectorAll("input")];

        for(let input of inputs){
            if(input.checked === true){
                let furniture = input.parentElement.parentElement.children[1].textContent;
                let currentPrice = Number(input.parentElement.parentElement.children[2].textContent);
                let currentDecFactor = Number(input.parentElement.parentElement.children[3].textContent)
                totalBuy.push(furniture);
                totalSum += currentPrice;
                totalDecFactor += currentDecFactor;
                counter++;
            }
        }
        text2.value = `Bought furniture: ${totalBuy.join(', ')}\n` + `Total price: ${totalSum.toFixed(2)}\n` + `Average decoration factor: ${totalDecFactor/counter}`


    }
    
    
text2.value = '';

}