
import { Zap, Database, LineChart, BarChart4 } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import RevealText from "../ui/RevealText";

const Services = () => {
  const services = [
    {
      title: "Sales Automation",
      description: "Automate lead generation, follow-ups, and sales processes to increase conversion rates and revenue.",
      icon: <LineChart className="w-8 h-8 text-zinc-700" />,
      delay: 0
    },
    {
      title: "Marketing Automation",
      description: "Streamline marketing campaigns, customer segmentation, and personalized communication.",
      icon: <BarChart4 className="w-8 h-8 text-zinc-700" />,
      delay: 100
    },
    {
      title: "Data Processing",
      description: "Automate data collection, cleansing, analysis, and reporting for better business insights.",
      icon: <Database className="w-8 h-8 text-zinc-700" />,
      delay: 200
    },
    {
      title: "Operations Automation",
      description: "Optimize internal processes, task management, and team coordination for maximum efficiency.",
      icon: <Zap className="w-8 h-8 text-zinc-700" />,
      delay: 300
    }
  ];

  return (
    <section id="services" className="relative py-24">
      <div className="container-section">
        <RevealText className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block mb-3 py-1 px-3 rounded-full bg-zinc-100 text-xs font-medium text-zinc-800">
            Our Services
          </span>
          <h2 className="mb-4">Powerful AI automation solutions</h2>
          <p className="text-lg text-zinc-600">
            We leverage AI and no-code tools to automate workflows and processes across different business areas.
          </p>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <RevealText key={index} delay={service.delay}>
              <AnimatedCard>
                <div className="w-12 h-12 mb-4 rounded-full bg-zinc-100 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-zinc-600">{service.description}</p>
              </AnimatedCard>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
