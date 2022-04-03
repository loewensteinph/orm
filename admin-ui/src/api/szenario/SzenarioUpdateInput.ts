import { LossUpdateManyWithoutSzenariosInput } from "./LossUpdateManyWithoutSzenariosInput";
import { MeasureUpdateManyWithoutSzenariosInput } from "./MeasureUpdateManyWithoutSzenariosInput";

export type SzenarioUpdateInput = {
  losses?: LossUpdateManyWithoutSzenariosInput;
  measures?: MeasureUpdateManyWithoutSzenariosInput;
};
