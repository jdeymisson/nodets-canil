import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('<h1>Home criada</h1>');
};

export const dogs = (req: Request, res: Response) => {
    res.send('<h1>Dogs criada</h1>');
};

export const cats = (req: Request, res: Response) => {
    res.send('<h1>Cats criada</h1>');
};

export const fishes = (req: Request, res: Response) => {
    res.send('<h1>Fishes criada</h1>');
};


