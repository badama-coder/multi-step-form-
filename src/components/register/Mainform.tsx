"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { Stepper } from "./stepper/Stepper";
import { useState } from "react";
import { FormSubmitSection } from "./FormSubmitSection";
import { ShowStep} from "./ShowStep"


export function Mainform() {
  const [step, setStep] = useState<FormStep | 3>(0);
  const submit = () => {
    setStep(3);
  };
  const startOver = () => {
    setStep(0)
  }

  const handleBack = ()=> {
    const previousStep = step === 2 ? 1 : 0;
    setStep(previousStep);
  };
  
  const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>)=> {
    event.preventDefault();
    const nextStep = step === 0 ? 1 : 2;
    setStep(nextStep);
  };
  


  return (
    <Card className="w-full max-w-sm bg-[#281C36E0] text-white ">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Stepper step={step + 1} />
           
          <ShowStep step={step}/>

          <FormSubmitSection step={step} onBack={handleBack} />

        </form>
      </CardContent>
    </Card>
  );
}
