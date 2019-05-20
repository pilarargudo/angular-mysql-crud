import { Request, Response} from 'express';

import pool from '../database';

class GamesController {

  public list (req: Request, res: Response) {
    //pool.query('DESCRIBE games');
    res.json('Listando juegos');
  }
  public getOne (req: Request, res: Response) {
    //pool.query('DESCRIBE games');
    res.json('este es el juego ' + req.params.id );
  }
  public create (req: Request, res: Response) {
    res.json({text: 'creando un juego'});
  }

  public delete (req: Request, res: Response) {
    res.json({text: 'eliminando juego ' + req.params.id});
  }

  public update (req: Request, res: Response) {
    res.json({text: 'actualizando juego ' + req.params.id});
  }
}

export const gamesController = new GamesController();

