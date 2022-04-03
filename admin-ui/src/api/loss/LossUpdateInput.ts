import { AccountUpdateManyWithoutLossesInput } from "./AccountUpdateManyWithoutLossesInput";
import { MeasureUpdateManyWithoutLossesInput } from "./MeasureUpdateManyWithoutLossesInput";
import { SzenarioWhereUniqueInput } from "../szenario/SzenarioWhereUniqueInput";

export type LossUpdateInput = {
  accounts?: AccountUpdateManyWithoutLossesInput;
  measures?: MeasureUpdateManyWithoutLossesInput;
  shortDescription?: string | null;
  szenario?: SzenarioWhereUniqueInput | null;
};
