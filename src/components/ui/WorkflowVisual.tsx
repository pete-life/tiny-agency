
import { useState, useEffect } from "react";
import { 
  ArrowRightIcon, 
  Zap, 
  Mail, 
  Database, 
  FileText, 
  CheckCircle, 
  BellRing 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface WorkflowNodeProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  delay: number;
  position: number;
  activeStep: number;
  stepIndex: number;
}

const WorkflowNode = ({ 
  icon, 
  label, 
  color, 
  delay, 
  position, 
  activeStep,
  stepIndex
}: WorkflowNodeProps) => {
  const [visible, setVisible] = useState(false);
  const isActive = activeStep >= stepIndex;
  const { t } = useLanguage();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "absolute transition-all duration-700 ease-out flex flex-col items-center",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
      style={{ left: `${position * 25}%` }}
    >
      <div 
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
          isActive ? "shadow-md scale-110" : "shadow-sm scale-100 opacity-80"
        )}
        style={{ 
          backgroundColor: isActive ? color : "#f1f1f4",
          transform: isActive ? "translateY(-4px)" : "translateY(0)"
        }}
      >
        <div className={cn(
          "transition-colors duration-300",
          isActive ? "text-white" : "text-zinc-400"
        )}>
          {icon}
        </div>
      </div>
      <span className={cn(
        "text-xs font-medium transition-colors duration-300",
        isActive ? "text-zinc-800" : "text-zinc-500"
      )}>
        {label}
      </span>
    </div>
  );
};

const WorkflowArrow = ({ startPos, visible }: { startPos: number; visible: boolean }) => {
  return (
    <div 
      className={cn(
        "absolute h-0.5 transition-all duration-700 ease-out flex items-center",
        visible ? "w-[22%] opacity-100" : "w-0 opacity-0"
      )}
      style={{ 
        left: `${startPos * 25 + 7}%`, 
        top: '25%',
        background: "linear-gradient(90deg, #d4d4d8 0%, #a1a1aa 100%)",
      }}
    >
      <div className={cn(
        "absolute right-0 transition-all duration-500 animate-pulse",
        visible ? "opacity-100" : "opacity-0"
      )}>
        <ArrowRightIcon 
          className="text-zinc-500"
          style={{
            transform: "translateX(50%)",
            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))"
          }}
          size={18} 
        />
      </div>
    </div>
  );
};

const WorkflowVisual = () => {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prevStep => (prevStep < 4 ? prevStep + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { icon: <Zap size={24} />, label: t('workflow.trigger'), color: "#8B5CF6", position: 0, delay: 300, stepIndex: 0 },
    { icon: <Mail size={24} />, label: t('workflow.email'), color: "#F59E0B", position: 1, delay: 800, stepIndex: 1 },
    { icon: <Database size={24} />, label: t('workflow.database'), color: "#3B82F6", position: 2, delay: 1300, stepIndex: 2 },
    { icon: <FileText size={24} />, label: t('workflow.document'), color: "#10B981", position: 3, delay: 1800, stepIndex: 3 },
    { icon: <CheckCircle size={24} />, label: t('workflow.complete'), color: "#EC4899", position: 4, delay: 2300, stepIndex: 4 }
  ];

  return (
    <div className="relative w-full h-44 my-12">
      {/* Connection line */}
      <div className="absolute left-[7%] right-[7%] top-[25%] h-0.5 bg-zinc-100 transform -translate-y-1/2 rounded-full"></div>
      
      {/* Workflow nodes */}
      {nodes.map((node, index) => (
        <WorkflowNode 
          key={index}
          {...node}
          activeStep={step}
        />
      ))}
      
      {/* Animated arrows */}
      <WorkflowArrow startPos={0} visible={step > 0} />
      <WorkflowArrow startPos={1} visible={step > 1} />
      <WorkflowArrow startPos={2} visible={step > 2} />
      <WorkflowArrow startPos={3} visible={step > 3} />
      
      {/* Animated notification */}
      <div 
        className={cn(
          "absolute right-8 top-8 flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-md rounded-lg px-3 py-2 transition-all duration-700",
          step === 4 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        )}
      >
        <BellRing size={16} className="text-pink-500" />
        <span className="text-xs font-medium text-zinc-800">{t('workflow.notification')}</span>
      </div>
    </div>
  );
};

export default WorkflowVisual;
