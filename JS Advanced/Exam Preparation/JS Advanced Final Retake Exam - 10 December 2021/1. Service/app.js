window.addEventListener('load', solve);

function solve() {

    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let name = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let sendButton = document.querySelectorAll('button')[0];
    let clearButton = document.querySelectorAll('button')[1];
    let receivedOrder = document.getElementById('received-orders');
    let completedOrder = document.getElementById('completed-orders');


    sendButton.addEventListener('click', send);

    function send(event) {
        event.preventDefault();

        let productTypeValue = productType.value;
        let descriptionValue = description.value;
        let nameValue = name.value;
        let phoneValue = phone.value;

        if(descriptionValue === "" || nameValue === "" || phoneValue === "") {
            return
        }

        let divReceived = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let startButton = document.createElement('button');
        let finishButton = document.createElement('button');

        divReceived.classList = 'container';

        h2.textContent = `Product type for repair: ${productTypeValue}`;
        h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;
        h4.textContent = `Description of the problem: ${descriptionValue}`;

        startButton.textContent = 'Start repair';
        startButton.classList = 'start-btn';
        finishButton.textContent = 'Finish repair';
        finishButton.classList = 'finish-btn';

        divReceived.appendChild(h2);
        divReceived.appendChild(h3);
        divReceived.appendChild(h4);
        divReceived.appendChild(startButton);
        divReceived.appendChild(finishButton);

        receivedOrder.appendChild(divReceived);

        finishButton.disabled = true;

        productType.value = "";
        name.value = "";
        phone.value = "";
        description.value = "";

        startButton.addEventListener('click', start);

        function start(event) {
            startButton.disabled = true;
            finishButton.disabled = false;
        }

        finishButton.addEventListener('click', finish);

        function finish(event) {
            completedOrder.appendChild(divReceived);
            startButton.remove();
            finishButton.remove();
        }

        clearButton.addEventListener('click', clear);

        function clear(event) {
           completedOrder.innerHTML = "";
        }
    }

}