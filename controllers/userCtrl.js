import { query } from '../dbConfig';

const userCtrl = {
    getUsers : async (request, response) => {
        query('select * from userinfo where isAdmin = 0', (error, rows)=>{
            if(error) throw error;
            console.log(rows);
            response.send(rows);
        });
    },
    insertUsers : async (request, response) => {
        const {userId, userName, password} = request.body;
        const sql = `insert into userinfo (userId, userName, password) values (${userId},${userName},${password})`
        query(sql, (error, rows)=>{
            if(error) throw error;
            response.send(rows);
        });
    },

}

export default userCtrl;