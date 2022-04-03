import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MeasureResolverBase } from "./base/measure.resolver.base";
import { Measure } from "./base/Measure";
import { MeasureService } from "./measure.service";

@graphql.Resolver(() => Measure)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MeasureResolver extends MeasureResolverBase {
  constructor(
    protected readonly service: MeasureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
