import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from "next/image";

export default function Home() {
  const { user } = useUser();
  console.log('user: ', user);

  return (
    < div >
      <h1> esta es la pagina de inicio</h1>

      <div>
        {!!user ? (
          <>

            <div><Image src={user.picture} alt={user.name} height={50} width={50} />  </div>
            <div>{user.email}</div>
            <Link href="/api/auth/logout">Logout</Link>
          </>

        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>

    </div >
  );


}