
import NewArticle from "@/components/pages/NewArticle";
import Image from "next/image";

export default function page({params}) {
  return (
    <>
      <NewArticle id= {params.id}/>
    </>
  );
}
