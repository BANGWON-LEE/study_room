import axios from 'axios';
import qs from 'qs';

console.log("@@");
export const seat =  ({st_mem_idx, st_endDate, st_seatNumber}) => 
axios.post('/api/seat',{
    st_mem_idx, st_endDate, st_seatNumber
})

export const zone = ({st_idx,st_seatNumber,st_seatStatus}) => axios.get('api/zone',{
    st_idx,st_seatNumber,st_seatStatus
    });


