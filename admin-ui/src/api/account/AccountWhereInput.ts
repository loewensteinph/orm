import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { LossWhereUniqueInput } from "../loss/LossWhereUniqueInput";

export type AccountWhereInput = {
  amount?: FloatFilter;
  id?: StringFilter;
  loss?: LossWhereUniqueInput;
  riskType?: "MarketRisk" | "OpRisk" | "CreditRisk";
};
