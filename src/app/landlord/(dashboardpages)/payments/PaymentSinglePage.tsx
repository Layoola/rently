import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import Image from "next/image";
import PaymentTable from "./PaymentTable";

interface PaymentProps {
  payment: any;
  onBack: () => void;
}

const PaymentSinglePage = ({ payment, onBack }: PaymentProps) => {
  return (
    <div className="p-6 space-y-6">
      {/* Header with back button */}
      <div className="flex">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
            <div className="flex gap-2 items-center">
              <Button variant="link" onClick={onBack} className="">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-xl font-bold text-gray-900">
                {payment.title}
              </h1>
            </div>
            <Badge
              variant="default"
              className={`text-xs bg-red-100 text-red-800/75`}
            >
              {payment.paymentType}
            </Badge>
          </div>
          <div className="flex gap-1">
            <MapPin className="w-4 h-4" />
            <p className="text-sm text-gray-900">{payment.address}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-video relative">
          <Image
            src={payment.images[0]}
            alt={payment.title}
            fill
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="aspect-video grid grid-cols-2 md:grid-cols-none md:grid-rows-2 gap-4">
          <div className=" relative">
            <Image
              src={payment.images[0]}
              alt={payment.title}
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className=" relative">
            <Image
              src={payment.images[0]}
              alt={payment.title}
              fill
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <PaymentTable payment={payment} />
    </div>
  );
};

export default PaymentSinglePage;
