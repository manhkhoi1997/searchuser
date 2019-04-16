const koa = require('koa');
 const app = new koa();

const showUserby = require('./showUserbyId')

app.use(showUserby);
app.listen(1234);
