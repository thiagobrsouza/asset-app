import { Request, Response, Router } from "express";
import { ManufacturerService } from "../services/ManufacturerService";

const service = new ManufacturerService();
const manufacturerRoute = Router();

manufacturerRoute.post('/manufacturers',
  async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await service.create({ name });
    return res.status(201).json(result);
  }
);

manufacturerRoute.get('/manufacturers',
  async (req: Request, res: Response) => {
    const result = await service.findAll();
    return res.json(result);
  }
);

manufacturerRoute.get('/manufacturers/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.findBydId(+id);
    return res.json(result);
  }
);

manufacturerRoute.patch('/manufacturers/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const result = await service.update(+id, { name });
    return res.json(result);
  }
);

manufacturerRoute.delete('/manufacturers/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.deleteOne(+id);
    return res.json(result);
  }
);

export { manufacturerRoute }