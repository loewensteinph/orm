import { LossWhereUniqueInput } from "../loss/LossWhereUniqueInput";

export type AccountCreateInput = {
  amount: number;
  loss: LossWhereUniqueInput;
  riskType?: "MarketRisk" | "OpRisk" | "CreditRisk" | null;
};
