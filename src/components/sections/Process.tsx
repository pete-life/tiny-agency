
import RevealText from "../ui/RevealText";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "We analyze your current workflows and identify processes that can be automated for maximum efficiency.",
      delay: 0
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our team designs a custom automation solution using AI and no-code tools tailored to your specific needs.",
      delay: 100
    },
    {
      number: "03",
      title: "Implementation",
      description: "We implement the automation solution seamlessly, ensuring minimal disruption to your operations.",
      delay: 200
    },
    {
      number: "04",
      title: "Optimization",
      description: "We continuously monitor and optimize the automated processes to ensure maximum efficiency and results.",
      delay: 300
    }
  ];

  return (
    <section id="process" className="relative py-24">
      <div className="container-section">
        <RevealText className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block mb-3 py-1 px-3 rounded-full bg-zinc-100 text-xs font-medium text-zinc-800">
            Our Process
          </span>
          <h2 className="mb-4">How we work</h2>
          <p className="text-lg text-zinc-600">
            Our streamlined approach ensures successful implementation of automation solutions that deliver real results.
          </p>
        </RevealText>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[40px] w-[1px] bg-zinc-200" />
          
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {steps.map((step, index) => (
              <RevealText key={index} delay={step.delay}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 relative">
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-sm border border-zinc-100 z-10 relative">
                      <span className="font-display text-2xl text-zinc-800">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-zinc-600">{step.description}</p>
                  </div>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
