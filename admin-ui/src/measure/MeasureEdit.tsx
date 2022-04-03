import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { LossTitle } from "../loss/LossTitle";
import { SzenarioTitle } from "../szenario/SzenarioTitle";

export const MeasureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
