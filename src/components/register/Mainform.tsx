"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { PersonalInfo } from "./PersonalInfo";
import { Security } from "./Security";
import { Profile } from "./Profile";
import { Successful } from "./Successful";
import { Stepper } from "./stepper/Stepper";
import { useState } from "react";
import { FormSubmitSection } from "./FormSubmitSection";

export function Mainform() {
  const [step, setStep] = useState(0);


  return (
    <Card className="w-full max-w-sm bg-[#281C36E0] text-white">
      <CardContent>
        <Stepper step={step + 1} />
      </CardContent>
      <FormSubmitSection step={step} />
    </Card>
  );
}
