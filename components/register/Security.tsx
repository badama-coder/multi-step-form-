import {Field, FieldLabel, FieldError, FieldGroup, } from "@/components/ui/field";
import { Input } from "../ui/input";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

export const Security = () => {
  return (
        <form className="">
            <CardHeader>
                <CardTitle className="text-xs font-bold">STEP 2 OF 3</CardTitle>
                <CardTitle className="text-3xl font-bold">Keep it just yours.</CardTitle>
                <CardDescription className="text-xs text-[#FAF5FF]">A strong password for everything that’s ahead.</CardDescription>
            </CardHeader>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" autoComplete="off" placeholder="Create a strong password" />
                    {/* <FieldError>This appears on invoices and emails.</FieldError> */}
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Confirm password</FieldLabel>
                    <Input id="confirm-password" autoComplete="off" placeholder="Create a strong password" />
                    {/* <FieldError>This appears on invoices and emails.</FieldError> */}
                </Field>
            </FieldGroup>
            <div className="w-full">
                <Button> ←   Back</Button>
                <Button> Continue   →</Button>
                <div className="text-[10px] flex justify-center ">Progress is saved when you click Continue.</div>
            </div>
            
        </form>
  )
}
