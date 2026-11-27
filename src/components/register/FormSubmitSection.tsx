
import { Field } from '../ui/field'
import { Button } from '../ui/button'

type FormSubmitSectionProps = {
  step: FormStep | 3 ;
  onBack: ()=> void;
}

export const FormSubmitSection = ({step, onBack}: FormSubmitSectionProps) => {
  return (
    <div>
      {step > 0 && <Button onClick={onBack} type='button'>Back</Button>}
      <Button type='submit'> Continue   →</Button>
      <div className="text-[10px] flex justify-center ">Progress is saved when you click Continue.</div>
        
    </div>
  )
}
