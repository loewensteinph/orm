import { SzenarioWhereInput } from "./SzenarioWhereInput";
import { SzenarioOrderByInput } from "./SzenarioOrderByInput";

export type SzenarioFindManyArgs = {
  where?: SzenarioWhereInput;
  orderBy?: Array<SzenarioOrderByInput>;
  skip?: number;
  take?: number;
};
