const http = require("http");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("¡Bienvenido al servidor HTTP!");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Esta es la página de acerca de nosotros.");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Ponte en contacto con nosotros en contact@example.com");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor HTTP en funcionamiento en http://localhost:${port}`);
});
