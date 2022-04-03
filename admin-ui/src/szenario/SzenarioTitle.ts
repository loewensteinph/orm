import { Szenario as TSzenario } from "../api/szenario/Szenario";

export const SZENARIO_TITLE_FIELD = "id";

export const SzenarioTitle = (record: TSzenario): string => {
  return record.id || record.id;
};
