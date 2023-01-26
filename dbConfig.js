import { readFileSync } from 'fs';

const data = readFileSync('./database.json');
const conf = JSON.parse(data);
import { createConnection } from 'mysql';

const connection = createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database,
})

connection.connect();

export default connection;