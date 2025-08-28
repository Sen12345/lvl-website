import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useInvoice } from "@/context/invoice-context";

const ContactDetails = () => {
  const { invoice, updateInvoice } = useInvoice();
  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">From (Your Details)</h3>
          <div>
            <Label htmlFor="fromName" className="py-2">
              Name
            </Label>
            <Input
              id="fromName"
              value={invoice.fromName}
              onChange={(e) => updateInvoice({ fromName: e.target.value })}
              placeholder="Your name or Company"
            />
          </div>
          <div>
            <Label htmlFor="fromEmail" className="py-2">
              Email
            </Label>
            <Input
              id="fromEmail"
              value={invoice.fromEmail}
              onChange={(e) => updateInvoice({ fromEmail: e.target.value })}
              placeholder="your@email.com"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">To (Client Details)</h3>
          <div>
            <Label htmlFor="toName" className="py-2">
              Name
            </Label>
            <Input
              id="toName"
              value={invoice.toName}
              onChange={(e) => updateInvoice({ toName: e.target.value })}
              placeholder="Client name or Company"
            />
          </div>
          <div>
            <Label htmlFor="toEmail" className="py-2">
              Email
            </Label>
            <Input
              id="toEmail"
              value={invoice.toEmail}
              onChange={(e) => updateInvoice({ toEmail: e.target.value })}
              placeholder="client@email.com"
              type="email"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactDetails;
