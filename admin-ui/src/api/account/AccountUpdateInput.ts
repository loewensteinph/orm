import { LossWhereUniqueInput } from "../loss/LossWhereUniqueInput";

export type AccountUpdateInput = {
  amount?: number;
  loss?: LossWhereUniqueInput;
  riskType?: "MarketRisk" | "OpRisk" | "CreditRisk" | null;
};
