
import axios from 'axios';

export const register = ({mem_userid, mem_pass, mem_name, mem_hp}) => 
axios.post('/api/register', {mem_userid, mem_pass, mem_name, mem_hp});
console.log("##");

export const login =({mem_userid, mem_pass}) => 
axios.post('/api/login',{
            mem_userid,
            mem_pass,
            
});

export const logout =  ({mem_userid}) => 
axios.post('/api/logout',{
    mem_userid,
})


export const userInfo = ({mem_userid}) =>axios.get(`/api/userInfo/${mem_userid}`)





