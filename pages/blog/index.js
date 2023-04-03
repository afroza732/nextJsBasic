import Link from 'next/link'

function PostLists({data}){
    return (
        <div>
            {
              data.map(
                (post,idx) => {
                    return (
                        <div key = {post.id}>
                            <h1>
                                <Link  href={`blog/${post.id}`}>{post.title}</Link>
                            </h1>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    )
                }
              )  
            }
        </div>
    )
}

export async function getStaticProps(context){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props:{data}
    }
}

export default PostLists;