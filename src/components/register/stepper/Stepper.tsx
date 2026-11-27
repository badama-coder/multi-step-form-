import { StepIndicator } from "./StepIndicator";
import { StepLine } from "./StepLine";
import { STEPS } from "@/src/constants/steps";

type StepperProps = {
    step : number;
}

export const Stepper = ({step}: StepperProps) => {
  return (
    <div className="relative mb-5 h-12 w-full">
      <div className="absolute top-4 flex w-full h-0.5 bg-[#34253F]">
        <StepLine filled={step >1}/>
        <StepLine filled={step >2}/>
      </div>
      <div className="w-full flex absolute">
        {STEPS.map(({Icon, label}, index )=> (
          <StepIndicator key={index} Icon={Icon} label={label} number={index+1} step={step}/>
          ))}
      </div>
    </div>
  )
}
