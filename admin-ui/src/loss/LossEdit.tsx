import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { MeasureTitle } from "../measure/MeasureTitle";
import { SzenarioTitle } from "../szenario/SzenarioTitle";

export const LossEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="measures"
          reference="Measure"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MeasureTitle} />
        </ReferenceArrayInput>
        <TextInput label="Short Description" source="shortDescription" />
        <ReferenceInput
          source="szenario.id"
          reference="Szenario"
          label="Szenario"
        >
          <SelectInput optionText={SzenarioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
