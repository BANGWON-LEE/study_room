import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import TimeChoiceForm from "../../components/menu/TimeChoiceForm";
import SeatForm from "../../components/menu/SeatForm";
import { seats } from "../../modules/seat";
import { listZones } from "../../modules/zones";
import { logouts } from "../../modules/logout";

function TimeChoiceDetail() {

  const date = new Date();
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

  const [st_seatNumber, setSt_seatNumber] = useState();
  const getUser = localStorage.getItem("users");
  const member = JSON.parse(getUser);

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
    setAutoTime(autoTime + 360);
  };


  function threeClick() {
    setHour(hour + 3);
    setCost(cost + 3000);
    setAutoTime(autoTime + 1080);
    console.log(date);
  }

  function delayTime(autoTime){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(localStorage.removeItem("users", JSON.stringify(users)));
      }, 160000 * 1000);
    });
  }

  async function autoLogout(){
    const result = await delayTime(autoTime).then(() => {

      return dispatch(logouts({ mem_userid }));
    });
    console.log('10초 후')
    console.log(result)
  }


  
  function onSubmit() {
    //event.preventDefault();
    //console.log(event.currentTarget.getAttribute("data-value"));
    const st_mem_idx = member.mem_idx;
    const mem_userid = member.mem_userid;
    const st_endDate = hour;

    console.log("!!:" + st_mem_idx);
    console.log("!!:" + st_endDate);
    console.log("!!:" + st_seatNumber);

    alert("좌석을 지정하였습니다.");

    
    
    member.mem_status = 'L';
    localStorage.setItem('users', JSON.stringify(member))
    //by 이방원 / 좌석 선택 후, mem_status, 계정 상태 값이 바뀌지 않는다. db에는 바뀌었지만 localStorage는 바뀌지 않아 직접 수정하였다. / 20211028

    dispatch(seats({ st_mem_idx, st_endDate, st_seatNumber, mem_userid }));
    history.push('/menu')
    autoLogout()
  }



  const [seatForm, handleSeatForm] = useState(false);

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
