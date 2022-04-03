import { AccountCreateNestedManyWithoutLossesInput } from "./AccountCreateNestedManyWithoutLossesInput";
import { MeasureCreateNestedManyWithoutLossesInput } from "./MeasureCreateNestedManyWithoutLossesInput";
import { SzenarioWhereUniqueInput } from "../szenario/SzenarioWhereUniqueInput";

export type LossCreateInput = {
  accounts?: AccountCreateNestedManyWithoutLossesInput;
  measures?: MeasureCreateNestedManyWithoutLossesInput;
  shortDescription?: string | null;
  szenario?: SzenarioWhereUniqueInput | null;
};
