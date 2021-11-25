import axios from 'axios';

export const register = async ({mem_userid, mem_pass, mem_name, mem_hp}) =>
    await axios.post('/3.36.66.15:5000/api/register', {mem_userid, mem_pass, mem_name, mem_hp});
console.log("##");

export const login = async ({mem_userid, mem_pass}) => 
    await axios.post('/3.36.66.15:5000/api/login',{
            mem_userid,
            mem_pass,
            
});

export const logout = async ({mem_userid}) => 
    await axios.post('/3.36.66.15:5000/api/logout',{
    mem_userid,
})


export const userInfo = async ({mem_userid}) => 
    await axios.get(`/3.36.66.15:5000/api/userInfo/${mem_userid}`)





