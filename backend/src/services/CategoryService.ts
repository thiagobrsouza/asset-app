import { prisma } from "../prisma";

interface Category {
  name: string;
}

export class CategoryService {

  async create({name}: Category) {
    const exists = await prisma.category.findFirst({
      where: { name }
    });
    if (exists) {
      throw new Error('Category already exists!');
    }
    return await prisma.category.create({
      data: { name }
    });
  }

  async findAll() {
    return await prisma.category.findMany();
  }

  async findBydId(id: number) {
    const category = await prisma.category.findFirst({
      where: { id }
    });
    return category;
  }

  async update(id: number, {name}: Category) {
    const category = await prisma.category.findFirst({
      where: { id }
    });
    const exists = await prisma.category.findFirst({
      where: { name }
    });
    if (exists && exists.id !== category?.id) {
      throw new Error('Category already exists!');
    }
    return await prisma.category.update({
      where: { id },
      data: { name }
    });
  }

  async deleteOne(id: number) {
    try {
      await prisma.category.delete({
        where: { id }
      });
    } catch {
      throw new Error('Category can not removed!')
    }
  }

}