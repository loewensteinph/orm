import { Loss } from "../loss/Loss";
import { Szenario } from "../szenario/Szenario";

export type Measure = {
  createdAt: Date;
  id: string;
  loss?: Array<Loss>;
  szenario?: Array<Szenario>;
  updatedAt: Date;
};
