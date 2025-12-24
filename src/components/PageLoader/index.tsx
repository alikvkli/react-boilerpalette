
const PageLoader = () => (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
        <div className="relative flex items-center justify-center">
            {/* Outer rotating ring */}
            <div className="w-24 h-24 border-4 border-zinc-100 rounded-full"></div>
            {/* Inner animated ring */}
            <div className="absolute w-24 h-24 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>

            {/* Center Logo */}
            <div className="absolute w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-100">
                B
            </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1.5">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Boilerpalette</h3>
            <div className="flex items-center gap-1">
                <span className="text-sm text-zinc-400 font-medium">Loading...</span>
                <span className="flex gap-1 mt-1">
                    <span className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce"></span>
                </span>
            </div>
        </div>
    </div>
);

export default PageLoader;
