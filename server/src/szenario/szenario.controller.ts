import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SzenarioService } from "./szenario.service";
import { SzenarioControllerBase } from "./base/szenario.controller.base";

@swagger.ApiTags("szenarios")
@common.Controller("szenarios")
export class SzenarioController extends SzenarioControllerBase {
  constructor(
    protected readonly service: SzenarioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
