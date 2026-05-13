function FilterPanel({ onFilterChange }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({ todo: false, solved: false, attempted: false });
  const [difficulty, setDifficulty] = useState({ easy: true, medium: false, hard: false });
  const [showTags, setShowTags] = useState(false);

  const toggleStatus = (key) => {
    const next = { ...status, [key]: !status[key] };
    setStatus(next);
    onFilterChange?.({ status: next, difficulty, showTags });
  };
  const toggleDifficulty = (key) => {
    const next = { ...difficulty, [key]: !difficulty[key] };
    setDifficulty(next);
    onFilterChange?.({ status, difficulty: next, showTags });
  };
  const reset = () => {
    setStatus({ todo: false, solved: false, attempted: false });
    setDifficulty({ easy: false, medium: false, hard: false });
    setShowTags(false);
    onFilterChange?.({ status: { todo: false, solved: false, attempted: false }, difficulty: { easy: false, medium: false, hard: false }, showTags: false });
  };

  const activeChips = [
    ...Object.entries(difficulty).filter(([, v]) => v).map(([k]) => k),
  ];

  return (
    <div className="relative inline-block">
      {/* Trigger row */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-2 bg-[#3a3a3a] text-white text-sm px-3 py-1.5 rounded-full hover:bg-[#444] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z" />
          </svg>
          Filter
        </button>

        {activeChips.map((chip) => (
          <span
            key={chip}
            className="flex items-center gap-1 bg-[#3a3a3a] text-white text-xs px-3 py-1.5 rounded-full capitalize"
          >
            {chip}
            <button
              onClick={() => toggleDifficulty(chip)}
              className="ml-0.5 text-[#a0a0a0] hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </span>
        ))}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-10 left-0 z-50 w-72 bg-[#2a2a2a] border border-[#3a3a3a] rounded-2xl p-5 shadow-2xl">
          {/* Status */}
          <p className="text-white text-sm font-semibold mb-3">Status</p>
          <div className="flex gap-4 mb-5">
            {[
              { key: "todo", label: "Todo" },
              { key: "solved", label: "Solved" },
              { key: "attempted", label: "Attempted" },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-1.5 cursor-pointer">
                <div
                  onClick={() => toggleStatus(key)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${status[key] ? "bg-[#22c55e] border-[#22c55e]" : "border-[#555] bg-transparent"}`}
                >
                  {status[key] && (
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </div>
                <span className="text-[#a0a0a0] text-sm">{label}</span>
              </label>
            ))}
          </div>

          {/* Difficulty */}
          <p className="text-white text-sm font-semibold mb-3">Difficulty</p>
          <div className="flex gap-4 mb-5">
            {[
              { key: "easy", label: "Easy", color: "text-[#22c55e]", active: "bg-[#22c55e] border-[#22c55e]" },
              { key: "medium", label: "Medium", color: "text-amber-400", active: "bg-amber-400 border-amber-400" },
              { key: "hard", label: "Hard", color: "text-red-400", active: "bg-red-400 border-red-400" },
            ].map(({ key, label, color, active }) => (
              <label key={key} className="flex items-center gap-1.5 cursor-pointer">
                <div
                  onClick={() => toggleDifficulty(key)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${difficulty[key] ? active : "border-[#555] bg-transparent"}`}
                >
                  {difficulty[key] && (
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </div>
                <span className={`${color} text-sm font-medium`}>{label}</span>
              </label>
            ))}
          </div>

          {/* Show tags */}
          <label className="flex items-center gap-2 mb-5 cursor-pointer">
            <div
              onClick={() => setShowTags((p) => !p)}
              className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${showTags ? "bg-[#22c55e] border-[#22c55e]" : "border-[#555] bg-transparent"}`}
            >
              {showTags && (
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <span className="text-[#a0a0a0] text-sm">Show tags</span>
          </label>

          {/* Reset */}
          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 text-[#a0a0a0] text-sm py-2 rounded-xl bg-[#333] hover:bg-[#3a3a3a] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
            </svg>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterPanel