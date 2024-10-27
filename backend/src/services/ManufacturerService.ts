import { prisma } from "../prisma";

interface Manufacturer {
  name: string;
}

export class ManufacturerService {

  async create({name}: Manufacturer) {
    const exists = await prisma.manufacturer.findFirst({
      where: { name }
    });
    if (exists) {
      throw new Error('Manufacturer already exists!');
    }
    return await prisma.manufacturer.create({
      data: { name }
    });
  }

  async findAll() {
    return await prisma.manufacturer.findMany();
  }

  async findBydId(id: number) {
    const manufacturer = await prisma.manufacturer.findFirst({
      where: { id }
    });
    return manufacturer;
  }

  async update(id: number, {name}: Manufacturer) {
    const manufacturer = await prisma.manufacturer.findFirst({
      where: { id }
    });
    const exists = await prisma.manufacturer.findFirst({
      where: { name }
    });
    if (exists && exists.id !== manufacturer?.id) {
      throw new Error('Manufacturer already exists!');
    }
    return await prisma.manufacturer.update({
      where: { id },
      data: { name }
    });
  }

  async deleteOne(id: number) {
    try {
      await prisma.manufacturer.delete({
        where: { id }
      });
    } catch {
      throw new Error('Manufacturer can not removed!')
    }
  }

}