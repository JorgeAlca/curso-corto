import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Post() {
    return (
      < div >
      <h1> esta es la pagina de post </h1>
      </div >
      );
  
  
  }
  
  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {},
    };
  });