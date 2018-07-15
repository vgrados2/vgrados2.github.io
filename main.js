var socket = io.connect('https://enigmatic-island-68471.herokuapp.com', {'forceNew': true});
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = data.map(function(message, index){
        return (
        `<div class="message">
            <strong>${message.nickname}</strong> dice:
            <p>${message.text}</p>
        </div>
        `);
    }).join(' ');
    var divmsg = document.getElementById('messages');
    divmsg.innerHTML = html;
    divmsg.scrollTo = divmsg.scrollHeight;
}
function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    }
    document.getElementById('nickname').style.display = 'none';

    socket.emit('add-message', message);
    return false;
}
