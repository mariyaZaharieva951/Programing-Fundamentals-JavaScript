function encodeAndDecodeMessages() {
    let firstText = document.querySelector('div textarea[placeholder="Write your message here..."]');
    let secondText =  document.querySelector('div textarea[placeholder="No messages..."]');

    let buttonEncode = firstText.parentElement.children[2];
    let buttonDecode = secondText.parentElement.children[2];

    buttonEncode.addEventListener('click', encode);
    buttonDecode.addEventListener('click', decode);

    function encode(event){
        let text = event.target.parentElement.children[1].value;
        let newText = '';
        console.log(text)
        for(let i = 0; i < text.length; i ++){
           let newCode = Number(text.charCodeAt(i)) + 1;
           newText += String.fromCharCode(newCode);
        }
        secondText.value = newText;
        firstText.value = '';  
    }

    function decode(event){
        let text = event.target.parentElement.children[1].value;
        let newText = '';
        console.log(text)
        for(let i = 0; i < text.length; i ++){
           let newCode = Number(text.charCodeAt(i)) - 1;
           newText += String.fromCharCode(newCode);
        }
        secondText.value = newText;
    }
}