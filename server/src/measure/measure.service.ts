import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MeasureServiceBase } from "./base/measure.service.base";

@Injectable()
export class MeasureService extends MeasureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
