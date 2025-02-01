// import React from "react";
// import { Play } from "lucide-react";


// const BannerNew = () => {
//   return (
//     <div className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
//       {/* Decorative elements */}
//       <div className="absolute left-4 top-4 h-4 w-4 rounded-full bg-[#FFA500] opacity-50" />
//       <div className="absolute right-1/4 top-12 text-emerald-400">
//         <div className="h-4 w-4">*</div>
//       </div>

//       <div className="mx-auto max-w-7xl">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
//           {/* Left column */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
//               Limitless learning at{" "}
//               <span className="relative">
//                 your{" "}
//                 <span className="relative inline-block">
//                   fingertips
//                   <div className="absolute -bottom-2 left-0 h-3 w-full bg-[#FFD700] opacity-50" />
//                 </span>
//               </span>
//             </h1>

//             <p className="mt-6 text-lg text-gray-600">
//               Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you
//               acquire new skills.
//             </p>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <div className="flex items-center gap-2">
//                 <div className="rounded-full bg-gray-100 p-2">
//                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M12 4L14.5 9.5L20 10.5L16 14L17 19.5L12 16.5L7 19.5L8 14L4 10.5L9.5 9.5L12 4Z"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <span className="text-sm text-gray-600">Learn with experts</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <div className="rounded-full bg-gray-100 p-2">
//                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <span className="text-sm text-gray-600">Get certificate</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <div className="rounded-full bg-gray-100 p-2">
//                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20Z"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     />
//                     <path d="M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                     <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                     <path d="M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                   </svg>
//                 </div>
//                 <span className="text-sm text-gray-600">Get membership</span>
//               </div>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="rounded-full bg-pink-50 px-6 py-3 text-sm font-semibold text-pink-600 hover:bg-pink-100">
//                 Get Started
//               </button>
//               <button className="flex items-center gap-2 rounded-full bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-100">
//                 <Play className="h-4 w-4" />
//                 Watch video
//               </button>
//             </div>
//           </div>

//           {/* Right column */}
//           <div className="relative lg:mt-0">
//             <div className="relative h-[500px] w-full rounded-lg bg-[#1a365d]">
//               <img
//                 src="https://themes.stackbros.in/eduport_r/assets/07-CK3ZrEuH.png"
//                 alt="Student with books"
//                 className="object-cover h-full w-full rounded-lg"
//               />

//               {/* Floating elements */}
//               <div className="absolute -right-4 top-4">
//                 <img
//                   src="https://cdn3d.iconscout.com/3d/premium/thumb/correct-document-3d-icon-download-in-png-blend-fbx-gltf-file-formats--right-approve-pack-files-folders-icons-5360809.png?f=webp"
//                   alt="Angular logo"
//                   width={40}
//                   height={40}
//                   className="rounded-2xl bg-white p-1 shadow-lg"
//                 />
//               </div>

//               <div className="absolute left-0 top-1/3">
//                 <img
//                   src="https://cdn3d.iconscout.com/3d/premium/thumb/save-document-3d-icon-download-in-png-blend-fbx-gltf-file-formats--folder-pack-files-folders-icons-5279503.png"
//                   alt="React logo"
//                   width={40}
//                   height={40}
//                   className="rounded-lg bg-white p-2 shadow-lg"
//                 />
//               </div>

//               <div className="absolute -right-8 bottom-1/3">
//                 <img
//                   src="https://static.vecteezy.com/system/resources/thumbnails/034/759/248/small/file-or-document-3d-icon-illustration-png.png"
//                   alt="Figma logo"
//                   width={40}
//                   height={40}
//                   className="rounded-lg bg-white p-2 shadow-lg"
//                 />
//               </div>

//               {/* Student card */}
//               <div className="absolute -right-4 top-1/4 rounded-xl bg-emerald-500 p-3 text-white shadow-lg">
//                 <p className="text-sm">Our daily new students</p>
//                 <div className="mt-2 flex -space-x-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div key={i} className="h-8 w-8 rounded-full bg-white/20 flex justify-center items-center" > K</div>
//                   ))}
//                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs">1k+</div>
//                 </div>
//               </div>

//               {/* Congratulations card */}
//               <div className="absolute -bottom-4 left-1/4 rounded-full bg-yellow-400 p-4 text-white shadow-lg">
//                 <div className="flex items-center gap-2">
//                   <div className="rounded-full bg-white p-2">
//                     <svg className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="none">
//                       <path
//                         d="M12 15V17M12 7V13M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold">Congratulations</p>
//                     <p className="text-xs opacity-75">Your admission completed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerNew;



import { Play } from "lucide-react"
import highBack from './images/background-high.png'
import Oval from './images/background.png'
import BackAnimation from './images/back.png'
import Star from './images/star.png'
import SmallStar from './images/smallstar.png'
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { MarqueeDemoVertical } from "./slider"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function Banner() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 md:px-12 lg:px-10 relative overflow-hidden mt-6">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-orange-100/50" />
      <div className="absolute top-24 right-1/4 w-8 h-8">
        <div className="w-full h-full text-emerald-400">✦</div>
      </div>
      <div className="absolute bottom-12 right-12">
        <div className="w-32 h-32 border-2 border-dashed border-orange-200 rounded-full opacity-20" />
      </div>

      <img src={BackAnimation} alt=""   className="absolute left-1 top-72 h-[250px] w-[90px]"/>
     

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Right Content */}
        <div className="relative lg:w-[40%] w-full h-[600px]  flex justify-center">

      
        <MarqueeDemoVertical className=""/>
        </div>
        
        
        {/* Left Content */}
        <div className="w-full lg:w-2/3 space-y-16">
          
          
          <div className="text-3xl text-blue-700 md:text-5xl lg:text-5xl font-bold leading-tight space-y-4 text-center flex flex-col justify-center items-center">
  <span className="">
  Our Vision & Mission   
  </span>
  
  
</div>





          <p className="text-gray-600 text-lg">
          "Building powerful, scalable, and user-friendly web solutions that drive business growth and enhance digital experiences."
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
    {[
      "Modern & Responsive Designs",
      "Fast & Secure Web Solutions",
      "SEO & Performance Optimization",
      "User-Centered Development",
      "Innovative & Scalable Technologies",
      "Customer-First Approach",
    ].map((item, index) => (
      <div key={index} className="flex items-center gap-2 bg-white shadow-md px-4 py-3 rounded-lg">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-blue-600 font-bold">
          ✓
        </div>
        <span className="text-gray-700 font-medium">{item}</span>
      </div>
    ))}
  </div>

  {/* Decorative Star Element */}
  <div className="absolute top-32 left-[600px] w-6 h-6 rounded-md flex items-center justify-center z-20">
    <img src={SmallStar} alt="Star" />
  </div>
          </div>

          
        </div>

        
        
      </div>
    
  )
}


