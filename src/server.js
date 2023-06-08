import express from 'express'
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
const app = express(); 
const port = 8080 ;

configViewEngine(app);
initWebRoute(app) ; 

app.get('/', ) 

app.listen(port, () =>{
    console.log(`App is running on port ${port}`)
})