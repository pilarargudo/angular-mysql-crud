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
  public async create (req: Request, res: Response): Promise<void> {
    // datos  que recibimos
    console.log(req.body);
    //enviamos a la base de datos, como puede tomar tiempo async await
    await pool.query('INSERT INTO games set ?', [req.body]);
    res.json({message: 'Juego guardado'});
  }

  public delete (req: Request, res: Response) {
    res.json({text: 'eliminando juego ' + req.params.id});
  }

  public update (req: Request, res: Response) {
    res.json({text: 'actualizando juego ' + req.params.id});
  }
}

export const gamesController = new GamesController();

