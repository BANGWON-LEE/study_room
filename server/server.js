const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');


app.use(express.json());



app.post('/api/register',function (req, res) {
    const params = [req.body.userId, req.body.userPw,req.body.userName,'W',req.body.userHp]
    
    db.query(
      "insert into tb_mem(mem_userid, mem_pass, mem_name, mem_status, mem_hp) values(?,?,?,?,?)",params ,(err,row) => {
      if(err) console.log(err)
    });
    res.end()
});








app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

