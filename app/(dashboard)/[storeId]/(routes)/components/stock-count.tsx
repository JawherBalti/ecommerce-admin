import { getStockCount } from "@/actions/get-stock-count";
import { CardContent } from "@/components/ui/card";

interface StockCountProps {
  storeId: string;
}

const StockCount: React.FC<StockCountProps> = async ({ storeId }) => {
  const stockCount = await getStockCount(storeId);

  return (
    <CardContent>
      <div className="text-2xl font-bold">{stockCount}</div>
    </CardContent>
  );
};

export default StockCount;
