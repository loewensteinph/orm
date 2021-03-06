/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LossCreateNestedManyWithoutSzenariosInput } from "./LossCreateNestedManyWithoutSzenariosInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MeasureCreateNestedManyWithoutSzenariosInput } from "./MeasureCreateNestedManyWithoutSzenariosInput";
@InputType()
class SzenarioCreateInput {
  @ApiProperty({
    required: false,
    type: () => LossCreateNestedManyWithoutSzenariosInput,
  })
  @ValidateNested()
  @Type(() => LossCreateNestedManyWithoutSzenariosInput)
  @IsOptional()
  @Field(() => LossCreateNestedManyWithoutSzenariosInput, {
    nullable: true,
  })
  losses?: LossCreateNestedManyWithoutSzenariosInput;

  @ApiProperty({
    required: false,
    type: () => MeasureCreateNestedManyWithoutSzenariosInput,
  })
  @ValidateNested()
  @Type(() => MeasureCreateNestedManyWithoutSzenariosInput)
  @IsOptional()
  @Field(() => MeasureCreateNestedManyWithoutSzenariosInput, {
    nullable: true,
  })
  measures?: MeasureCreateNestedManyWithoutSzenariosInput;
}
export { SzenarioCreateInput };
