import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LossTitle } from "../loss/LossTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput source="loss.id" reference="Loss" label="Loss">
          <SelectInput optionText={LossTitle} />
        </ReferenceInput>
        <SelectInput
          source="riskType"
          label="Risk Type"
          choices={[
            { label: "market risk", value: "MarketRisk" },
            { label: "op risk", value: "OpRisk" },
            { label: "credit risk", value: "CreditRisk" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
