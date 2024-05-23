import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../component/AppLayout";
import { useState } from "react";
import Markdown from 'react-markdown'

export default function NewPost(props) {

  const[postContent,setPostContent]=useState("");

  console.log('NEW POST PROPS: ', props);

  const handleClick = async () => {
    const response = await fetch('/api/generatePost', {
      method: "POST"
    });
    const json = await response.json();
    console.log('RESULT: ', json );
    setPostContent(json.postContent);
  };

  return (
    < div >
      <h1> esta es la nueva pagina de post </h1>
      <button className="btn" onClick={handleClick}>generate btn </button>
      <h1>wa1 </h1>
      <Markdown>{postContent}</Markdown>
      <h1> wa2 </h1>


    </div >
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout{...pageProps}>{page}</AppLayout>
}


export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
