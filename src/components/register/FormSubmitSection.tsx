import React from 'react'
import { Field } from '../ui/field'
import { Button } from '../ui/button'

type FormSubmitSectionProps = {
    step: number;
}

export const FormSubmitSection = () => {
  return (
    <div>
        <Field>
                <Button> Continue   →</Button>
                <div className="text-[10px] flex justify-center ">Progress is saved when you click Continue.</div>
            </Field>
    </div>
  )
}
