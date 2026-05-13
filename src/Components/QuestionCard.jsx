function QuestionCard({ number, title, difficulty = "Easy", solved = false, tags = [] }) {
  const difficultyStyles = {
    Easy: "text-[#22c55e]",
    Medium: "text-amber-400",
    Hard: "text-red-400",
  };

  return (
    <div className="flex items-center justify-between px-4 py-3.5 bg-[#1e1e1e] hover:bg-[#262626] border-b border-[#2e2e2e] transition-colors cursor-pointer group">
      <div className="flex items-center gap-3">
        {/* Status icon */}
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          {solved ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#22c55e]">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          ) : (
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#555]" />
          )}
        </div>

        {/* Title */}
        <span className="text-[#e0e0e0] text-sm font-medium group-hover:text-white transition-colors">
          {number}. {title}
        </span>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex gap-1">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] bg-[#2e2e2e] text-[#a0a0a0] px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Difficulty */}
      <span className={`text-xs font-semibold shrink-0 ${difficultyStyles[difficulty] ?? "text-[#a0a0a0]"}`}>
        {difficulty}
      </span>
    </div>
  );
}

export default QuestionCard