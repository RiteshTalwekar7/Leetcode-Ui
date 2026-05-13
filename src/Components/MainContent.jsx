// function FavouritePanel() {
//   return (
//     <div className="h-104 w-80 bg-[#262626] rounded-xl ml-12 mt-5 pt-5 pl-5">
//       <div className="h-20 w-20 bg-white flex justify-center items-center rounded">
//         <img src="/favorite-star-svgrepo-com.svg" className="w-10 h-10"></img>
//       </div>
//       <div>
//         <h2 className="pt-3 text-3xl text-white">Favorite</h2>
//       </div>
//       <div className="w-full pt-2 text-white text-xs">
//         <h5>Ritesh . 19 Questions . <span><img className="h-3 w-3" src="/lock-svgrepo-com.svg" /></span>Private</h5>
//       </div>
//     </div>
//   )
// }


import { useState } from "react";

function FavouritePanel({ user = "Ritesh", totalQuestions = 20, isPrivate = true, progress = { easy: { solved: 11, total: 11 }, medium: { solved: 7, total: 7 }, hard: { solved: 1, total: 1 } } }) {
  const totalSolved = progress.easy.solved + progress.medium.solved + progress.hard.solved;
  const totalAll = progress.easy.total + progress.medium.total + progress.hard.total;
  const pct = totalAll > 0 ? totalSolved / totalAll : 0;

  // SVG donut
  const R = 54, CX = 64, CY = 64;
  const circumference = 2 * Math.PI * R;
  const dash = circumference * pct;

  return (
    <div className="w-80 bg-[#262626] rounded-2xl p-5 flex flex-col gap-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="h-20 w-20 bg-white rounded-xl flex items-center justify-center shadow">
          <svg viewBox="0 0 24 24" className="w-10 h-10 fill-amber-400">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Favorite</h2>
          <div className="flex items-center gap-1.5 mt-1 text-[#a0a0a0] text-xs">
            <span>{user}</span>
            <span>·</span>
            <span>{totalQuestions} questions</span>
            <span>·</span>
            {isPrivate && (
              <span className="flex items-center gap-0.5">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#a0a0a0]">
                  <path d="M17 11V7A5 5 0 0 0 7 7v4H5v10h14V11h-2zm-6 6.732V16a1 1 0 0 1 2 0v1.732a1 1 0 1 1-2 0zM15 11H9V7a3 3 0 1 1 6 0v4z" />
                </svg>
                Private
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
              <path d="M8 5v14l11-7z" />
            </svg>
            Practice
          </button>
          <button className="w-9 h-9 rounded-full bg-[#3a3a3a] flex items-center justify-center hover:bg-[#444] transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#a0a0a0]">
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-[#1a1a1a] rounded-xl p-4 flex gap-4 items-center">
        {/* Donut */}
        <div className="relative w-32 h-32 shrink-0">
          <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90">
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="#2e2e2e" strokeWidth="10" />
            <circle
              cx={CX} cy={CY} r={R} fill="none"
              stroke="#22c55e" strokeWidth="10"
              strokeDasharray={`${dash} ${circumference}`}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">
              {totalSolved}<span className="text-[#a0a0a0] text-sm font-normal">/{totalAll}</span>
            </span>
            <span className="text-[#22c55e] text-xs mt-1 flex items-center gap-0.5">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#22c55e]"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              Solved
            </span>
            <span className="text-[#a0a0a0] text-[10px] mt-0.5">0 Attempting</span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="flex flex-col gap-2 w-full">
          {[
            { label: "Easy", color: "text-[#22c55e]", bg: "bg-[#22c55e]/10", ...progress.easy },
            { label: "Med.", color: "text-amber-400", bg: "bg-amber-400/10", ...progress.medium },
            { label: "Hard", color: "text-red-400", bg: "bg-red-400/10", ...progress.hard },
          ].map(({ label, color, bg, solved, total }) => (
            <div key={label} className={`${bg} rounded-lg px-3 py-1.5 flex justify-between items-center`}>
              <span className={`${color} text-xs font-semibold`}>{label}</span>
              <span className="text-white text-xs font-bold">{solved}/{total}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavouritePanel