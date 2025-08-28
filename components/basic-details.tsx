import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useInvoice } from "@/context/invoice-context";

const BasicDetails = () => {
  const { invoice, updateInvoice } = useInvoice();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="invoiceNumber" className="py-2">
            Invoice Number
          </Label>
          <Input
            id="invoiceNumber"
            onChange={(e) => updateInvoice({ invoiceNumber: e.target.value })}
            value={invoice.invoiceNumber}
          />
        </div>
        <div>
          <Label htmlFor="date" className="py-2">
            Date
          </Label>
          <Input
            type="date"
            id="date"
            onChange={(e) => updateInvoice({ date: e.target.value })}
            value={invoice.date}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicDetails;
