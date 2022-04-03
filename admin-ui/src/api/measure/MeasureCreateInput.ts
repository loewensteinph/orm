import { LossCreateNestedManyWithoutMeasuresInput } from "./LossCreateNestedManyWithoutMeasuresInput";
import { SzenarioCreateNestedManyWithoutMeasuresInput } from "./SzenarioCreateNestedManyWithoutMeasuresInput";

export type MeasureCreateInput = {
  loss?: LossCreateNestedManyWithoutMeasuresInput;
  szenario?: SzenarioCreateNestedManyWithoutMeasuresInput;
};
