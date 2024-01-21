import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactForm({
  className,
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <CardContent>Contact us</CardContent>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="xyz@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" />
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
}
