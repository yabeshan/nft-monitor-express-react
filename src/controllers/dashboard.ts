import { Response, Request, NextFunction } from "express";

import { 
  getVers, 
} from "../db/dashboardDB.js"

export const getVersion = async (
  req: Request, 
  res: Response
) => {
  try {
    const v = await getVers();
    return res.status(200).json({
      "version": v
    });  
  } catch (err: any) {
    res.status(500).json({
      message: "controllers-api-getVersion error message :: " + err.message
    })
  }
}
