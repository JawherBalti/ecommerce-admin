import { CreditCard, DollarSign, Package } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import TotalRevenue from "./components/total-revenue";
import { Suspense } from "react";
import Loading from "./components/loading";
import SalesCount from "./components/sales-count";
import StockCount from "./components/stock-count";
import GraphRevenue from "./components/graph-revenue";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Overview of your store" />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <Suspense fallback={<Loading />}>
              <TotalRevenue storeId={params.storeId} />
            </Suspense>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <Suspense fallback={<Loading />}>
              <SalesCount storeId={params.storeId} />
            </Suspense>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Products In Stock
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <Suspense fallback={<Loading />}>
              <StockCount storeId={params.storeId} />
            </Suspense>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <Suspense fallback={<Loading />}>
            <GraphRevenue storeId={params.storeId} />
          </Suspense>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
