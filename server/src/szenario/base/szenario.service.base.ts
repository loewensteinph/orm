/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Szenario, Loss, Measure } from "@prisma/client";

export class SzenarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SzenarioFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SzenarioFindManyArgs>
  ): Promise<number> {
    return this.prisma.szenario.count(args);
  }

  async findMany<T extends Prisma.SzenarioFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SzenarioFindManyArgs>
  ): Promise<Szenario[]> {
    return this.prisma.szenario.findMany(args);
  }
  async findOne<T extends Prisma.SzenarioFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SzenarioFindUniqueArgs>
  ): Promise<Szenario | null> {
    return this.prisma.szenario.findUnique(args);
  }
  async create<T extends Prisma.SzenarioCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SzenarioCreateArgs>
  ): Promise<Szenario> {
    return this.prisma.szenario.create<T>(args);
  }
  async update<T extends Prisma.SzenarioUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SzenarioUpdateArgs>
  ): Promise<Szenario> {
    return this.prisma.szenario.update<T>(args);
  }
  async delete<T extends Prisma.SzenarioDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SzenarioDeleteArgs>
  ): Promise<Szenario> {
    return this.prisma.szenario.delete(args);
  }

  async findLosses(
    parentId: string,
    args: Prisma.LossFindManyArgs
  ): Promise<Loss[]> {
    return this.prisma.szenario
      .findUnique({
        where: { id: parentId },
      })
      .losses(args);
  }

  async findMeasures(
    parentId: string,
    args: Prisma.MeasureFindManyArgs
  ): Promise<Measure[]> {
    return this.prisma.szenario
      .findUnique({
        where: { id: parentId },
      })
      .measures(args);
  }
}
