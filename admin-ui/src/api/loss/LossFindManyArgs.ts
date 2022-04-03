import { LossWhereInput } from "./LossWhereInput";
import { LossOrderByInput } from "./LossOrderByInput";

export type LossFindManyArgs = {
  where?: LossWhereInput;
  orderBy?: Array<LossOrderByInput>;
  skip?: number;
  take?: number;
};
