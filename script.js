const sendBtn = document.querySelector('#sendBtn');
const msgIn = document.querySelector('#messageIn');
const msgOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click',sendMsg);

function sendMsg(){
    let content = msgIn.value;
    if(content === ''){
        alert('Please Enter a Valid Value. Current Value is Empty.')
    }
    else{
        msgOut.innerHTML = content;
    msgIn.value = '';
    }
}
    