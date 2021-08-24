// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { initializeForm} from '../../modules/users'
// import {seats} from "../../modules/seat"
// import SeatForm from '../../components/menu/SeatForm';

// //import { check } from "../../modules/user";


// function SeatDetail({hour}) {

//   const dispatch = useDispatch();
  
//   const {  users, seat, seatError } = useSelector(({ seat, users }) => ({
//     users: users.users,
//     seat: seat.seat,
//     seatError:seat.seatError,
//   }));
  
//   const [num, setNum] = useState(0)
//   const date = new Date();


//   function s1() {
//           setNum(num+1)
//   }

//   function s2() {
//       setNum(num+2)
// }
  
//   const time = date.setHours(date.getHours()+hour)
//     function onSubmit(event){
//       event.preventDefault();     
//       const mem_idx = users.tf.mem_idx
//       console.log("!!:"+ mem_idx);
//       console.log("!!:"+ time);
//       console.log("!!:"+ num);
//       dispatch(seats({mem_idx, time, num}));
//       console.log(seats)
//     };
    
//     useEffect(() => {
//       dispatch(initializeForm("SEAT"));
//     }, [dispatch]);
    
//     useEffect(() => {
//           if (seatError) {
//               if (seatError.response.status === 400) {
//            //    window.location.replace("/login");
//            return;
//               }
//              console.log(`error!`);
//              console.log(seatError);
     
//              return;
//            }
//            if (seat) {
//              console.log("성공");
//              console.log(seat);
           
//              return;
             
//            }
    

//         }, [seat, seatError]);
    
    

//         const [seat1 ,seatSet1] = useState('E')
//         const [seat2 ,seatSet2] = useState('E')
//         const [seat3 ,seatSet3] = useState('E')
//         const [seat4 ,seatSet4] = useState('E')
//         const [seat5 ,seatSet5] = useState('E')
//         const [seat6 ,seatSet6] = useState('E')
//         const [seat7 ,seatSet7] = useState('E')
//         const [seat8 ,seatSet8] = useState('E')
//         const [seat9 ,seatSet9] = useState('E')
//         const [seat10 ,seatSet10] = useState('E')
//         const [seat11 ,seatSet11] = useState('E')
//         const [seat12 ,seatSet12] = useState('E')
//         const [seat13 ,seatSet13] = useState('E')
//         const [seat14 ,seatSet14] = useState('E')
//         const [seat15 ,seatSet15] = useState('E')
//         const [seat16 ,seatSet16] = useState('E')
//         const [seat17 ,seatSet17] = useState('E')
//         const [seat18 ,seatSet18] = useState('E')
//         const [seat19 ,seatSet19] = useState('E')
//         const [seat20 ,seatSet20] = useState('E')
//         const [seat21 ,seatSet21] = useState('E')
//         const [seat22 ,seatSet22] = useState('E')
//         const [seat23 ,seatSet23] = useState('E')
//         const [seat24 ,seatSet24] = useState('E')



    



    

//     // function onClick() {
      
//     //   setHour(hour + 1);
//     //   setCost(cost + 1500);
//     //   // date.setHours(date.getHours()+1)
//     //   // console.log(date);
//     // }

//     // function threeClick() {
//     //   setHour(hour + 3);
//     //   setCost(cost + 3000);
//     //   // date.setHours(date.getHours()+3)
//     //   // console.log(date);
//     // }
    
        
    
        
      
//     //     useEffect(() => {
    
//     //       if (logout == false) {
//     //         console.log("성공");
//     //         console.log(logout);
//     //         // dispatch(checkOk());
            
            
//     //         return;
//     //       }
//     //     }, [logout]);
    
//     //     useEffect(() => {
//     //       if (logoutError) {
//     //          if (logoutError.response.status === 400) {
//     //          window.location.replace("/login");
//     //            return;
//     //          }
//     //         console.log(`error!`);
//     //         console.log(logoutError);
    
//     //         return;
//     //       }
//     //       if (logout) {
//     //         console.log("성공");
//     //         console.log(logout);
          
//     //         return;
            
//     //       }
    
//     //     }, [logout, logoutError]);
      
  
    

    
      
// return (
//     <SeatForm
//         onSubmit={onSubmit}
//         hour={hour}
//         s1={s1}
//         s2={s2}
//         // s={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         // s1={s1}
//         seat1={seat1}
//         seat2={seat2}
   
//     />
//     )
// };

// export default withRouter(SeatDetail);