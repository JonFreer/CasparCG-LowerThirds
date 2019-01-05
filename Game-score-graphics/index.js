var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');


app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

function reset(){
    dataReset = { teamOneName: "Team One", teamTwoName: "Team Two", state: "off", teamOneScore: 0, teamTwoScore: 0 ,teamOneColour:"#ff0000" ,teamTwoColour:"#0000ff",scale:1}
    return dataReset
}

dataMain= reset()

app.get('/control', function (req, res) {
    res.sendFile(path.join(__dirname + '/control.html'));
});

app.get('/casparcg.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/casparcg.js'));
});

app.get('/jquery-3.1.1.min.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery-3.1.1.min.js'));
});

io.on('connection', function (client) {
    

    client.on('join', function (data) {
        console.log("Client connected: "+data);
        client.emit('data', dataMain);
    });

    client.on('state', function (data) {
        console.log("state: " + data)
        client.broadcast.emit('state', data)
        dataMain.state = data;
        client.emit('state',data)
    });
    client.on('score1', function (data) {
        console.log("score1: " + data)
        dataMain.teamOneScore = dataMain.teamOneScore + data
        client.broadcast.emit('score1', dataMain.teamOneScore)
        client.emit('score1', dataMain.teamOneScore)
    });

    client.on('score2', function (data) {
        console.log("score2: " + data)
        dataMain.teamTwoScore = dataMain.teamTwoScore + data
        client.broadcast.emit('score2', dataMain.teamTwoScore)
        client.emit('score2', dataMain.teamTwoScore)
    });

    client.on('name1', function (data) {
        console.log("name1: " + data)
        client.broadcast.emit('name1', data)
        dataMain.teamOneName = data
        client.emit('name1', data)
    });

    client.on('name2', function (data) {
        console.log("name2: " + data)
        client.broadcast.emit('name2', data)
        dataMain.teamTwoName = data
        client.emit('name2', dataMain.teamTwoName)
    });

    client.on('colour1', function (data) {
        console.log("colour1: " + data)
        client.broadcast.emit('colour1', data)
        dataMain.teamOneColour = data
        client.emit('colour1', dataMain.teamOneColour)
    });

    client.on('colour2', function (data) {
        console.log("colour2: " + data)
        client.broadcast.emit('colour2', data)
        dataMain.teamTwoColour = data
        client.emit('colour2', dataMain.teamTwoColour)
    });

    client.on('reset', function () {
        console.log("reset")
        dataMain = reset()
        client.emit('data', dataMain);
        client.broadcast.emit('data', dataMain);
    });

    client.on('scale', function (data) {
        client.emit('scale', data);
        client.broadcast.emit('scale', data);
    });

});


server.listen(4200);

