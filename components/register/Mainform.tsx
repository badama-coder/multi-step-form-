
import { Card } from "@/components/ui/card";
import { PersonalInfo } from "./PersonalInfo"; 
import { Security } from "./Security";
import { Profile } from "./Profile";
import {Successful} from "./Successful"

export function Mainform() {
  return (
    <Card className="w-full max-w-sm bg-[#281C36E0] text-white">
      <PersonalInfo></PersonalInfo>
      <Security></Security>
      <Profile></Profile>
      <Successful></Successful>
    </Card>
  );
}
