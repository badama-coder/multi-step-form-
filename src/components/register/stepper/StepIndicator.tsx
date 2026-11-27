import { Check, LucideIcon } from "lucide-react"
import{cn} from "cn";

type StepIndicatorProps = {
  label: string;
  Icon: LucideIcon;
  number: number;
  step: number;
}

export const StepIndicator = ({label, Icon, number, step} : StepIndicatorProps) => {
  return (
    <div className="flex flex-1 flex-col items-center first:items-start last:items-end gap-2">
      <span className={cn("size-8 bg-[#34253F] rounded-full text-white flex justify-center items-center border border-white font-bold text-xs",step > number ? "bg-[#BE94FD] text-[#261432] border-[#007A55]" : number)}> {step > number ? <Check className="size-3"/> : number}
      </span>
      <div className="flex gap-1.5 text-xs items-center">
        <Icon className="size-3"/>
        <span>{label}</span>
      </div>
    </div>
  )
}
