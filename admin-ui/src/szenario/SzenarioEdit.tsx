import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { LossTitle } from "../loss/LossTitle";
import { MeasureTitle } from "../measure/MeasureTitle";

export const SzenarioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="losses"
          reference="Loss"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LossTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="measures"
          reference="Measure"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MeasureTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
