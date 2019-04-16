const Router         = require('koa-router');
const nunjucks       = require('nunjucks');
const configDatabase = require('./knexMiddleware');
const knex           = require('knex')(configDatabase);
const router         = new Router();

router.get('/khoi/:tennv', async (context, next)=> {
let items  = await knex.select('*').from('nhanvien').where('tennv', 'like', '%' + context.params.tennv + '%');
context.body = nunjucks.render('index.html', {items});
});

module.exports = router; 
