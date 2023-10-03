import { getSalesCount } from "@/actions/get-sales-count";
import { CardContent } from "@/components/ui/card";

interface SalesCountProps {
    storeId: string;
}

const SalesCount: React.FC<SalesCountProps> = async ({ storeId }) => {
  const salesCount = await getSalesCount(storeId);

  return (
    <CardContent>
      <div className="text-2xl font-bold">+{salesCount}</div>
    </CardContent>
  );
};

export default SalesCount