import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import TimeChoiceForm from "../../components/menu/TimeChoiceForm";
import SeatForm from "../../components/menu/SeatForm";
import { seats } from "../../modules/seat";
import { listZones } from "../../modules/zones";
import { logouts } from "../../modules/logout";

function TimeChoiceDetail() {

  const dispatch = useDispatch();
  const history = useHistory();

  const { users, seat, seatError, zones, zonesError } = useSelector(
    ({ seat, users, zones }) => ({
      users: users.users,
      seat: seat.seat,
      seatError: seat.seatError,
      zones: zones.zones,
    })
  );

  useEffect(() => {
    const { st_mem_idx, st_seatNumber, st_seatStatus, st_regDate, st_endDate } =
      "";
    // 객체 선언

    dispatch(
      listZones({
        st_mem_idx,
        st_seatNumber,
        st_seatStatus,
        st_regDate,
        st_endDate,
      })
    );
  }, [dispatch]);

  const [st_seatNumber, setSt_seatNumber] = useState(); // by 이방원 : 좌석 번호를 담은 상태값 (20211130)
  const getUser = localStorage.getItem("users"); // by 이방원 : localStorage에 들어있는 계정의 정보.(20211130)
  const member = JSON.parse(getUser); 
  // by 이방원 : containers/auth/UserDetail.jsx에서 로그인에 성공하면 계정의 정보가 stringfy메서드를 통해 문자열로 저장된다. JSON.parse는 localStorage에 있는 정보를 다시 불러올 때 해당 정보를 JSON 형식으로 바꾸어 가져오는 것이다.   

  function onClickZone(event) {
    const st_seatNumber = event.currentTarget.getAttribute("data-value");
    setSt_seatNumber(st_seatNumber);
  }

  const [hour, setHour] = useState(0);
  const [cost, setCost] = useState(0);
  const [autoTime, setAutoTime] = useState(0); // by 이방원 : 로그아웃 시간 설정 (20211028) 

  const mem_userid = member.mem_userid;

  function oneClick(){
    setHour(hour + 1);
    setCost(cost + 1500);
    setAutoTime(autoTime + 60);
  };

// 1시간 3600
  function threeClick() {
    setHour(hour + 3);
    setCost(cost + 3000);
    setAutoTime(autoTime + 10800);
  }

  function delayTime(autoTime){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(localStorage.removeItem("users", JSON.stringify(users)));
      }, autoTime * 1000);
    });
  }

  async function autoLogout(){
    const result = await delayTime(autoTime).then(() => {
      
      return dispatch(logouts({ mem_userid }));
    });
    alert('이용시간이 만료되었습니다. 로그인 화면으로 이동하겠습니다.')
  }
  // by 이방원
  // autoLogout 함수는 자동로그아웃 기능이다.
  // 좌석을 선택하는 페이지에서 [좌석선택] 버튼을 클릭하면
  // 선택한 시간 만큼 좌석을 사용할 수 있다.
  // 시간 소모는 비동기 방식을 이용해 구현하였다.
  // 2021-11-06  

  
  function onSubmit() {
    //event.preventDefault();
    //console.log(event.currentTarget.getAttribute("data-value"));
    const st_mem_idx = member.mem_idx;
    const mem_userid = member.mem_userid;
    const st_endDate = hour;

    // console.log("!!:" + st_mem_idx);
    // console.log("!!:" + st_endDate);
    // console.log("!!:" + st_seatNumber);

    alert("좌석을 지정하였습니다.");

    
    
    member.mem_status = 'L';
    localStorage.setItem('users', JSON.stringify(member))
    //by 이방원 : 좌석 선택 후, mem_status, 계정 상태 값이 바뀌지 않는다. db에는 바뀌었지만 localStorage는 바뀌지 않아 직접 수정하였다. / 20211028

    dispatch(seats({ st_mem_idx, st_endDate, st_seatNumber, mem_userid }));
    history.push('/menu')
    autoLogout()
  }



  const [seatForm, handleSeatForm] = useState(false); 
  // by 이방원 : 
  //좌석을 이용할 시간과 금액을 선택하고 [다음] 버튼을 클릭하면 좌석을 선택할 수 있는 화면이 보이도록 도와준다. seatForm이 false일 때는 보이지 않고 true일 때 보이게 된다.
  // 20211130

  function handleSeat() {
    handleSeatForm(true);
  }

  useEffect(() => {
    if (seatError) {
      if (seatError.response.status === 400) {
        return;
      }
      console.log(`error!`);
      console.log(seatError);

      return;
    }
    if (seat) {
      console.log("성공@@#");
      console.log(seat);
      
      return;
    }
  }, [ seat, seatError]);

  useEffect(() => {
    if (zonesError) {
      if (zonesError.response.status === 400) {
        window.location.replace("/login");
        return;
      }
      console.log("error!");
      console.log(zonesError);

      return;
    }
    if (zones) {
      console.log("성공");
      console.log(zones);

      return;
    }
  }, [zones, zonesError]);



  return (
    <>
      <TimeChoiceForm
        oneClick={oneClick}
        threeClick={threeClick}
        cost={cost}
        hour={hour}
        handleSeat={handleSeat}
        seatForm={seatForm}
      />
      <div>
        {seatForm === true ? (
          <SeatForm
            hour={hour}
            users={users}
            zones={zones}
            onClickZone={onClickZone}
            onSubmit={onSubmit}
          />
        ) : null }
      </div>
    </>
  );
}

export default withRouter(TimeChoiceDetail);