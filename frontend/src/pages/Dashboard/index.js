import React, {useEffect} from 'react';
import api from '../../services/api';



export default function Dashboard() {
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id}
            });
            console.log(user_id);
            console.log(response.data);
        }
        loadSpots();
    }, []);
    //the second parameter [] allows you to execute the function n times the value of [] is changed
    return <div/>
}