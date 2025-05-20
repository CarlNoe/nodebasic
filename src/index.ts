import * as http from "http";
import * as t from "./test";

http
  .createServer(function (req: http.IncomingMessage, res: http.ServerResponse) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(t.test());
  })
  .listen(8080);
