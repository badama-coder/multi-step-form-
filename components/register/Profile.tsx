import {Field, FieldLabel, FieldError, FieldGroup, } from "@/components/ui/field";
import { Input } from "../ui/input";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

export const Profile = () => {
  return (
        <div>
            <CardHeader>
                <CardTitle className="text-xs font-bold">STEP 3 OF 3</CardTitle>
                <CardTitle className="text-3xl font-bold">Make yourself at home.</CardTitle>
                <CardDescription className="text-xs text-[#FAF5FF]">The finishing touches. A little personality goes a long way.</CardDescription>
            </CardHeader>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="password">Phone number</FieldLabel>
                    <Input id="password" autoComplete="off" placeholder="99112233" />
                    {/* <FieldError>This appears on invoices and emails.</FieldError> */}
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Date of birth</FieldLabel>
                    <Input id="confirm-password" autoComplete="off" placeholder="Choose your birthday" />
                    {/* <FieldError>You must be 13 or older to join.</FieldError> */}
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Profile photo</FieldLabel>
                    <Input id="confirm-password" autoComplete="off" placeholder="Choose your birthday" />
                    {/* <FieldError>You must be 13 or older to join.</FieldError> */}
                </Field>
            </FieldGroup>
            <div className="w-full">
                <Button> ←   Back</Button>
                <Button> Create my profile   →</Button>
                <div className="text-[10px] flex justify-center ">Progress is saved when you click Continue.</div>
            </div>
        </div>
  )
}
