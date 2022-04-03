import { LossUpdateManyWithoutMeasuresInput } from "./LossUpdateManyWithoutMeasuresInput";
import { SzenarioUpdateManyWithoutMeasuresInput } from "./SzenarioUpdateManyWithoutMeasuresInput";

export type MeasureUpdateInput = {
  loss?: LossUpdateManyWithoutMeasuresInput;
  szenario?: SzenarioUpdateManyWithoutMeasuresInput;
};
