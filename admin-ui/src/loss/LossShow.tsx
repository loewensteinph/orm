import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LOSS_TITLE_FIELD } from "./LossTitle";
import { SZENARIO_TITLE_FIELD } from "../szenario/SzenarioTitle";

export const LossShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Short Description" source="shortDescription" />
        <ReferenceField
          label="Szenario"
          source="szenario.id"
          reference="Szenario"
        >
          <TextField source={SZENARIO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="LossId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Loss" source="loss.id" reference="Loss">
              <TextField source={LOSS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Risk Type" source="riskType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
