import { LucideIcon } from "lucide-react"

type StepIndicatorProps = {
  label: string;
  Icon: LucideIcon;
}

export const StepIndicator = ({label, Icon} : StepIndicatorProps) => {
  return (
    <div className="flex gap-1.5 text-xs items-center">
      <Icon className="size-3"/>
      <span>{label}</span>
    </div>
  )
}
