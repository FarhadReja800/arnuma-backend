import { Request, Response } from "express";
import { BenefitService } from "./benefit.services";

const createBenefit = async (req: Request, res: Response) => {
  const result = await BenefitService.createBenefit(req.body);

  res.status(201).json({
    success: true,
    message: "Benefit created successfully",
    data: result,
  });
};

const getBenefits = async (req: Request, res: Response) => {
  const result = await BenefitService.getBenefits();

  res.status(200).json({
    success: true,
    data: result,
  });
};

const getSingleBenefit = async (req: Request, res: Response) => {
  const result = await BenefitService.getSingleBenefit(req.params.id as string);

  res.status(200).json({
    success: true,
    data: result,
  });
};

const updateBenefit = async (req: Request, res: Response) => {
  const result = await BenefitService.updateBenefit(
    req.params.id as string,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Benefit updated successfully",
    data: result,
  });
};

const deleteBenefit = async (req: Request, res: Response) => {
  await BenefitService.deleteBenefit(req.params.id as string);

  res.status(200).json({
    success: true,
    message: "Benefit deleted successfully",
  });
};

export const BenefitController = {
  createBenefit,
  getBenefits,
  getSingleBenefit,
  updateBenefit,
  deleteBenefit,
};