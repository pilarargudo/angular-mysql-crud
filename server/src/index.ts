import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

  public app: Application;

  constructor(){
    this.app = express();  
    this.config();
    this.routes();
  }

  config(): void{
    this.app.set('port', process.env.PORT || 3000)
  }
  routes(): void{
    this.app.use('/', indexRoutes);
    this.app.use('/api/games',gamesRoutes);
  }
  start(): void{
    // inicia el servidor
    this.app.listen(this.app.get('port'),() => {
      console.log(`Server on port`, this.app.get('port'));
    });
  }
}

// ejecutar está clase y que nos devuelva el objeto
const server = new Server();
server.start();