const Koa = require('koa');
const Router = require('koa-router');

var app = new Koa();
var router = new Router();

var user = [
  {
    name: 'khoi',
    place: 'bac ninh',
  },
  {
    name: 'quang',
    place: 'ha nam',

  },
  {
    name: 'co',
    place: 'nam dinh'
  }
];
// router.get('/', (ctx, next) => {
//   ctx.body = {
//     name: 'khoi',
//     place: 'bac ninh'
//   };
//   return next;
// });

router.get('/user/:id', (ctx) => {
  ctx.body = user[ctx.body.id];
});

app
  .use(require('koa-body'()))
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000);