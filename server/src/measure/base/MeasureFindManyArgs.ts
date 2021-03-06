/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeasureWhereInput } from "./MeasureWhereInput";
import { Type } from "class-transformer";
import { MeasureOrderByInput } from "./MeasureOrderByInput";

@ArgsType()
class MeasureFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MeasureWhereInput,
  })
  @Field(() => MeasureWhereInput, { nullable: true })
  @Type(() => MeasureWhereInput)
  where?: MeasureWhereInput;

  @ApiProperty({
    required: false,
    type: [MeasureOrderByInput],
  })
  @Field(() => [MeasureOrderByInput], { nullable: true })
  @Type(() => MeasureOrderByInput)
  orderBy?: Array<MeasureOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MeasureFindManyArgs };
