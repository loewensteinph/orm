import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SzenarioResolverBase } from "./base/szenario.resolver.base";
import { Szenario } from "./base/Szenario";
import { SzenarioService } from "./szenario.service";

@graphql.Resolver(() => Szenario)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SzenarioResolver extends SzenarioResolverBase {
  constructor(
    protected readonly service: SzenarioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
