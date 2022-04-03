import { Loss as TLoss } from "../api/loss/Loss";

export const LOSS_TITLE_FIELD = "shortDescription";

export const LossTitle = (record: TLoss): string => {
  return record.shortDescription || record.id;
};
