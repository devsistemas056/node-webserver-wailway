const http = require('http');

http.createServer((req, res)=>{
    
    // res.writeHead(200, {'Content-Type': 'application/json'} );
    // const person = {
    //     id: 1,
    //     nombre: "Hugo"
    // };
    // res.write(JSON.stringify(person));
    // console.log(res);

    res.write('Hola Mundo');
    res.end();
})
.listen(8084);

console.log(`Escuchando en el puerto 8080`);