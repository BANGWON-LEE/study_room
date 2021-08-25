import axios from 'axios';
import qs from 'qs';

console.log("@@");
export const seat =  ({st_mem_idx, st_endDate, st_seatNumber, mem_userid}) => 
axios.post('/api/seat',{
    st_mem_idx, st_endDate, st_seatNumber, mem_userid
})

export const zone = ({st_idx,st_seatNumber,st_seatStatus, mem_userid}) => axios.get('api/zone',{
    st_idx,st_seatNumber,st_seatStatus, 
    });


