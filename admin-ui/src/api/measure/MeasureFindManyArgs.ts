import { MeasureWhereInput } from "./MeasureWhereInput";
import { MeasureOrderByInput } from "./MeasureOrderByInput";

export type MeasureFindManyArgs = {
  where?: MeasureWhereInput;
  orderBy?: Array<MeasureOrderByInput>;
  skip?: number;
  take?: number;
};
