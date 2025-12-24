import React from "react";
import {
  Zap,
  Code2,
  Palette,
  Box,
  ArrowRight,
  Github
} from "lucide-react";

export default function HomePage() {
  const [count, setCount] = React.useState(0);

  const features = [
    {
      title: "Vite Powered",
      description: "Lightning fast HMR and build performance.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "React 19",
      description: "Latest React features including Actions and specialized Hooks.",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Tailwind CSS v4",
      description: "Utility-first CSS framework for rapid UI development.",
      icon: <Palette className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "Redux Toolkit",
      description: "State management made easy and predictable.",
      icon: <Box className="w-6 h-6 text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-indigo-200 shadow-lg">
              B
            </div>
            <span className="font-semibold text-lg tracking-tight">Boilerpalette</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/alikvkli/react-boilerpalette" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-8 border border-indigo-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v1.0.1 Now Available
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 mb-6 max-w-4xl">
          Modern foundation for your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            React Application
          </span>
        </h1>

        <p className="text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
          A production-ready boilerplate pre-configured with the best tools in the ecosystem.
          Start building your next big idea in seconds, not hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => setCount(c => c + 1)}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Interactive Counter: {count}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-700 border border-zinc-200 rounded-xl font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all cursor-pointer"
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Everything you need</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Carefully curated stack to ensure the best developer experience and application performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mb-6 p-3 bg-zinc-50 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 border border-zinc-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © 2026 React Boilerpalette. MIT License.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-600 text-sm font-medium transition-colors">Documentation</a>
            <a href="https://github.com/alikvkli" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 text-sm font-medium transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}