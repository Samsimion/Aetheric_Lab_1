import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import SolutionsPreview from "../components/home/SolutionsPreview";
import WorkPreview from "../components/home/WorkPreview";
import ProductsPreview from "../components/home/ProductsPreview";
import ProcessPreview from "../components/home/ProcessPreview";
import VisionPreview from "../components/home/VisionPreview";
import HomeCTA from "../components/home/HomeCTA";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0B1B34]">

      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <SolutionsPreview />
        <WorkPreview />
        <ProductsPreview />
        <ProcessPreview />
        <VisionPreview />
        <HomeCTA />
      </main>

      <Footer />

    </div>
  );
};

export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ArrowRight, 
//   Code, 
//   Lightbulb, 
//   Target, 
//   Globe, 
//   Smartphone, 
//   Server, 
//   Layout, 
//   LifeBuoy, 
//   Building2, 
//   GraduationCap, 
//   Network, 
//   Rocket, 
//   CheckCircle2, 
//   ShieldCheck, 
//   Cpu, 
//   Layers 
// } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28 border-b border-slate-800/60 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-transparent pointer-events-none" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
//                 <span>Technology</span>
//                 <span>•</span>
//                 <span>Innovation</span>
//                 <span>•</span>
//                 <span>Impact</span>
//               </div>
              
//               <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
//                 FROM IDEAS TO <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
//                   DIGITAL REALITY.
//                 </span>
//               </h1>
              
//               <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
//                 Aetheric Lab builds digital solutions for businesses while creating innovative technology products that shape tomorrow.
//               </p>
              
//               <div className="flex flex-wrap gap-4 pt-4">
//                 <Link 
//                   to="/contact" 
//                   className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5"
//                 >
//                   <span>Start a Project</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//                 <Link 
//                   to="/products" 
//                   className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium transition-all"
//                 >
//                   <span>Explore Our Products</span>
//                 </Link>
//               </div>
//             </div>

//             <div className="lg:col-span-5">
//               <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
//                 <img 
//                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" 
//                   alt="Aetheric Workspace Code Editor" 
//                   className="w-full h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-85"
//                 />
//                 <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-xs text-slate-400 border-t border-slate-800/80 pt-3">
//                   <span className="font-mono text-indigo-400">~/Aetheric_Lab/core</span>
//                   <span className="flex items-center space-x-1.5">
//                     <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
//                     <span>Systems Active</span>
//                   </span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 2. ABOUT AETHERIC SECTION */}
//       <section className="py-20 border-b border-slate-800/60 bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//             <div>
//               <span className="text-indigo-400 font-semibold text-xs tracking-widest uppercase block mb-2">About Aetheric</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Technology with purpose.</h2>
//             </div>
//             <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-sm sm:text-base leading-relaxed">
//               Aetheric Lab is a technology company focused on creating meaningful digital solutions for businesses and developing innovative products that solve real-world problems.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Card 1 */}
//             <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all group">
//               <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
//                 <Code className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-3">Build</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-6">
//                 We create digital solutions for businesses and organizations, scaling manual processes into robust software.
//               </p>
//               <Link to="/services" className="inline-flex items-center space-x-2 text-indigo-400 text-sm font-medium hover:text-indigo-300">
//                 <span>Learn more</span>
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>

//             {/* Card 2 */}
//             <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-all group">
//               <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
//                 <Lightbulb className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-3">Innovate</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-6">
//                 We develop our own proprietary technology products designed around real social, educational, and smart ecosystems.
//               </p>
//               <Link to="/products" className="inline-flex items-center space-x-2 text-purple-400 text-sm font-medium hover:text-purple-300">
//                 <span>Explore products</span>
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>

//             {/* Card 3 */}
//             <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all group">
//               <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
//                 <Target className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-3">Impact</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-6">
//                 We use advanced digital technology to solve meaningful problems locally in Africa and globally.
//               </p>
//               <Link to="/about" className="inline-flex items-center space-x-2 text-cyan-400 text-sm font-medium hover:text-cyan-300">
//                 <span>Our vision</span>
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. OUR SERVICES SECTION */}
//       <section className="py-20 border-b border-slate-800/60 bg-slate-900/40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//             <div>
//               <span className="text-indigo-400 font-semibold text-xs tracking-widest uppercase block mb-2">Our Services</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Your idea. Our technology.</h2>
//             </div>
//             <Link to="/services" className="inline-flex items-center space-x-2 text-indigo-400 font-medium hover:text-indigo-300 mt-4 md:mt-0 text-sm">
//               <span>Explore all services</span>
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { title: "Websites", desc: "Professional websites that represent your brand effectively.", icon: <Globe className="w-5 h-5 text-indigo-400" /> },
//               { title: "Web Applications", desc: "Custom systems designed precisely around your business workflow.", icon: <Server className="w-5 h-5 text-indigo-400" /> },
//               { title: "Mobile Applications", desc: "Mobile experiences built for your customers and internal teams.", icon: <Smartphone className="w-5 h-5 text-indigo-400" /> },
//               { title: "Business Systems", desc: "CRM, inventory, management, and specialized custom workflow software.", icon: <Layout className="w-5 h-5 text-indigo-400" /> },
//               { title: "UI/UX Design", desc: "Interfaces crafted entirely around human behavior and accessibility.", icon: <Cpu className="w-5 h-5 text-indigo-400" /> },
//               { title: "Digital Support", desc: "Ongoing maintenance, high-speed hosting, optimizations, and security updates.", icon: <LifeBuoy className="w-5 h-5 text-indigo-400" /> },
//             ].map((s, idx) => (
//               <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
//                 <div>
//                   <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
//                     {s.icon}
//                   </div>
//                   <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
//                   <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
//                 </div>
//                 <Link to="/services" className="inline-flex items-center space-x-1 text-xs text-indigo-400 font-medium hover:underline">
//                   <span>Learn more</span>
//                   <ArrowRight className="w-3 h-3" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. SOLUTIONS SECTION (NO PEOPLE PHOTOS - TECH/ABSTRACT CONCEPTS ONLY) */}
//       <section className="py-20 border-b border-slate-800/60 bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//             <div>
//               <span className="text-indigo-400 font-semibold text-xs tracking-widest uppercase block mb-2">Solutions</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Technology that fits the way you work.</h2>
//             </div>
//             <Link to="/services" className="inline-flex items-center space-x-2 text-indigo-400 font-medium hover:text-indigo-300 mt-4 md:mt-0 text-sm">
//               <span>Explore Solutions</span>
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { 
//                 title: "Businesses", 
//                 desc: "Digital tools that help businesses operate, sell, and grow faster.", 
//                 img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
//                 icon: <Building2 className="w-4 h-4 text-indigo-400" />
//               },
//               { 
//                 title: "Education", 
//                 desc: "Technology that improves learning, administration, and school management.", 
//                 img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
//                 icon: <GraduationCap className="w-4 h-4 text-indigo-400" />
//               },
//               { 
//                 title: "Organizations", 
//                 desc: "Digital platforms that connect people, services, and secure information.", 
//                 img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
//                 icon: <Network className="w-4 h-4 text-indigo-400" />
//               },
//               { 
//                 title: "Startups", 
//                 desc: "Turn an idea into a scalable, high-performance digital product.", 
//                 img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
//                 icon: <Rocket className="w-4 h-4 text-indigo-400" />
//               },
//             ].map((sol, idx) => (
//               <div key={idx} className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col group">
//                 <div className="h-40 overflow-hidden relative">
//                   <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors z-10" />
//                   <img 
//                     src={sol.img} 
//                     alt={sol.title} 
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//                   />
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 justify-between">
//                   <div>
//                     <div className="flex items-center space-x-2 mb-2">
//                       {sol.icon}
//                       <h3 className="text-lg font-semibold text-white">{sol.title}</h3>
//                     </div>
//                     <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{sol.desc}</p>
//                   </div>
//                   <Link to="/services" className="inline-flex items-center space-x-1 text-xs text-indigo-400 font-medium hover:text-indigo-300">
//                     <span>Learn more</span>
//                     <ArrowRight className="w-3 h-3" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. OUR WORK SECTION */}
//       <section className="py-20 border-b border-slate-800/60 bg-slate-900/40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//             <div>
//               <span className="text-indigo-400 font-semibold text-xs tracking-widest uppercase block mb-2">Our Work</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ideas we've turned into reality.</h2>
//             </div>
//             <Link to="/portfolio" className="inline-flex items-center space-x-2 text-indigo-400 font-medium hover:text-indigo-300 mt-4 md:mt-0 text-sm">
//               <span>View all projects</span>
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: "Business Website", tag: "Client Project", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
//               { title: "School Management System", tag: "Aetheric Platform", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
//               { title: "E-Commerce Platform", tag: "Digital Solution", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
//               { title: "Portfolio Website", tag: "Brand Experience", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" },
//             ].map((work, idx) => (
//               <div key={idx} className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 group">
//                 <div className="h-48 overflow-hidden relative">
//                   <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm text-indigo-300 text-[10px] font-medium border border-slate-800">
//                     {work.tag}
//                   </span>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-base font-semibold text-white mb-2">{work.title}</h3>
//                   <Link to="/portfolio" className="inline-flex items-center space-x-1 text-xs text-indigo-400 font-medium hover:text-indigo-300">
//                     <span>View Case Study</span>
//                     <ArrowRight className="w-3 h-3" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. OUR PRODUCTS SECTION */}
//       <section className="py-20 border-b border-slate-800/60 bg-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//             <div>
//               <span className="text-purple-400 font-semibold text-xs tracking-widest uppercase block mb-2">Our Products</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">We're not just building for today.</h2>
//             </div>
//             <Link to="/products" className="inline-flex items-center space-x-2 text-purple-400 font-medium hover:text-purple-300 mt-4 md:mt-0 text-sm">
//               <span>Explore Our Products</span>
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { name: "Shuleni", desc: "Rethinking how schools understand, develop, and connect with students.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" },
//               { name: "Spectrum Care Connect", desc: "Connecting awareness, support and healthcare communities securely.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" },
//               { name: "Home Smart System", desc: "Bringing intelligent technology into the spaces we call home.", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80" },
//             ].map((prod, idx) => (
//               <div key={idx} className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col group">
//                 <div className="h-48 overflow-hidden relative">
//                   <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">{prod.name}</h3>
//                     <p className="text-slate-400 text-sm leading-relaxed mb-6">{prod.desc}</p>
//                   </div>
//                   <Link to="/products" className="inline-flex items-center space-x-1 text-xs text-purple-400 font-medium hover:text-purple-300">
//                     <span>Learn more</span>
//                     <ArrowRight className="w-3 h-3" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 7. HOW WE WORK SECTION */}
//       <section className="py-20 border-b border-slate-800/60 bg-slate-900/40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-indigo-400 font-semibold text-xs tracking-widest uppercase block mb-2">How We Work</span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">From idea to reality.</h2>
//             <p className="text-slate-400 mt-3 text-sm sm:text-base">A clear and collaborative process to ensure your project is delivered with quality and care.</p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
//             {[
//               { num: "01", title: "Discover", desc: "Understand your needs" },
//               { num: "02", title: "Plan", desc: "Strategy & roadmap" },
//               { num: "03", title: "Design", desc: "Create the experience" },
//               { num: "04", title: "Build", desc: "Turn ideas into code" },
//               { num: "05", title: "Test", desc: "Ensure quality & speed" },
//               { num: "06", title: "Deploy", desc: "Launch to production" },
//               { num: "07", title: "Grow", desc: "Ongoing support" },
//             ].map((step, idx) => (
//               <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center">
//                 <span className="text-xs font-mono font-bold text-indigo-400 px-2.5 py-1 rounded bg-indigo-500/10 mb-3">{step.num}</span>
//                 <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
//                 <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 8. FOOTER / VISION BANNER */}
//       <footer className="bg-slate-950 pt-16 pb-12 text-slate-400 text-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 pb-12 mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
//             <div className="md:col-span-8 space-y-3">
//               <h3 className="text-2xl font-bold text-white">Technology should do more than exist.</h3>
//               <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
//                 We envision a future where technology doesn't simply automate tasks, but expands human potential, connects communities and creates opportunities.
//               </p>
//             </div>
//             <div className="md:col-span-4 flex md:justify-end">
//               <Link 
//                 to="/contact" 
//                 className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/25 transition-all text-center inline-block"
//               >
//                 Let's Build It
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0">
//           <div className="flex items-center space-x-2">
//             <Layers className="w-5 h-5 text-indigo-500" />
//             <span className="font-semibold text-white">Aetheric Lab</span>
//             <span className="text-slate-600">|</span>
//             <span>Technology • Innovation • Impact</span>
//           </div>
//           <div className="flex space-x-6">
//             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
//             <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
//           </div>
//           <div className="text-slate-500">
//             © {new Date().getFullYear()} Aetheric Lab. All rights reserved.
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }