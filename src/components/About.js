import 'tailwindcss/tailwind.css'

function About() {
  return (
    <div className="flex flex-col sm:flex-row w-screen items-center">
      {/* First Column */}
      <div className="sm:h-[236px] flex-1 border text-center w-full sm:w-1/3">
        <div className="flex flex-col items-center justify-center h-full px-6 sm:px-9 bg-blue-600 shadow">
          <div className="w-full max-w-[336px]">
            <span className="text-white text-4xl sm:text-6xl font-bold">
              200 +
              <br />
            </span>
            <span className="text-2xl sm:text-3xl font-bold">
              Registrations
            </span>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="sm:h-[236px] flex-1 border text-center bg-sky-700 flex flex-col items-center justify-center">
        <span className="text-white text-4xl sm:text-6xl font-bold">
          8+
          <br />
        </span>
        <span className="text-2xl sm:text-3xl font-bold">Workshops</span>
      </div>

      {/* Third Column */}
      <div className="sm:h-[236px] text-white text-4xl sm:text-6xl font-bold flex-1 border text-center bg-sky-950 flex flex-col items-center justify-center">
        <br />
        <span className="text-6xl font-bold">learnings++</span>
      </div>
    </div>
  )
}

export default About

// <div className="w-[448px] h-[236px] justify-start items-start inline-flex">
//   <div className="px-[9px] py-[86px] bg-slate-900 rounded-[14px] shadow justify-start items-start flex">
//     <div className="p-5 justify-start items-start flex">
//       <div className="pr-[13px] justify-start items-start flex">
//         <div className="text-white text-5xl font-normal font-['Roboto'] leading-normal">
//           200+ Registrations
//         </div>
//       </div>
//     </div>
//   </div>
// </div>