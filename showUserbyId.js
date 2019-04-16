const knex = require('./knexMiddleware');

module.exports = async (context) => {

	if (!context.query.id){
    return context.body = {message: 'id is require'};
  }


  const result = await knex.select('*').from('nhanvien').where('id',context.query.id);
  context.body = result[0] || {messaage:'no user'};

};
