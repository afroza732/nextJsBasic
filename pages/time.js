function time({time}) {
    return (
        <div>
            {time}
        </div>
    );
}

export async function getStaticProps(ctx){
    return {
        props:{
            time:new Date().toISOString()
        },
        revalidate: 60,
    }
}

export default time;