const mongoose = require ('mongoose');


const dbConnection = async () => {
    try{
        
        await mongoose.connect (process.env.MONGODB_CNN, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        })

        console.log ('Base de Datos Online')

    }catch (error){
        console.log (error)
        throw new Error ('Error en inicializacion de BD')
    }

}

module.exports = {
    dbConnection
}