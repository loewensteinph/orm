import { StringFilter } from "../../util/StringFilter";
import { LossListRelationFilter } from "../loss/LossListRelationFilter";
import { MeasureListRelationFilter } from "../measure/MeasureListRelationFilter";

export type SzenarioWhereInput = {
  id?: StringFilter;
  losses?: LossListRelationFilter;
  measures?: MeasureListRelationFilter;
};
