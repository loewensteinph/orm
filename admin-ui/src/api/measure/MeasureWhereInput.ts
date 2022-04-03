import { StringFilter } from "../../util/StringFilter";
import { LossListRelationFilter } from "../loss/LossListRelationFilter";
import { SzenarioListRelationFilter } from "../szenario/SzenarioListRelationFilter";

export type MeasureWhereInput = {
  id?: StringFilter;
  loss?: LossListRelationFilter;
  szenario?: SzenarioListRelationFilter;
};
