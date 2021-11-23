import axios from 'axios';

export const register = async ({mem_userid, mem_pass, mem_name, mem_hp}) =>
    await axios.post('https://study-room-server.herokuapp.com/api/register', {mem_userid, mem_pass, mem_name, mem_hp});
console.log("##");

export const login = async ({mem_userid, mem_pass}) => 
    await axios.post('https://study-room-server.herokuapp.com/api/login',{
            mem_userid,
            mem_pass,
            
});

export const logout = async ({mem_userid}) => 
    await axios.post('https://study-room-server.herokuapp.com/api/logout',{
    mem_userid,
})


export const userInfo = async ({mem_userid}) => 
    await axios.get(`https://study-room-server.herokuapp.com/api/userInfo/${mem_userid}`)





