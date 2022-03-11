//archivo principal

import app from "./app"
import './database' //llama al archivo de base de datos

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log('servidor en puerto:',app.get('port'))
})