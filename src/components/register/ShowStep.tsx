import { PersonalInfo } from "./PersonalInfo";
import { Security } from "./Security";
import { Profile } from "./Profile";
import { Successful } from "./Successful";

type ShowStepProps = {
    step: FormStep | 3;

}

const stepComponents = [PersonalInfo, Security, Profile, Successful];


export const ShowStep = ({step}: ShowStepProps)=>{
if(step===3){
    const Success = stepComponents[step];
    return <Success/>;
}

    const ActiveStep = stepComponents[step];
return (
    <div className="">
        <ActiveStep/>
    </div>
  )
};

