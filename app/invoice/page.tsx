// "use client";

// import InvoiceTemplate from "@/components/invoice";
// import InvoiceForm from "@/components/invoice-form";
// import { Button } from "@/components/ui/button";
// import { Eye } from "lucide-react";
// import { useState } from "react";

// const Invoice = () => {
//   const [showPreview, setShowPreview] = useState(false);
//   if (showPreview) {
//     return <InvoiceTemplate onBack={() => setShowPreview(false)} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50px mb-20">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-bold">Invoice Generator</h1>
//             <p className="text-gray-600">
//               Create Professional Invoice Quickley
//             </p>
//           </div>

//           <Button onClick={() => setShowPreview(true)}>
//             <Eye className="w-4 h-4 mr-2" />
//             Preview
//           </Button>
//         </div>
//         <InvoiceForm />
//       </div>
//     </div>
//   );
// };

// export default Invoice;
