
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');


app.use(express.json());


app.post('/api/register',function (req, res) {
    
    const params = [req.body.mem_userid, req.body.mem_pass,req.body.mem_name,'W',req.body.mem_hp]
    
    db.query(
      "insert into tb_mem(mem_userid, mem_pass, mem_name, mem_status, mem_hp) values(?,?,?,?,?)",params ,(err,data) => {
        
      if(!err) {
        data = true;  
        res.send(200)
      }

      if(err){
        data = false;  
     
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
  console.log("serverLogin : "+ req.body.mem_userid);
  db.query(
    "select * from tb_mem where mem_userid='" 
    + req.body.mem_userid+"'and mem_pass='"+req.body.mem_pass+"'" , (err,data) => {
      

    if (data[0] === undefined ) { //중복되는게 없으면 (없으니까 못가져왓겠지)
          res.send(409);  //다시 클라이언트로 보낸다 checkid 객체를
      }
    
    else {
        res.send(data[0]);
      } 
});
});

app.post('/api/logout',  function (req, res) {
  console.log(req.body.mem_userid);
  db.query(
    "UPDATE tb_mem AS a JOIN tb_seat AS b ON(a.mem_idx = b.st_mem_idx) SET a.mem_status='O', b.st_seatStatus = 'E', b.st_mem_idx = null WHERE a.mem_userid= '" + req.body.mem_userid + "'" , (err,data) => {
      
     
    if (data[0] === undefined ) { //중복되는게 없으면 (없으니까 못가져왓겠지)
           
       
        // check2.tf = false;  //없음 사용가능
        res.send(400);  //다시 클라이언트로 보낸다 checkid 객체를
        
      }
    
    else {
        
        // check2.tf = row[0]; // 중복됨 사용x
        res.send(data[0]);
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
          res.send(200)
        
      }


        if(err){ 
          res.send(err);
        }
})

});

app.get("/api/zone", (req, res) => {
  db.query("SELECT * FROM tb_seat", function (err, data) {
    if (err) {
      console.log("데이터 가져오기 실패");
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.get('/api/userInfo/:mem_userid', (req, res) => {
  const params = req.params.mem_userid;
  const sql = "SELECT a.mem_userid, a.mem_name, b.st_seatNumber,date_format(b.st_endDate, '%Y-%m-%d %H:%i:%s') as st_endDate FROM tb_mem AS a join tb_seat AS b WHERE a.mem_idx = b.st_mem_idx and a.mem_userid = '" + params +"'"; 
  console.log("serverUser : " + params );
  db.query(sql,  (err, data) => {
      if(!err) {
        res.send(data[0])
      } else{
        
        res.send(err)
      }
    })
  
});



app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

// check2 = new Object 수정함. 이전에 db에서 받아오는 데이터를 tf 안에 넣었다. 왜 넣었는지 기억이 나지 않지만. 필요없기 때문에 수정하였다.