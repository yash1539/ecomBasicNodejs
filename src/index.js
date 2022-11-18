import { accountRoutes } from './src/routes/accountroutes';
import addUserRoutes from './src/routes/userRoutes'
import addAccountUser from './src/routes/accountUserRouter'
import { addApplicationRoutes } from './src/routes/applicationRoutes';
import addLogRoutes from './src/routes/logsRouter'
import { logHttpRequest } from './middleware';
const app = new Zode();
app.use(logHttpRequest)
addAccountUser(app);
addUserRoutes(app);
accountRoutes(app);
addApplicationRoutes(app);
addLogRoutes(app)
console.log(`app http server started on port ${process.env.HTTP_PORT}`)
export default app.start();