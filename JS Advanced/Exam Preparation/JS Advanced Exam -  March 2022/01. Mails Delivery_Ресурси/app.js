function solve() {

    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let addButton = document.getElementById('add');
    let resetButton = document.getElementById('reset');
    let ulList = document.getElementById('list');
    let ulSent = document.querySelector('.sent-list');
    let ulDelete = document.querySelector('.delete-list');


    addButton.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let recipientValue = recipient.value;
        let titleValue = title.value;
        let messageValue = message.value;

        if (recipientValue === '' || titleValue === '' || messageValue === '') {
            return
        }

        let liList = document.createElement('li');
        let h4Title = document.createElement('h4');
        let h4Recipient = document.createElement('h4');
        let spanMessage = document.createElement('span');
        let divAction = document.createElement('div');
        let sendButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        h4Title.textContent = `Title: ${titleValue}`;
        h4Recipient.textContent = `Recipient Name: ${recipientValue}`;
        spanMessage.textContent = messageValue;
        divAction.classList = 'list-action';
        sendButton.textContent = 'Send';
        sendButton.id = 'send'
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'delete';

        divAction.appendChild(sendButton);
        divAction.appendChild(deleteButton);

        liList.appendChild(h4Title);
        liList.appendChild(h4Recipient);
        liList.appendChild(spanMessage);
        liList.appendChild(divAction);

        ulList.appendChild(liList);

        recipient.value = '';
        title.value = '';
        message.value = '';

        sendButton.addEventListener('click', send);

        function send(event) {
            let liSend = document.createElement('li');
            let spanTo = document.createElement('span');
            let spanTitle = document.createElement('span');
            let divBtn = document.createElement('div');
            let deleteButtonSent = document.createElement('button');

            spanTo.textContent = `To: ${recipientValue}`;
            spanTitle.textContent = `Title: ${titleValue}`;
            divBtn.classList = 'btn';
            deleteButtonSent.textContent = 'Delete';
            deleteButtonSent.classList = 'delete';

            divBtn.appendChild(deleteButtonSent);

            liSend.appendChild(spanTo);
            liSend.appendChild(spanTitle);
            liSend.appendChild(divBtn);

            ulSent.appendChild(liSend);

            liList.remove();

            deleteButtonSent.addEventListener('click', deleteMail);

            function deleteMail(event) {
                let liDelete = document.createElement('li');
                let spanToDelete = document.createElement('span');
                let spanTitleDelete = document.createElement('span');
    
                spanToDelete.textContent = `To: ${recipientValue}`;
                spanTitleDelete.textContent = `Title: ${titleValue}`;
                
                ulDelete.appendChild(liDelete);
                ulDelete.appendChild(spanToDelete);
                ulDelete.appendChild(spanTitleDelete)
    
                liSend.remove();
                
            }

        }

        deleteButton.addEventListener('click', deleteMail);
        
        function deleteMail(event) {
            let liDelete = document.createElement('li');
            let spanToDelete = document.createElement('span');
            let spanTitleDelete = document.createElement('span');

            spanToDelete.textContent = `To: ${recipientValue}`;
            spanTitleDelete.textContent = `Title: ${titleValue}`;
            
            ulDelete.appendChild(liDelete);
            ulDelete.appendChild(spanToDelete);
            ulDelete.appendChild(spanTitleDelete)

            liList.remove();
            
        }

    }

    resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        recipient.value = '';
        title.value = '';
        message.value = '';
    })
}
