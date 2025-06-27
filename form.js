const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url,req.method);
  if(req.url === '/home'){
    res.write('<h1>Welcome to Home</h1>');
    return res.end();
  }else if(req.url === '/men'){
    res.write('<h1>Welcome to Men</h1>')
    return res.end();
  }else if(req.url === '/women'){
    res.write('<h1>Welcome to woMen</h1>')
    return res.end();
  }else if(req.url === '/kids'){
    res.write('<h1>Welcome to kids</h1>')
    return res.end();
  }else if(req.url === '/cart'){
    res.write('<h1>Welcome to cart</h1>')
    return res.end();
  }


  res.write(`
    <html>
    <head>
    <title>Myntra</title>
    </head>
    <body>
    <nav>
    <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/men">Men</a></li>
    <li><a href="/women">Women</a></li>
    <li><a href="/kids">kids</a></li>
    <li><a href="/cart">Cart</a></li>
    </ul>
    </nav>
    
    </body>
    </html>
    `);
  res.end();
});

server.listen(3001, () => {
  console.log(`Server is running at http://localhost:3001`);
});
