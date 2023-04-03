import Link from 'next/link'

function Error() {
    return (
        <div>
            <h1>Page not found </h1>
            <Link href="/">Go to home</Link>
        </div>
    );
}

export default Error;