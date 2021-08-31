import React, { useState, useEffect, useRef } from 'react';
import qs from 'qs'
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, register } from "../../modules/auth";
import TimeChoiceForm from '../../components/menu/TimeChoiceForm';
import SeatPage from '../../pages/SeatPage'
import SeatForm from '../../components/menu/SeatForm';
import { seats } from '../../modules/seat';
import { listZones } from '../../modules/zones';

//import { check } from "../../modules/user";


function SeatDetail({history, location}) {
  const [seatForm, handleSeatForm] = useState(false);

    const [hour, setHour] = useState(0);
    const [cost, setCost] = useState(0);
    const date = new Date();
    const dispatch = useDispatch();
    
    const {  users, seat, seatError, zones, zonesError,  } = useSelector(({ seat, users, zones,  }) => ({
      users: users.users,
      seat: seat.seat,
      seatError:seat.seatError,
      zones :zones.zones,
      
    }));


    
    useEffect(() => {
      const {st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate} = qs.parse(location.search, {
          ignoreQueryPrefix: true
      });

      dispatch(listZones({st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate}))
    },[dispatch, location.search]);

    function handleSeat() {
        handleSeatForm(true)
    }

    useEffect(() => {
      dispatch(initializeForm("seat"));
      }, [dispatch]);
      
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
         window.location.replace("/login");
         
         return;
         
       }


    }, [seat, seatError]);

    useEffect(() => {
      if (zonesError) {
          if (zonesError.response.status === 400) {
    
       return;
          }
         console.log(`error!`);
         console.log(zonesError);
 
         return;
       }
       if (zones) {
         console.log("성공zz")
         console.log(zones);
       
         return;
         
       }


    }, []);


    



return (
    
    <>
<SeatForm onClose={handleSeat} 
        hour={hour}
        zones={zones}


    
    />
    </>
    )
};

export default withRouter(SeatDetail);