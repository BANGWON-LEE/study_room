import axios from 'axios';

export const seat =  ({st_mem_idx, st_endDate, st_seatNumber, mem_userid}) => 
    axios.post('/api/seat',{
    st_mem_idx, st_endDate, st_seatNumber, mem_userid
})

export const zone = ({st_idx,st_seatNumber,st_seatStatus,}) => 
    axios.get('/api/zone',{
    st_idx,st_seatNumber,st_seatStatus, 
    });

export const boardWrite = ({ mem_idx, bd_title, bd_textarea}) => 
    axios.post('/api/boardWrite', {
    mem_idx, bd_title, bd_textarea 
});

export const boardList =({bd_idx, bd_title, mem_userid, bd_regDate, bd_recomand }) => 
    axios.get('/api/boardList', {
    bd_idx, bd_title,  mem_userid, bd_regDate, bd_recomand
})

export const boardContents = ({bd_idx, bd_title, bd_cotents, mem_userid, bd_regDate}) => 
    axios.get(`/api/boardContents/${bd_idx}`, {
        bd_idx, bd_title, bd_cotents, mem_userid, bd_regDate
    })