import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lossId?: SortOrder;
  riskType?: SortOrder;
  updatedAt?: SortOrder;
};
