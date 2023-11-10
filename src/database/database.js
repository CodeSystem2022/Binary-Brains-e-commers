import { createPool } from 'mysql2/promise';
import { config } from '../../src/config.js';

// Paso los parametros para conectarme
// Objeto de conexion
const pool = createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    port:config.port,
})