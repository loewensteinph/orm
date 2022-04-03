import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SzenarioServiceBase } from "./base/szenario.service.base";

@Injectable()
export class SzenarioService extends SzenarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
