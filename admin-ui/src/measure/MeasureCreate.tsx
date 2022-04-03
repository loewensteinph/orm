import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { LossTitle } from "../loss/LossTitle";
import { SzenarioTitle } from "../szenario/SzenarioTitle";

export const MeasureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="loss"
          reference="Loss"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LossTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="szenario"
          reference="Szenario"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SzenarioTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
