import { Request, Response, Router } from "express";
import { AssetModelService } from "../services/AssetModelService";

const service = new AssetModelService();
const assetModelRoute = Router();

assetModelRoute.post('/asset-models',
  async (req: Request, res: Response) => {
    const { name, categoryId, manufacturerId } = req.body;
    const result = await service.create({ name, categoryId, manufacturerId });
    return res.status(201).json(result);
  }
);

assetModelRoute.get('/asset-models',
  async (req: Request, res: Response) => {
    const result = await service.findAll();
    return res.json(result);
  }
);

assetModelRoute.get('/asset-models/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.findBydId(+id);
    return res.json(result);
  }
);

assetModelRoute.patch('/asset-models/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, categoryId, manufacturerId } = req.body;
    const result = await service.update(+id, { name, categoryId, manufacturerId });
    return res.json(result);
  }
);

assetModelRoute.delete('/asset-models/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.deleteOne(+id);
    return res.json(result);
  }
);

export { assetModelRoute }