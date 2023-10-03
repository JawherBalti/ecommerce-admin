import { getTotalRevenue } from "@/actions/get-total-revenue";
import { CardContent } from "@/components/ui/card";
import { formatter } from "@/lib/utils";

interface TotalRevenueProps {
  storeId: string
}

const TotalRevenue: React.FC<TotalRevenueProps> = async ({ storeId }) => {
  const totalRevenue = await getTotalRevenue(storeId);

  return (
    <CardContent>
      <div className="text-2xl font-bold">{formatter.format(totalRevenue)}</div>
    </CardContent>
  );
};

export default TotalRevenue