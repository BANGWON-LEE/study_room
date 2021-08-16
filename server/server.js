
const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');


app.use(express.json());
router.use(express.json());
let check = new Object();

app.post('/api/register',function (req, res) {

    const params = [req.body.mem_userid, req.body.mem_pass,req.body.mem_name,'W',req.body.mem_hp]
    
    db.query(
      "insert into tb_mem(mem_userid, mem_pass, mem_name, mem_status, mem_hp) values(?,?,?,?,?)",params ,(err,row) => {
        
      if(row > 0) {
        check.tf = false;  
        res.send(200)
      
      }


        if(err){
        check.tf = false;  
     
        res.send(409);
        }
    
    // 회원가입 과정 중 res.length가 잘 안됨 조건문에 else를 주면 먹히긴 하는데 어떻게 조건을 줘야 먹힐 지 모르겠음 -> undefined에 먹히는 듯 
    
 

  });
    
 



}
);


router.get('/api/login',function (req, res) {

  const params = [req.query.mem_userid, req.query.mem_pass]
  
  db.query(
    "select * from tb_mem where mem_userid='" 
    + req.params.mem_userid+"'and mem_pass='"+req.params.mem_pass+"'" , (err,row) => {
      

try{
    if (row[0] === undefined) { //중복되는게 없으면 (없으니까 못가져왓겠지)
      check.tf = true;  //없음 사용가능
      res.send(check);  //다시 클라이언트로 보낸다 checkid 객체를
  }

  else {
      
    check.tf = false; // 중복됨 사용x
      res.send(check);

  } }catch(e){
    res.thorws(409);
  }

});
  

});






app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})