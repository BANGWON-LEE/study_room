
import axios from 'axios';

export const register = ({mem_userid, mem_pass, mem_name, mem_hp}) => 
axios.post('/api/register', {mem_userid, mem_pass, mem_name, mem_hp});

export const login =({mem_userid, mem_pass}) => 
axios.get('/api/login', {mem_userid, mem_pass});


