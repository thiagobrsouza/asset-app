import { Request, Response, Router } from "express";
import { CategoryService } from "../services/CategoryService";

const service = new CategoryService();
const categoryRoute = Router();

categoryRoute.post('/categories',
  async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await service.create({ name });
    return res.status(201).json(result);
  }
);

categoryRoute.get('/categories',
  async (req: Request, res: Response) => {
    const result = await service.findAll();
    return res.json(result);
  }
);

categoryRoute.get('/categories/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.findBydId(+id);
    return res.json(result);
  }
);

categoryRoute.patch('/categories/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const result = await service.update(+id, { name });
    return res.json(result);
  }
);

categoryRoute.delete('/categories/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.deleteOne(+id);
    return res.json(result);
  }
);

export { categoryRoute }