import Link from "next/link";

export default function Home() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <div>
            <p>
                Welcome home
            </p>
            <p>
            <Link href="/" className="underline">Back home</Link>
            </p>
        </div>
    )
}