var mongoose = require('mongoose');

class Conexion {
    constructor(url) {
        this.url = url
        try {
            if (!url) throw 'No se indicó url de conexion con mongodb.'
            mongoose.connection.openUri(url, (err, res) => {
                if (err) throw err;
            });
            return mongoose.connection;
        } catch (error) {
            throw '<conexion>' + error
        }

    }
}

module.exports = Conexion