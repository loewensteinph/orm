import { Account } from "../account/Account";
import { Measure } from "../measure/Measure";
import { Szenario } from "../szenario/Szenario";

export type Loss = {
  accounts?: Array<Account>;
  createdAt: Date;
  id: string;
  measures?: Array<Measure>;
  shortDescription: string | null;
  szenario?: Szenario | null;
  updatedAt: Date | null;
};
