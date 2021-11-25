import axios from 'axios';

export const zone = async ({st_idx,st_seatNumber,st_seatStatus,}) => 
    await axios.get('3.36.66.15:5000/api/zone',{
    st_idx,st_seatNumber,st_seatStatus, 
    });

export const boardWrite = async ({ mem_idx, bd_title, bd_textarea}) => 
    await axios.post('3.36.66.15:5000/api/boardWrite', {
    mem_idx, bd_title, bd_textarea 
});

export const boardList = async ({bd_idx, bd_title, mem_userid, bd_regDate }) => 
    await axios.get('3.36.66.15:5000/api/boardList', {
    bd_idx, bd_title,  mem_userid, bd_regDate
})

export const boardContents = async ({bd_idx, bd_title, bd_cotents, bd_mem_idx, mem_userid, bd_regDate}) => 
    await axios.get(`/3.36.66.15:5000/api/boardContents/${bd_idx}`, {
        bd_idx, bd_title, bd_cotents, bd_mem_idx, mem_userid, bd_regDate
    })

export const boardComment = async ({cm_bd_idx, cm_content, cm_mem_idx })=> 
    await axios.post('/3.36.66.15:5000/api/boardComment' , {
        cm_bd_idx, cm_content, cm_mem_idx 
    })

export const boardComments = async ({bd_idx}) => 
    await axios.get(`/3.36.66.15:5000/api/boardComments/${bd_idx}` , {
        bd_idx
        
    })
    
export const boardEdit = async ({  bd_title, bd_textarea, mem_idx, bd_idx}) => 
    await axios.patch('/3.36.66.15:5000/api/boardEdit', {
    bd_title, bd_textarea, mem_idx, bd_idx
})

export const seat = async ({st_mem_idx, st_endDate, st_seatNumber, mem_userid}) => 
    await axios.put('/3.36.66.15:5000/api/api/seat',{
    st_mem_idx, st_endDate, st_seatNumber, mem_userid
})
