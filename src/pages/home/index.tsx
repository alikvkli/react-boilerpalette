import React from "react"

export default function HomePage() {
  const [count, setCount] = React.useState(0)
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Vite + React</h1>
      <div className="p-8 flex flex-col items-center justify-center gap-4">
        <button className="transition-all border border-zinc-500 p-2 rounded-md hover:bg-zinc-500 hover:border-white hover:text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/home/index.tsx</code> and save to test HMR
        </p>
      </div>
    </main>
  )
}