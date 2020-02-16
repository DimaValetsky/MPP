// const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// const server = http.createServer();

app.use(cors());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());


// app.on('request', (req, res) => {
//     res.end('Osnovy Node');
//
// });
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });


const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res) {
    // console.log(req);
    res.send('ответ с сервака');
});

app.post('/', urlencodedParser, function(req, res){
    // console.log(req.headers);

    console.log(req.body);
    //полученный текст с фронта засовываю в html Разметку и отправляю через res.send\

    // res.send(req.body);
});

app.listen(4000, () => console.log('Server works'));