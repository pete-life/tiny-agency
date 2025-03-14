
import RevealText from "../ui/RevealText";
import GlassCard from "../ui/GlassCard";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container-section">
        <RevealText className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block mb-3 py-1 px-3 rounded-full bg-zinc-100 text-xs font-medium text-zinc-800">
            Contact Us
          </span>
          <h2 className="mb-4">Get started with Tiny Agency</h2>
          <p className="text-lg text-zinc-600">
            Ready to boost your efficiency with AI automation? Let's discuss how we can help your business grow.
          </p>
        </RevealText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevealText>
            <GlassCard>
              <h3 className="text-xl font-medium mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-zinc-200 focus:border-zinc-400 focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-zinc-200 focus:border-zinc-400 focus:outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-zinc-200 focus:border-zinc-400 focus:outline-none transition-all"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-zinc-200 focus:border-zinc-400 focus:outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </GlassCard>
          </RevealText>
          
          <div className="space-y-6">
            <RevealText delay={100}>
              <GlassCard>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-zinc-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-zinc-600 mb-2">For any inquiries or questions</p>
                    <a href="mailto:contact@tinyagency.com" className="text-zinc-900 font-medium text-link">
                      contact@tinyagency.com
                    </a>
                  </div>
                </div>
              </GlassCard>
            </RevealText>
            
            <RevealText delay={200}>
              <GlassCard>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-zinc-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-zinc-600 mb-2">Speak directly with our team</p>
                    <a href="tel:+11234567890" className="text-zinc-900 font-medium text-link">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
              </GlassCard>
            </RevealText>
            
            <RevealText delay={300}>
              <GlassCard>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-zinc-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Schedule a Call</h3>
                    <p className="text-zinc-600 mb-2">Book a consultation to discuss your needs</p>
                    <a href="#" className="text-zinc-900 font-medium text-link">
                      Book a meeting
                    </a>
                  </div>
                </div>
              </GlassCard>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
