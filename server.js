const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const url = require('url');
const port = process.env.PORT || 3333;

server.use(middlewares);

router.render = (req, res) => {
  const pathname = url.parse(req.url).pathname;
  const query = url.parse(req.url).query;
  
  let response = {
    items: res.locals.data
  }

  if (query) {
    if (query.includes('_page')) {
      response.offset = Number(query.split('=')[1]);
      response.limit = 10;
      response.size = router.db.get(pathname.split('/')[1]).size();
      response.href = pathname;
      
      if (query.includes('&')) {
        const limit = query.split('&').filter(data => data.includes('_limit'));
        const offset = query.split('&').filter(data => data.includes('_page'))[0];

        response.offset = Number(offset.split('=')[1]);  
        if (limit.length) {
          response.limit = Number(limit[0].split('=')[1]);
        }

      }
    }
  }

  res.jsonp(response);  
}

server.use(router)
server.listen(port, function () {
  console.log(`JSON Server is running in the port ${port}`);
})