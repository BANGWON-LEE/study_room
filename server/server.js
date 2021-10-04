
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');


app.use(express.json());
let check2 = new Object();

app.post('/api/register',function (req, res) {
    
    const params = [req.body.mem_userid, req.body.mem_pass,req.body.mem_name,'W',req.body.mem_hp]
    
    db.query(
      "insert into tb_mem(mem_userid, mem_pass, mem_name, mem_status, mem_hp) values(?,?,?,?,?)",params ,(err,row) => {
        
      if(!err) {
        check2.tf = true;  
        res.send(200)
      }

      if(err){
        check2.tf = false;  
     
        res.send(409);
      }
    
    // 회원가입을 시도하고 실패하면 에러가 발생하는데, 에러가 발생하면 409번 상태코드를 보내고,
    // 에러가 아닐 경우에는 200번 상태코드를 보낸다.
    // mem_status는 계정의 현재 상태에 대해서 알려준다. 
    // (W : 계정을 생성하고 대기 중, O : 로그아웃 상태이며 좌석을 사용하지 않는 상태, L : 로그인된 상태이며, 좌석으 사용 중인 상태)
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

app.post('/api/logout',  function (req, res) {
  console.log(req.body.mem_userid);
  db.query(
    "UPDATE tb_mem AS a JOIN tb_seat AS b ON(a.mem_idx = b.st_mem_idx) SET a.mem_status='O', b.st_seatStatus = 'E', b.st_mem_idx = null WHERE a.mem_userid= '" + req.body.mem_userid + "'" , (err,row) => {
      
     
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
  const userid = req.body.mem_userid
  const idx = req.body.st_mem_idx;
  const endDate = req.body.st_endDate;
  const num = req.body.st_seatNumber

  const date = new Date();


  date.setHours(date.getHours()+endDate)  

  db.query(
    "UPDATE tb_mem AS a , tb_seat AS b  SET a.mem_status='L', b.st_mem_idx = "+idx+", b.st_seatStatus = 'S', b.st_regDate = CAST(DATE_FORMAT(NOW(),'%Y-%m-%d %H:%i:%s')as char(30)), b.st_endDate = DATE_ADD(NOW(), INTERVAL "+endDate+" HOUR) where b.st_seatNumber =  '"+ num +"' AND a.mem_userid = '"+userid+"'" ,  (err,row) => {
      
  

      if(row > 0) {
        check2.tf = true;  
          res.send(200)
        
      }


        if(err){
          check2.tf = false;  
          res.send(err);
        }
})

});

app.get("/api/zone", (req, res) => {
  db.query("SELECT * FROM tb_seat", function (err, rows) {
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