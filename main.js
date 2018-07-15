var socket = io.connect('http://192.168.0.104:6677', {'forceNew': true});
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
