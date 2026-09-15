import {
  UserRoundCheck,
  Database,
  Workflow,
  Mail,
  CreditCard,
  PlugZap,
} from "lucide-react";

const ApplicationCapabilities = () => {
  const capabilities = [
    {
      icon: UserRoundCheck,
      title: "Authentication",
      items: [
        "User accounts",
        "Role-based access",
        "Permissions",
      ],
    },
    {
      icon: Database,
      title: "Data Management",
      items: [
        "Databases",
        "Search & filtering",
        "Reports & analytics",
      ],
    },
    {
      icon: Workflow,
      title: "Automation",
      items: [
        "Workflows",
        "Scheduled tasks",
        "Notifications",
      ],
    },
    {
      icon: Mail,
      title: "Communication",
      items: [
        "Email",
        "SMS",
        "WhatsApp integration",
        "Telegram bots",
      ],
    },
    {
      icon: CreditCard,
      title: "Payments",
      items: [
        "Online payments",
        "Subscriptions",
        "Transaction tracking",
      ],
    },
    {
      icon: PlugZap,
      title: "Integrations",
      items: [
        "APIs",
        "Third-party services",
        "External platforms",
      ],
    },
  ];

  return (
    <section className="bg-[#EEF6FF]">

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

          {/* Intro */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#1677FF]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1677FF]">
                What Your Application Can Handle
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#0B1B34] sm:text-5xl">
              Everything you need.
              <br />
              In one{" "}
              <span className="text-[#1677FF]">
                system.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#637691]">
              Powerful functionality doesn't have to mean
              complicated experiences.
            </p>

          </div>

          {/* Capabilities */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="rounded-xl border border-[#DCE8F5] bg-white p-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF5FF] text-[#1677FF]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-[#0B1B34]">
                    {capability.title}
                  </h3>

                  <div className="mt-3 space-y-1.5">
                    {capability.items.map((item) => (
                      <p
                        key={item}
                        className="text-[10px] text-[#637691]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ApplicationCapabilities;