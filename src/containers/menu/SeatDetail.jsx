import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import SeatForm from '../../components/menu/SeatForm';
import { listZones } from '../../modules/zones';



function SeatDetail({ location}) {
  const [seatForm, handleSeatForm] = useState(false);

    const [hour, setHour] = useState(0);
    const dispatch = useDispatch();
    
    const {  seat, seatError, zones, zonesError,  } = useSelector(({ seat, zones  }) => ({
      
      seat: seat.seat,
      seatError:seat.seatError,
      zones :zones.zones,
      
    }));


    
    useEffect(() => {
      const {st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate} ='';

      dispatch(listZones({st_mem_idx, st_seatNumber,st_seatStatus,st_regDate, st_endDate}))
    },[dispatch]);

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


    }, [zones, zonesError]);

return (
    
    <>
      <SeatForm 
        onClose={handleSeat} 
        hour={hour}
        zones={zones}
      />
    </>
    )
};

export default withRouter(SeatDetail);