import {
  ArrowRight,
  BarChart3,
  Cloud,
  Database,
  LockKeyhole,
  MessageCircle,
  Smartphone,
} from "lucide-react";

import { Link } from "react-router";

const IntegrationsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#07111F] text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-[5%] top-[-160px] h-[520px] w-[520px] rounded-full border border-[#1677FF]/10" />

        <div className="absolute right-[13%] top-[-100px] h-[400px] w-[400px] rounded-full border border-[#7657E8]/10" />

        <div className="absolute right-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#1677FF]/5 blur-3xl" />

        <div className="absolute bottom-[-250px] left-[40%] h-[500px] w-[500px] rounded-full bg-[#7657E8]/5 blur-3xl" />

      </div>


      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 sm:px-8 lg:px-12 lg:pb-16 lg:pt-28">

        {/* Breadcrumb */}
        <div className="mb-7 text-xs text-slate-400">

          <Link
            to="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <span className="mx-2 text-slate-600">›</span>

          <Link
            to="/services"
            className="transition hover:text-white"
          >
            Services
          </Link>

          <span className="mx-2 text-slate-600">›</span>

          <span className="text-slate-300">
            APIs & Integrations
          </span>

        </div>


        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5EA2FF]">
                APIs & Integrations
              </span>

            </div>


            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4rem]">

              Connect everything.
              <br />

              Create more{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                possibilities.
              </span>

            </h1>


            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              We design, build and integrate APIs that connect your
              systems, streamline your operations and unlock new
              opportunities.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="group inline-flex items-center rounded-full bg-[#1677FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0F63D4]"
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>


              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#1677FF] hover:bg-white/5"
              >
                Explore Our Work
              </Link>

            </div>


            {/* Proof */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">

              <HeroProof
                icon={<LockKeyhole size={18} />}
                title="Open & Secure"
                text="Built to industry standards"
              />

              <HeroProof
                icon={<Cloud size={18} />}
                title="Seamless Integration"
                text="Connect your existing systems"
              />

              <HeroProof
                icon={<BarChart3 size={18} />}
                title="Scalable Architecture"
                text="Ready for your next stage"
              />

            </div>

          </div>


          {/* RIGHT API NETWORK */}
          <div className="relative mx-auto h-[440px] w-full max-w-[650px]">

            {/* Network atmosphere */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1677FF]/5 blur-3xl" />


            {/* CONNECTION LINES */}
            <NetworkLine className="left-[25%] top-[20%] w-[25%] rotate-[28deg]" />
            <NetworkLine className="right-[24%] top-[20%] w-[25%] rotate-[-28deg]" />

            <NetworkLine className="left-[16%] top-[47%] w-[32%]" />
            <NetworkLine className="right-[16%] top-[47%] w-[32%]" />

            <NetworkLine className="left-[25%] bottom-[20%] w-[25%] rotate-[-28deg]" />
            <NetworkLine className="right-[24%] bottom-[20%] w-[25%] rotate-[28deg]" />


            {/* YOUR APP */}
            <IntegrationNode
              className="left-[2%] top-[12%]"
              icon={<Smartphone size={17} />}
              title="Your App"
              subtitle="Web or Mobile"
            />


            {/* DATABASE */}
            <IntegrationNode
              className="left-1/2 top-[1%] -translate-x-1/2"
              icon={<Database size={17} />}
              title="Database"
              subtitle="PostgreSQL / MySQL"
            />


            {/* THIRD PARTY */}
            <IntegrationNode
              className="right-[1%] top-[12%]"
              icon={<Cloud size={17} />}
              title="Third-Party Services"
              subtitle="Payments, Maps, AI"
            />


            {/* CRM */}
            <IntegrationNode
              className="left-0 top-[39%]"
              icon={<Cloud size={17} />}
              title="CRM"
              subtitle="Salesforce"
            />


            {/* ERP */}
            <IntegrationNode
              className="left-[1%] bottom-[18%]"
              icon={<Database size={17} />}
              title="ERP"
              subtitle="SAP"
            />


            {/* ANALYTICS */}
            <IntegrationNode
              className="right-0 top-[39%]"
              icon={<BarChart3 size={17} />}
              title="Analytics"
              subtitle="Google Analytics"
            />


            {/* COMMUNICATION */}
            <IntegrationNode
              className="right-[1%] bottom-[18%]"
              icon={<MessageCircle size={17} />}
              title="Communication"
              subtitle="SendGrid, Twilio"
            />


            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-[#1677FF] bg-[#0D1B2E] shadow-[0_0_40px_rgba(22,119,255,0.35)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1677FF] to-[#7657E8]">

                <span className="text-xl font-bold">
                  A
                </span>

              </div>

              <p className="mt-3 text-[10px] font-bold tracking-[0.15em]">
                AETHERIC
              </p>

              <p className="mt-1 text-[9px] text-slate-400">
                APIs
              </p>

            </div>


            {/* CODE CARD */}
            <div className="absolute bottom-[1%] left-1/2 z-30 w-[230px] -translate-x-1/2 rounded-xl border border-white/10 bg-[#102137]/95 p-4 shadow-2xl backdrop-blur-xl">

              <div className="font-mono text-[8px] leading-5 text-slate-400">

                <p>
                  <span className="text-[#5EA2FF]">
                    GET
                  </span>{" "}
                  /api/v1/users
                </p>

                <p>
                  {"{"}
                </p>

                <p className="pl-3">
                  <span className="text-[#7657E8]">
                    "data"
                  </span>
                  :{" "}
                  <span className="text-emerald-400">
                    "Connected"
                  </span>
                </p>

                <p>
                  {"}"}
                </p>

              </div>


              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2">

                <span className="text-[7px] text-slate-500">
                  API RESPONSE
                </span>

                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[7px] text-emerald-400">
                  200 OK
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


const HeroProof = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-2 border-r border-white/10 px-3 first:pl-0 last:border-0">

      <div className="mt-0.5 text-[#1677FF]">
        {icon}
      </div>

      <div>

        <p className="text-[10px] font-semibold text-white">
          {title}
        </p>

        <p className="mt-1 text-[8px] leading-4 text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
};


const IntegrationNode = ({
  className,
  icon,
  title,
  subtitle,
}) => {
  return (
    <div
      className={`absolute z-10 w-[125px] rounded-xl border border-white/10 bg-[#102137]/95 p-3 shadow-xl backdrop-blur-xl ${className}`}
    >

      <div className="flex items-center gap-2">

        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1677FF]/10 text-[#5EA2FF]">
          {icon}
        </div>

        <div>

          <p className="text-[9px] font-semibold text-white">
            {title}
          </p>

          <p className="mt-0.5 text-[7px] text-slate-500">
            {subtitle}
          </p>

        </div>

      </div>

    </div>
  );
};


const NetworkLine = ({ className }) => {
  return (
    <div
      className={`absolute z-0 h-px origin-left bg-gradient-to-r from-[#1677FF]/10 via-[#1677FF]/60 to-[#7657E8]/10 ${className}`}
    />
  );
};


export default IntegrationsHero;