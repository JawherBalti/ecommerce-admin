import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { Overview } from "@/components/overview";
import { CardContent } from "@/components/ui/card";

interface GraphRevenueProps {
  storeId: string;
}

const GraphRevenue: React.FC<GraphRevenueProps> = async ({ storeId }) => {
  const graphRevenue = await getGraphRevenue(storeId);

  return (
    <CardContent className="pl-2">
      <Overview data={graphRevenue} />
    </CardContent>
  );
};

export default GraphRevenue;
