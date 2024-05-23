import Link from "next/link";

export const AppLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-[300px_1fr]" >
            <div>this is the page layout</div>
            <div> <Link href="/post/new" >boton historia</Link> </div>
            <div><Link href="/token-topup" >token topup</Link></div>


            <div>{children}</div>
            <div>---------------</div>
        </div>
    );
};