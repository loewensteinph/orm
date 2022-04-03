/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Loss } from "../../loss/base/Loss";
import { Measure } from "../../measure/base/Measure";
@ObjectType()
class Szenario {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Loss],
  })
  @ValidateNested()
  @Type(() => Loss)
  @IsOptional()
  losses?: Array<Loss>;

  @ApiProperty({
    required: false,
    type: () => [Measure],
  })
  @ValidateNested()
  @Type(() => Measure)
  @IsOptional()
  measures?: Array<Measure>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Szenario };