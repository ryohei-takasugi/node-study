import http from 'node:http';
import logger from './logger';
import { ResponseBodyType } from './myType';

const port: number = 8080;

// type ResponseBody = { url: string; data: string, method: string };

// Create a local server to receive data from
const server: http.Server = http.createServer((request, response) => {

    const body: ResponseBodyType = {
        url: request.url?.toUpperCase() || "",
        message: 'Hello World!',
        method: request.method?.toLocaleUpperCase() || "",
    };
    if (logger.isDebugEnabled()) {
        logger.debug(JSON.stringify(body));
    }

    const httpStatus: number = 200;
    const httpHeaders: http.OutgoingHttpHeaders = { 'Content-Type': 'application/json' };

    response.writeHead(httpStatus, httpHeaders);
    response.end(JSON.stringify(body));

});

server.listen(port);