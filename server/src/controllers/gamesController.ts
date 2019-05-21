import { Request, Response} from 'express';

import pool from '../database';

class GamesController {

  public async list (req: Request, res: Response) {
    const games = await pool.query('SELECT * from games');
    res.json(games);
  }
  public async getOne (req: Request, res: Response): Promise<void> {
    //res.json('este es el juego ' + req.params.id );
    const { id } = req.params;
    const game = await pool.query('SELECT * FROM games WHERE id = ?', [id] );
    console.log(game);
    if(game.length > 0) {
      //res.json({text: 'Juego encontrado'});
      // devuelve el objeto y no el array
      res.json(game[0]);
    }
    res.status(404).json({text: 'Lo siento, juego no encontrado'});
  }
  public async create (req: Request, res: Response): Promise<any> {
    // datos  que recibimos
    console.log(req.body);
    //enviamos a la base de datos, como puede tomar tiempo async await
    await pool.query('INSERT INTO games set ?', [req.body]);
    res.json({message: 'Juego guardado'});
  }

  public async delete (req: Request, res: Response): Promise<void> {
    //res.json({text: 'eliminando juego ' + req.params.id});
    const { id } = req.params;
    await pool.query('DELETE FROM games WHERE id = ?', [id] );
    res.json({message: 'eliminado el juego ' + id});
  }

  public async update (req: Request, res: Response): Promise<void>  {
    //res.json({text: 'actualizando juego ' + req.params.id});
    const { id } = req.params;
    await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.json({message: 'actualizado el juego ' + id});
  }
}

export const gamesController = new GamesController();

