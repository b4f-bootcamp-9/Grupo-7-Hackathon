



// export default function Page(){
//     return (
//         <div>
//             <AnnouncementPage/>
//         </div>
//     )
// }
"use client"
import AnnoucementPage from "@/components/AnnouncementPage";
import BackButton from "@/components/BackButton";

export default function Page() {
  return (
      <div>
    <BackButton />
    <AnnoucementPage />
    </div>
  );
}