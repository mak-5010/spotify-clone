import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar />
        {/* Body */}
      </main>

      <div className="">
        {/* player */}
      </div>
    </div>
  );
}

// export const getServerSideProps = (async (context: any) => {

//   console.log('index',context.req.url)
//   // Fetch data from external API
//   // Pass data to the page via props
//   return {
//     redirect: {
//       destination : '/login'
//     },
//     props: {}
//   }
//   return { props: { } }
// })

// export default props="/"