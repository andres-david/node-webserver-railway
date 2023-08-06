import dotenv from "dotenv/config";
import express from "express";
import * as url from 'url';
import hbs from 'hbs';



const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático

app.use(express.static('public'));

app.get('/', (req , res) => {
  res.render('home', {
    nombre: 'Andres Cedeño',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req , res) => {
  res.render('generic', {
    nombre: 'Andres Cedeño',
    titulo: 'Curso de Node - Generic'
  })
});

app.get('/elements', (req , res) => {
  res.render('elements', {
    nombre: 'Andres Cedeño',
    titulo: 'Curso de Node - Elements'
  })
});

app.get('*', (req , res) => {
  res.sendFile(__dirname+'/public/404.html');
});


app.listen(port, () => {
  console.log(`The app is listening on port localhost:${port}`)
})


























// import express from "express";
// const app = express();

// const port = 8080;

// app.get('/', (req, res) => {
//     res.send('Hello Mundo')
//   }
// );

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola mundo desde la url hola-mundo');
// })

// app.get('*', (req, res) => {
//   res.send('404 | Page not found');
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });


