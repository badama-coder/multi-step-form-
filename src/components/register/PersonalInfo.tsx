import { CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "../ui/button";
import { Field } from "../ui/field";

export const PersonalInfo = () => {
  return (
    <div>
        <CardHeader>
            <CardTitle className="text-xs font-bold">STEP 1 OF 3</CardTitle>
            <CardTitle className="text-3xl font-bold">Let’s start with you.</CardTitle>
            <CardDescription className="text-xs text-[#FAF5FF]">A few details to make this space your own.</CardDescription>
        </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex gap-5">
              <div className="grid gap-2">
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" type="firstname" placeholder="e.g. Alex" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" type="lastname" placeholder="e.g. Morgan" required />
              </div>
            </div>
            <div className="">
              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div>A little connection starts with the right address.</div>
            
            

          </div>
        </form>
      </CardContent>
    </div>
  )
}
