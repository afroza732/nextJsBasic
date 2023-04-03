
function user({data}) {
    return (
        <div>
             <h4>Name : {data.name}</h4>
        </div>
    );
}

export async function getServerSideProps(ctx){
    const {params} = ctx;
    const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    return {
        props:{
            data
        }
    }
}

export default user;