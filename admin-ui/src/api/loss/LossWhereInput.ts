import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeasureListRelationFilter } from "../measure/MeasureListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SzenarioWhereUniqueInput } from "../szenario/SzenarioWhereUniqueInput";

export type LossWhereInput = {
  accounts?: AccountListRelationFilter;
  id?: StringFilter;
  measures?: MeasureListRelationFilter;
  shortDescription?: StringNullableFilter;
  szenario?: SzenarioWhereUniqueInput;
};
