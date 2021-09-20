import Link from 'next/link'

export default function AccountList() {
    return (
        <>
            <h1>Accounts</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}