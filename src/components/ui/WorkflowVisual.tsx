
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Zap, 
  Mail, 
  Database, 
  FileText, 
  CheckCircle, 
  BellRing 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowNodeProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  delay: number;
  position: number;
}

const WorkflowNode = ({ icon, label, color, delay, position }: WorkflowNodeProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "absolute transition-all duration-500 ease-out flex flex-col items-center",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        position === 0 ? "left-0" : 
        position === 4 ? "right-0" : 
        `left-[${position * 25}%]`
      )}
      style={{ left: `${position * 25}%` }}
    >
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-md"
        style={{ backgroundColor: color }}
      >
        <div className="text-white">
          {icon}
        </div>
      </div>
      <span className="text-xs font-medium text-zinc-700">{label}</span>
    </div>
  );
};

const WorkflowArrow = ({ startPos, visible }: { startPos: number; visible: boolean }) => {
  return (
    <div 
      className={cn(
        "absolute h-0.5 bg-zinc-300 transition-all duration-300 ease-out",
        visible ? "w-[22%] opacity-100" : "w-0 opacity-0"
      )}
      style={{ 
        left: `${startPos * 25 + 7}%`, 
        top: '25%',
        transform: 'translateY(-50%)'
      }}
    >
      <ArrowRight 
        className={cn(
          "absolute -right-2 text-zinc-300 transition-all duration-300",
          visible ? "opacity-100" : "opacity-0"
        )} 
        size={16} 
      />
    </div>
  );
};

const WorkflowVisual = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prevStep => (prevStep < 4 ? prevStep + 1 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { icon: <Zap size={24} />, label: "Trigger", color: "#8B5CF6", position: 0, delay: 300 },
    { icon: <Mail size={24} />, label: "Email", color: "#F59E0B", position: 1, delay: 800 },
    { icon: <Database size={24} />, label: "Database", color: "#3B82F6", position: 2, delay: 1300 },
    { icon: <FileText size={24} />, label: "Document", color: "#10B981", position: 3, delay: 1800 },
    { icon: <CheckCircle size={24} />, label: "Complete", color: "#EC4899", position: 4, delay: 2300 }
  ];

  return (
    <div className="relative w-full h-44 my-12">
      {/* Connection line */}
      <div className="absolute left-[7%] right-[7%] top-[25%] h-0.5 bg-zinc-200 transform -translate-y-1/2"></div>
      
      {/* Workflow nodes */}
      {nodes.map((node, index) => (
        <WorkflowNode 
          key={index}
          {...node}
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
          "absolute right-8 top-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-md rounded-lg px-3 py-2 transition-all duration-500",
          step === 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <BellRing size={16} className="text-zinc-500" />
        <span className="text-xs font-medium text-zinc-800">Process completed!</span>
      </div>
    </div>
  );
};

export default WorkflowVisual;
