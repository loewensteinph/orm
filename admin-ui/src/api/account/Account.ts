import { Loss } from "../loss/Loss";

export type Account = {
  amount: number;
  createdAt: Date;
  id: string;
  loss?: Loss;
  riskType?: "MarketRisk" | "OpRisk" | "CreditRisk" | null;
  updatedAt: Date;
};
