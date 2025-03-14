
import { Clock, TrendingUp, Users } from "lucide-react";
import RevealText from "../ui/RevealText";
import GlassCard from "../ui/GlassCard";

const Benefits = () => {
  const benefits = [
    {
      title: "Save Time",
      description: "Reclaim hours in your day by automating repetitive tasks and workflows.",
      icon: <Clock className="w-6 h-6" />,
      delay: 0
    },
    {
      title: "Increase Revenue",
      description: "Boost sales and revenue through optimized processes and better customer experiences.",
      icon: <TrendingUp className="w-6 h-6" />,
      delay: 100
    },
    {
      title: "Grow Business",
      description: "Scale your operations efficiently with automated workflows that grow with your business.",
      icon: <Users className="w-6 h-6" />,
      delay: 200
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="container-section">
        <RevealText className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block mb-3 py-1 px-3 rounded-full bg-zinc-100 text-xs font-medium text-zinc-800">
            Benefits
          </span>
          <h2 className="mb-4">Why choose AI automation</h2>
          <p className="text-lg text-zinc-600">
            Our solutions deliver tangible benefits that positively impact your business growth and efficiency.
          </p>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <RevealText key={index} delay={benefit.delay}>
              <GlassCard hoverEffect className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 mb-6 rounded-full bg-zinc-100 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                  <p className="text-zinc-600">{benefit.description}</p>
                </div>
              </GlassCard>
            </RevealText>
          ))}
        </div>

        <RevealText>
          <div className="rounded-2xl bg-zinc-900 text-white p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Ready to transform your business?</h3>
                <p className="text-zinc-300 mb-6">
                  Let's discuss how automation can help your specific business needs. Our solutions are tailored to your unique challenges.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  Get Started
                </a>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V8M12 8L8 12M12 8L16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
};

export default Benefits;
