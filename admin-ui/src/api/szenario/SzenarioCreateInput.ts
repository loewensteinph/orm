import { LossCreateNestedManyWithoutSzenariosInput } from "./LossCreateNestedManyWithoutSzenariosInput";
import { MeasureCreateNestedManyWithoutSzenariosInput } from "./MeasureCreateNestedManyWithoutSzenariosInput";

export type SzenarioCreateInput = {
  losses?: LossCreateNestedManyWithoutSzenariosInput;
  measures?: MeasureCreateNestedManyWithoutSzenariosInput;
};
