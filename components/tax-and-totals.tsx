import { useInvoice } from "@/context/invoice-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const TaxAndTotals = () => {
  const { invoice, updateInvoice } = useInvoice();

  const handleTaxRateChange = (value: string) => {
    if (value === "") {
      updateInvoice({ taxRate: "" });
    } else {
      const numValue = Number.parseFloat(value);
      if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
        updateInvoice({ taxRate: numValue });
      }
    }
  };

  const handleTextRateBlur = () => {
    if (invoice.taxRate === "" || isNaN(Number(invoice.taxRate))) {
      updateInvoice({ taxRate: 0 });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tax & Total</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="taxRate">VAT Rate (%)</label>
          <Input
            id="taxRate"
            value={invoice.taxRate}
            onChange={(e) => handleTaxRateChange(e.target.value)}
            onBlur={handleTextRateBlur}
            type="number"
            min="0"
            max="100"
            step="0.01"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>£{invoice.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>
              VAT({typeof invoice.taxRate === "number" ? invoice.taxRate : 0}%):
            </span>
            <span>£{invoice.taxAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total:</span>
            <span>£{invoice.total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxAndTotals;
