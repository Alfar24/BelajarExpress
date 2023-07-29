var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function (client) {
  router.get('/', function(req, res, next) {
    const sql = 'select * from llu26'
    client.query(sql,(err,users)=> {
      res.render('index', { user: users.rows });
    })
});

router.post('/', function(req, res, next) {
  const sql = 'insert into from llu26 (id,nama,nit)' values (${req.body.id}, ${req.body.nama} ${req.body.nit})
  client.query(sql,(err,users)=> {
    res.redirect('index');
  })
});
return router
}

