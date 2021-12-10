import axios from 'axios';

export const zone = async ({st_idx,st_seatNumber,st_seatStatus,}) => 
    await axios.get('http://3.36.66.15:5000/api/zone',{
    st_idx,st_seatNumber,st_seatStatus, 
    });

export const boardWrite = async ({ mem_idx, bd_title, bd_textarea}) => 
    await axios.post('http://3.36.66.15:5000/api/boardWrite', {
    mem_idx, bd_title, bd_textarea 
});

// export const boardWrite = async ({ mem_idx, bd_title, bd_textarea}) => 
//     await axios.post('/api/boardWrite', {
//     mem_idx, bd_title, bd_textarea 
// });

export const boardList = async ({bd_idx, bd_title, mem_userid, bd_regDate, bd_page }) => 
    await axios.get(`http://3.36.66.15:5000/api/boardList/${bd_page}`, {
    bd_idx, bd_title,  mem_userid, bd_regDate, bd_page
})

// export const boardList = async ({bd_idx, bd_title, mem_userid, bd_regDate, bd_page }) => 
//     await axios.get(`/api/boardList/${bd_page}`, {
//     bd_idx, bd_title,  mem_userid, bd_regDate, bd_page
// })

export const boardContents = async ({bd_idx, bd_title, bd_cotents, bd_mem_idx, mem_userid, bd_regDate}) => 
    await axios.get(`http://3.36.66.15:5000/api/boardContents/${bd_idx}`, {
        bd_idx, bd_title, bd_cotents, bd_mem_idx, mem_userid, bd_regDate
    })

export const boardComment = async ({cm_bd_idx, cm_content, cm_mem_idx })=> 
    await axios.post('http://3.36.66.15:5000/api/boardComment' , {
        cm_bd_idx, cm_content, cm_mem_idx 
    })

export const boardComments = async ({bd_idx}) => 
    await axios.get(`http://3.36.66.15:5000/api/boardComments/${bd_idx}` , {
        bd_idx
        
    })
    
export const boardEdit = async ({  bd_title, bd_textarea, mem_idx, bd_idx}) => 
    await axios.patch('http://3.36.66.15:5000/api/boardEdit', {
    bd_title, bd_textarea, mem_idx, bd_idx
})

export const seat = async ({st_mem_idx, st_endDate, st_seatNumber, mem_userid}) => 
    await axios.put('http://3.36.66.15:5000/api/seat',{
    st_mem_idx, st_endDate, st_seatNumber, mem_userid
})
