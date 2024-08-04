import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dtos";
import { CreateUserQueryParams } from "../types/query-params";

export const getUsers = (req: Request, res: Response) => {
    res.send([])
}
export const getUserById = (req: Request, res: Response) => {
    res.send([])
}

export const createUser = (req:Request<{},{}, CreateUserDto, CreateUserQueryParams>, res:Response) => {
    req.query.loginAfterCreate
}