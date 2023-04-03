import Link from 'next/link'
import { useEffect, useState } from 'react';
function users({data}) {
    const [users,setUsers] = useState([]);
    const [user,setUser]   = useState();
    const onLoadData = () => {
        fetch('api/users')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
        })
    }
    const addUser = () => {
        console.log('first', user)
        fetch("api/users",{
            method:"POST",
            body:JSON.stringify({user}),
            headers:{"Content-Type" : "application/json"}
        })
        //onLoadData();
    }
    return (
        <div>
           <h2> All Users</h2>
           <div>
                <input type='text' onChange={(e) => setUser(e.target.value)} />
                <button onClick={addUser}>Add User</button>
           </div>
           <br />
            <button onClick={onLoadData}>Load Users</button>
            <br />
            <br />
            {
                users?.map(user => {
                    return(
                       <div key={user.id}>
                            <h2> 
                              {user.id} : {user.name}
                            </h2>
                            <br />
                       </div>
                       
                    )
                })
            }
           
        </div>
    );
}

export async function getServerSideProps(ctx){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props:{
            data:data
        }
    }
}

export default users;