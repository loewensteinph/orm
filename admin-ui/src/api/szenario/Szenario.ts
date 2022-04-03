import { Loss } from "../loss/Loss";
import { Measure } from "../measure/Measure";

export type Szenario = {
  createdAt: Date;
  id: string;
  losses?: Array<Loss>;
  measures?: Array<Measure>;
  updatedAt: Date;
};
