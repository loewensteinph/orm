import { Module } from "@nestjs/common";
import { MeasureModuleBase } from "./base/measure.module.base";
import { MeasureService } from "./measure.service";
import { MeasureController } from "./measure.controller";
import { MeasureResolver } from "./measure.resolver";

@Module({
  imports: [MeasureModuleBase],
  controllers: [MeasureController],
  providers: [MeasureService, MeasureResolver],
  exports: [MeasureService],
})
export class MeasureModule {}
