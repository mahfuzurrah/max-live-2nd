// server.js
const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const next = require('next');

const devProxy = {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      console.log('Proxying request to:', proxyReq.path);
    },
  },
};
console.log(ta)

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (process.env.NODE_ENV === 'development') {
    Object.keys(devProxy).forEach(function (context) {
      server.use(context, createProxyMiddleware(devProxy[context]));
    });
  }

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
