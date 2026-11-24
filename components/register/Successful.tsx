import { Check } from "lucide-react";
import { Button } from "../ui/button";

export const Successful = () => {
  return (
    <div>
        <Check></Check>
        <div>You’re all set!</div>
        <div>Your profile has been created.</div>
        <Button>Start over   →</Button>
    </div>
  )
}
