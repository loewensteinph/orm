/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LossWhereUniqueInput } from "../../loss/base/LossWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class LossUpdateManyWithoutMeasuresInput {
  @Field(() => [LossWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LossWhereUniqueInput],
  })
  connect?: Array<LossWhereUniqueInput>;

  @Field(() => [LossWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LossWhereUniqueInput],
  })
  disconnect?: Array<LossWhereUniqueInput>;

  @Field(() => [LossWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LossWhereUniqueInput],
  })
  set?: Array<LossWhereUniqueInput>;
}
export { LossUpdateManyWithoutMeasuresInput };
