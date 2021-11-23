import axios from 'axios';

export const seat = async ({st_mem_idx, st_endDate, st_seatNumber, mem_userid}) => 
    await axios.patch('https://study-room-server.herokuapp.com/api/seat',{
    st_mem_idx, st_endDate, st_seatNumber, mem_userid
})

export const zone = async ({st_idx,st_seatNumber,st_seatStatus,}) => 
    await axios.get('https://study-room-server.herokuapp.com/api/zone',{
    st_idx,st_seatNumber,st_seatStatus, 
    });

export const boardWrite = async ({ mem_idx, bd_title, bd_textarea}) => 
    await axios.post('https://study-room-server.herokuapp.com/api/boardWrite', {
    mem_idx, bd_title, bd_textarea 
});

export const boardList = async ({bd_idx, bd_title, mem_userid, bd_regDate }) => 
    await axios.get('https://study-room-server.herokuapp.com/api/boardList', {
    bd_idx, bd_title,  mem_userid, bd_regDate
})

export const boardContents = async ({bd_idx, bd_title, bd_cotents, bd_mem_idx, mem_userid, bd_regDate}) => 
    await axios.get(`https://study-room-server.herokuapp.com/api/boardContents/${bd_idx}`, {
        bd_idx, bd_title, bd_cotents, bd_mem_idx, mem_userid, bd_regDate
    })

export const boardComment = async ({cm_bd_idx, cm_content, cm_mem_idx })=> 
    await axios.post('https://study-room-server.herokuapp.com/api/boardComment' , {
        cm_bd_idx, cm_content, cm_mem_idx 
    })

export const boardComments = async ({bd_idx}) => 
    await axios.get(`https://study-room-server.herokuapp.com/api/boardComments/${bd_idx}` , {
        bd_idx
        
    })
    
export const boardEdit = async ({  bd_title, bd_textarea, mem_idx, bd_idx}) => 
    await axios.patch('https://study-room-server.herokuapp.com/api/boardEdit', {
     bd_title, bd_textarea, mem_idx, bd_idx
})