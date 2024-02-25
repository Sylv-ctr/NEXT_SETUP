import Link from "next/link";

export default function Test() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <div>
        <p>
            Welcome test
        </p>
        <p>
        <Link href="/test/nested" className="underline">Nested navigation</Link>
        </p>
        <p>
        <Link href="/" className="underline">Back home</Link>
        </p>
        </div>
    )
}