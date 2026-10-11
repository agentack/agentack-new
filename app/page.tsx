import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950 text-white">
      {/* Hero Section */}
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full py-20">
          
          <span className="px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/80 rounded-full border border-cyan-800">
            Global AI Development & Automation Agency (US, UK, PK)
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            AI Automation Agency for Workflow Optimization in E-Commerce Brands
          </h1>

          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mb-10">
            Transforming global businesses with <strong>intelligent e-commerce process automation</strong>, custom AI agents, and 24/7 workflow optimization. Scale your operations effortlessly.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-4 font-bold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all shadow-lg"
            >
              Get Custom AI Agents
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
