import http from "http";

http.createServer( (req, res) => {

  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // res.writeHead(200, {'Content-Type': 'application/csv'});

  res.write('Hola mundo');
  res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080);


