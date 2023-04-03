
function post({data}){
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}
export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(post => {
        return {
            params: { id: `${post.id}` }
        }
    })
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    return {
        props:{
            data
        }
    }
}

export default post;