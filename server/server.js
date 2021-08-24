
const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');


app.use(express.json());
router.use(express.json());
let check2 = new Object();

app.post('/api/register',function (req, res) {

    const params = [req.body.mem_userid, req.body.mem_pass,req.body.mem_name,'W',req.body.mem_hp]
    
    db.query(
      "insert into tb_mem(mem_userid, mem_pass, mem_name, mem_status, mem_hp) values(?,?,?,?,?)",params ,(err,row) => {
        
      if(row > 0) {
        check2.tf = true;  
        res.send(200)
      
      }


        if(err){
        check2.tf = false;  
     
        res.send(409);
        }
    
    // 회원가입 과정 중 res.length가 잘 안됨 조건문에 else를 주면 먹히긴 하는데 어떻게 조건을 줘야 먹힐 지 모르겠음 -> undefined에 먹히는 듯 
  });
    
}
);


app.post('/api/login', function (req, res) {
  console.log(req.body.mem_userid);
  db.query(
    "select * from tb_mem where mem_userid='" 
    + req.body.mem_userid+"'and mem_pass='"+req.body.mem_pass+"'" , (err,row) => {
      

    if (row[0] === undefined ) { //중복되는게 없으면 (없으니까 못가져왓겠지)
           
       
        check2.tf = false;  //없음 사용가능
          res.send(409);  //다시 클라이언트로 보낸다 checkid 객체를
      }
    
    else {
        
        check2.tf = row[0]; // 중복됨 사용x
        res.send(check2);
      } 
});
});

app.post('/api/logout',  function (req, res, {history}) {
  console.log(req.body.mem_userid);
  db.query(
    "UPDATE tb_mem AS a JOIN tb_seat AS b ON(a.mem_idx = b.st_mem_idx) SET a.mem_status='O', b.st_seatStatus = 'E' WHERE a.mem_userid= '" + req.body.mem_userid + "'" , (err,row) => {
      
     
    if (row[0] === undefined ) { //중복되는게 없으면 (없으니까 못가져왓겠지)
           
       
        check2.tf = false;  //없음 사용가능
        res.send(400);  //다시 클라이언트로 보낸다 checkid 객체를
        
      }
    
    else {
        
        check2.tf = row[0]; // 중복됨 사용x
        res.send(check2);
      } 
});
});



app.post('/api/seat',  function (req, res) {
  const idx = req.body.st_mem_idx;
  const endDate = req.body.st_endDate;
  const num = req.body.st_seatNumber
  console.log("server : " + idx);
  const date = new Date();
  const date1 = date;
  console.log("server : " + endDate);
  date.setHours(date.getHours()+endDate)  
  console.log("server : " + date);
  console.log("server : " + date1);
  console.log("server : " + num);

  db.query(
    "UPDATE tb_seat SET st_mem_idx = "+idx+", st_seatStatus = 'S', st_regDate = CAST(DATE_FORMAT(NOW(),'%Y-%m-%d %H:%i:%s')as char(30)), st_endDate = DATE_ADD(NOW(), INTERVAL "+endDate+" HOUR) where st_seatNumber =  "+ num ,  (err,row) => {
      
      
      if(row > 0) {
       
          check2.tf = false;  
     
          res.send(409);
      }


        if(err){
          check2.tf = true;  
          res.send(200)
        }
})
});

app.get("/api/zone", (req, res) => {
  db.query("SELECT * FROM tb_seat", function (err, rows, fields) {
    if (err) {
      console.log("데이터 가져오기 실패");
    } else {
      check2.tf = rows
      console.log(rows);
      res.send(rows);
    }
  });
});



app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})