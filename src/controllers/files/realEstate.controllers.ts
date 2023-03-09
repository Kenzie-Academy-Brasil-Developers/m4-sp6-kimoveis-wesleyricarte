import { Request, Response } from "express"
import { createRealEstateService } from "../../services"

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const newRealEstate = await createRealEstateService(req.body)

    return res.status(201).json(newRealEstate)
}