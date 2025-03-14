
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
      style={{ left: `${position}%` }}
    >
      <div 
        className={cn(
          "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 transition-all duration-300",
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
        "text-xs font-medium transition-colors duration-300 whitespace-nowrap",
        isActive ? "text-zinc-800" : "text-zinc-500"
      )}>
        {label}
      </span>
    </div>
  );
};

const WorkflowArrow = ({ startPos, endPos, visible }: { startPos: number; endPos: number; visible: boolean }) => {
  const arrowWidth = endPos - startPos - 10; // Adjust for node width

  return (
    <div 
      className={cn(
        "absolute h-0.5 transition-all duration-700 ease-out flex items-center",
        visible ? "opacity-100" : "w-0 opacity-0"
      )}
      style={{ 
        left: `${startPos + 5}%`, // Adjust start position
        width: `${arrowWidth}%`,
        top: '25%',
        background: "linear-gradient(90deg, #d4d4d8 0%, #a1a1aa 100%)",
      }}
    >
      <div className={cn(
        "absolute right-0 transition-all duration-500",
        visible ? "opacity-100 animate-pulse" : "opacity-0"
      )}>
        <ArrowRightIcon 
          className="text-zinc-500"
          style={{
            transform: "translateX(50%)",
            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))"
          }}
          size={16} 
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

  // Calculate positions based on responsive spacing (5 nodes)
  const nodePositions = [7, 26, 45, 64, 83];

  const nodes = [
    { icon: <Zap size={20} />, label: t('workflow.trigger'), color: "#8B5CF6", position: nodePositions[0], delay: 300, stepIndex: 0 },
    { icon: <Mail size={20} />, label: t('workflow.email'), color: "#F59E0B", position: nodePositions[1], delay: 800, stepIndex: 1 },
    { icon: <Database size={20} />, label: t('workflow.database'), color: "#3B82F6", position: nodePositions[2], delay: 1300, stepIndex: 2 },
    { icon: <FileText size={20} />, label: t('workflow.document'), color: "#10B981", position: nodePositions[3], delay: 1800, stepIndex: 3 },
    { icon: <CheckCircle size={20} />, label: t('workflow.complete'), color: "#EC4899", position: nodePositions[4], delay: 2300, stepIndex: 4 }
  ];

  return (
    <div className="relative w-full min-w-[600px] h-44 my-8 md:my-10">
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
      <WorkflowArrow startPos={nodePositions[0]} endPos={nodePositions[1]} visible={step > 0} />
      <WorkflowArrow startPos={nodePositions[1]} endPos={nodePositions[2]} visible={step > 1} />
      <WorkflowArrow startPos={nodePositions[2]} endPos={nodePositions[3]} visible={step > 2} />
      <WorkflowArrow startPos={nodePositions[3]} endPos={nodePositions[4]} visible={step > 3} />
      
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
