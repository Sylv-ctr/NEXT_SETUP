import Link from "next/link";

export default function Nested() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <div><p>
        Welcome nested route
    </p>
    <p>
    <Link href="/" className="underline">back home</Link>
    </p>
            </div>
    )
}