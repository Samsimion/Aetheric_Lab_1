import {
  SiStripe,
  SiPaypal,
  SiFirebase,
  SiGooglemaps,

  // SiMicrosoft,
  // SiSalesforce,
  SiHubspot,
  // SiSlack,
  // SiTwilio,
  // SiSendgrid,
  SiSap,
} from "react-icons/si";
import { Mail , PhoneCall} from "lucide-react";


import {
  FaAws,
  FaMicrosoft,
  FaSalesforce,
  FaSlack,
} from "react-icons/fa6";

const CommonIntegrations = () => {
  const integrations = [
    { icon: <SiStripe />, name: "Stripe" },
    { icon: <SiPaypal />, name: "PayPal" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGooglemaps />, name: "Google Maps" },
    { icon: <FaAws />, name: "AWS" },
    // { 
    //   icon: (
    //     <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M16.318 13.97c-.425.215-1.01.378-1.758.49-.747.112-1.58.168-2.5.168-1.53 0-2.81-.17-3.84-.51-1.03-.34-1.815-.83-2.355-1.47-.54-.64-.81-1.43-.81-2.37 0-.91.29-1.68.87-2.31.58-.63 1.38-1.11 2.4-1.44 1.02-.33 2.22-.5 3.6-.5 1.13 0 2.12.07 2.97.21v1.98c-.7-.18-1.54-.27-2.52-.27-1.15 0-2.07.19-2.76.57-.69.38-1.03.96-1.03 1.74 0 .66.23 1.18.69 1.56.46.38 1.14.57 2.04.57.77 0 1.48-.07 2.13-.22v1.51zm3.84 5.34c-1.39 1.13-3.13 1.83-5.22 2.11-.27.04-.51-.14-.55-.41-.04-.27.14-.51.41-.55 1.93-.26 3.51-.89 4.74-1.89.22-.18.54-.15.72.07.18.22.15.54-.07.72z" />
    //     </svg>
    //   ), 
    //   name: "AWS"
    // },
    { icon: <FaMicrosoft />, name: "Microsoft 365" },
    // { 
    //   icon: (
    //     <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
    //     </svg>
    //   ), 
    //   name: "Microsoft 365" 
    // },
    { icon: <FaSalesforce />, name: "Salesforce" },
    { icon: <SiHubspot />, name: "HubSpot" },
    { icon: <FaSlack />, name: "Slack" }, 
    { icon: <PhoneCall size={22} strokeWidth={1.8} />, name: "Twilio" }, 
    { icon: <Mail size={24} />, name: "SendGrid" },
    { icon: <SiSap />, name: "SAP" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111F] py-20 text-white lg:py-24">

      <div className="pointer-events-none absolute right-[-100px] top-[-200px] h-[450px] w-[450px] rounded-full border border-[#1677FF]/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-[0.65fr_1.35fr]">

          {/* TEXT */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#5EA2FF]">
                Common Integrations
              </span>

            </div>


            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">

              We work with
              <br />

              the tools you{" "}

              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                rely on.
              </span>

            </h2>


            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              From global platforms to industry-specific tools,
              we integrate the services you use and help you get
              the most out of them.
            </p>


            <button className="mt-7 rounded-full bg-[#1677FF] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#0F63D4]">
              See All Integrations
              <span className="ml-2">→</span>
            </button>

          </div>


          {/* LOGOS */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="group flex h-[88px] flex-col items-center justify-center rounded-xl border border-white/10 bg-[#0D1B2E] transition hover:-translate-y-1 hover:border-[#1677FF]/40 hover:bg-[#102137]"
              >

                <div className="text-2xl text-slate-200 transition group-hover:text-white">
                  {integration.icon}
                </div>

                <p className="mt-3 text-[9px] font-medium text-slate-400">
                  {integration.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CommonIntegrations;