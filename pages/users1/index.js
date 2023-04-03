import Link from 'next/link'
import { useEffect, useState } from 'react';
function users({data}) {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
        })
    },[])
    return (
        <div>
           <h2> All Users</h2>
            <hr />
            {
                users?.map(user => {
                    return(
                       <div key={user.id}>
                            <h4> 
                                <Link  href={`users/${user.id}`}>Name : {user.name}</Link>
                            </h4>
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