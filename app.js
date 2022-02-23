const express = require ('express');
const app = express();
const path = require ('path')
app.use("/static", express.static(__dirname + '/public'))
//app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});
app.listen(3030,() => console.log('Server running in 3030 port'));
// despues de todo lo inicial se corre con npm run dev