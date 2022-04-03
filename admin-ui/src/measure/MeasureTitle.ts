import { Measure as TMeasure } from "../api/measure/Measure";

export const MEASURE_TITLE_FIELD = "id";

export const MeasureTitle = (record: TMeasure): string => {
  return record.id || record.id;
};
