import { Module } from "@nestjs/common";
import { SzenarioModuleBase } from "./base/szenario.module.base";
import { SzenarioService } from "./szenario.service";
import { SzenarioController } from "./szenario.controller";
import { SzenarioResolver } from "./szenario.resolver";

@Module({
  imports: [SzenarioModuleBase],
  controllers: [SzenarioController],
  providers: [SzenarioService, SzenarioResolver],
  exports: [SzenarioService],
})
export class SzenarioModule {}
