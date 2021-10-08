import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import TimeChoiceForm from '../../components/menu/TimeChoiceForm';
import SeatForm from '../../components/menu/SeatForm';
import { seats } from '../../modules/seat';
import { listZones } from '../../modules/zones';


function TimeChoiceDetail({history, location}) {
  const [seatForm, handleSeatForm] = useState(false);

    const [hour, setHour] = useState(0);
    const [cost, setCost] = useState(0);
    const date = new Date();
    const dispatch = useDispatch();
    
    const {  users, seat, seatError, zones, zonesError  } = useSelector(({ seat, users, zones,  }) => ({
      users: users.users,
      seat: seat.seat,
      seatError:seat.seatError,
      zones :zones.zones,
      
    }));


    
    useEffect(() => {
      const {st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate} = '';
      // 객체 선언


      dispatch(listZones({st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate}))
    },[dispatch]);

      const [st_seatNumber, setSt_seatNumber] = useState();

      function onClickZone(event) {
          const st_seatNumber = event.currentTarget.getAttribute('data-value');
          setSt_seatNumber(st_seatNumber)
      }
  
      function onSubmit(event){
        event.preventDefault();  
        console.log(event.currentTarget.getAttribute('data-value'))
        const st_mem_idx = users.tf.mem_idx;
        const mem_userid = users.tf.mem_userid;
        const st_endDate = hour
       
        console.log("!!:"+ st_mem_idx);
        console.log("!!:"+ st_endDate);
        console.log("!!:" + st_seatNumber);

        alert('좌석을 지정하였습니다.')
        dispatch(seats({st_mem_idx, st_endDate, st_seatNumber,mem_userid }));
        window.location.replace("/login");
        
      };  

    const onClick = useCallback(() => {
      
      setHour(hour+1);
      setCost(cost+1500);
      console.log('1331')
    },[hour,cost])
    // useCallback으로 구현하였는데 계속 리렌더링 되는 거 같음... 다시 확인해보자!! 


    function threeClick() {
      setHour(hour + 3);
      setCost(cost + 3000);
      
      console.log(date);
      
    }

    function handleSeat() {
        handleSeatForm(true)
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


    }, [seat, seatError]);

    useEffect(() => {
      if (zonesError) {
          if (zonesError.response.status === 400) {
            window.location.replace("/login");
            return;
          }
         console.log('error!');
         console.log(zonesError);
 
         return;
       }
       if (zones) {
         console.log("성공")
         console.log(zones);
       
         return;
         
       }


    }, [zones, zonesError]);

return (
    
    <>
      <TimeChoiceForm
        onClick={onClick}
        threeClick={threeClick}
        cost ={cost}
        hour={hour}
        handleSeat={handleSeat}
        seatForm={seatForm}
      />
      <div>
        {seatForm && 
          <SeatForm onClose={handleSeat} 
            hour={hour}
            users={users}
            zones={zones}
            onClickZone={onClickZone}
            onSubmit={onSubmit}
          />
        }
      </div>

    </>
    )
};

export default withRouter(TimeChoiceDetail);