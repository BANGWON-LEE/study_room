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

  


      const [st_seatNumber, setSt_seatNumber] = useState();

    //   function onClickZone(event) {
    //       const st_seatNumber = event.currentTarget.getAttribute('data-value');
    //       setSt_seatNumber(st_seatNumber)
    //   }
  
    //   function onSubmit(event){
    //     event.preventDefault();  
    //     console.log(event.currentTarget.getAttribute('data-value'))
    //     const st_mem_idx = users.tf.mem_idx
    //     const mem_userid = users.tf.mem_userid;
      
    //     //const st_endDate = date.setHours(date.getHours()+hour)
    //     const st_endDate = hour
       
    //     console.log("!!:"+ st_mem_idx);
    //     console.log("!!:"+ st_endDate);
    //     console.log("!!:" + st_seatNumber);

    //     alert('좌석을 지정하였습니다.')
    //     dispatch(seats({st_mem_idx, st_endDate, st_seatNumber,mem_userid }));
    //     window.location.replace("/login");
        
      
          
        
    //   };  








    

    function handleSeat() {
        handleSeatForm(true)
    }

    useEffect(() => {
      dispatch(initializeForm("seat"));
      }, [dispatch]);

    // const [seat1 ,seatSet1] = useState('E')
    // const [seat2 ,seatSet2] = useState('E')  

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
          //window.location.replace("/login");
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