import {
  ShieldCheck,
  Bell,
  CreditCard,
  MapPin,
  MessageSquare,
  Cpu,
} from "lucide-react";

const MobileFeatures = () => {
  const features = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Authentication",
      text: "Secure login, user accounts, roles & permissions, and social authentication.",
    },
    {
      icon: <Bell size={22} />,
      title: "Notifications",
      text: "Push notifications, alerts, reminders and real-time updates.",
    },
    {
      icon: <CreditCard size={22} />,
      title: "Payments",
      text: "Mobile payments, subscriptions, transaction tracking and purchase history.",
    },
    {
      icon: <MapPin size={22} />,
      title: "Location",
      text: "Maps, location services, nearby services and delivery tracking.",
    },
    {
      icon: <MessageSquare size={22} />,
      title: "Communication",
      text: "Messaging, chat, email integration, WhatsApp and Telegram bots.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Device Features",
      text: "Camera, photos, files, contacts, sensors and biometric capabilities.",
    },
  ];

  return (
    <section className="bg-[#EEF4FA] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">

          {/* INTRO */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#1677FF]">
                Built For Real-World Interaction
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Powerful features
              <br />
              for{" "}
              <span className="bg-gradient-to-r from-[#1677FF] to-[#7657E8] bg-clip-text text-transparent">
                real people.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#60728B]">
              From authentication to device features, we build mobile
              applications that work in real-life situations.
            </p>
          </div>


          {/* FEATURES */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/70 bg-white/60 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(11,27,52,0.06)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F8FD] text-[#1677FF]">
                  {feature.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#687B94]">
                  {feature.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;