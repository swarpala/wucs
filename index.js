const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (request, response) => {
    response.sendFile(__dirname+'/gallery.html');
})

app.listen(port, () => console.log("server listening : ", port));

app.use('/ajax/user',require('./routes/userRouter'));
app.use('/ajax/posting',require('./routes/postRouter'));