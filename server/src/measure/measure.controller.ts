import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MeasureService } from "./measure.service";
import { MeasureControllerBase } from "./base/measure.controller.base";

@swagger.ApiTags("measures")
@common.Controller("measures")
export class MeasureController extends MeasureControllerBase {
  constructor(
    protected readonly service: MeasureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
