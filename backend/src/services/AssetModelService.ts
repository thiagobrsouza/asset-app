import { prisma } from "../prisma";

interface AssetModel {
  name: string;
  categoryId: number;
  manufacturerId: number;
}

export class AssetModelService {

  async create({name, categoryId, manufacturerId}: AssetModel) {
    const exists = await prisma.assetModel.findFirst({
      where: { name }
    });
    if (exists) {
      throw new Error('AssetModel already exists!');
    }
    return await prisma.assetModel.create({
      data: { name,
        category: { connect: { id: categoryId } },
        manufacturer: { connect: { id: manufacturerId } }
      }
    });
  }

  async findAll() {
    return await prisma.assetModel.findMany({
      include: { manufacturer: true, category: true }
    });
  }

  async findBydId(id: number) {
    const assetModel = await prisma.assetModel.findFirst({
      where: { id },
      include: { manufacturer: true, category: true }
    });
    return assetModel;
  }

  async update(id: number, {name, categoryId, manufacturerId}: AssetModel) {
    const assetModel = await prisma.assetModel.findFirst({
      where: { id }
    });
    const exists = await prisma.assetModel.findFirst({
      where: { name }
    });
    if (exists && exists.id !== assetModel?.id) {
      throw new Error('AssetModel already exists!');
    }
    return await prisma.assetModel.update({
      where: { id },
      data: { name,
        category: { connect: { id: categoryId } },
        manufacturer: { connect: { id: manufacturerId } }
      }
    });
  }

  async deleteOne(id: number) {
    try {
      await prisma.assetModel.delete({
        where: { id }
      });
    } catch {
      throw new Error('AssetModel can not removed!')
    }
  }

}