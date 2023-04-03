import { useEffect, useState } from "react";
import {useRouter} from 'next/router';
function user({data}) {
    const [user,setUser] = useState(null);
    const {id} = useRouter().query;
    useEffect((user) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    },user)
    return (
        <div>
             <h4>Name : {data.name}</h4>
        </div>
    );
}

export default user;