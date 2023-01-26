import { query } from '../dbConfig';

const postCtrl = {
    getPosts : async (request, response) => {
        query(`
        select 
            p.sequence,
            u.userName,
            p.title,
            date_format(p.postTime, "%Y-%m-%d %h:%i:%s") as postTime,
            p.likeCnt
        from posts p
        left join userinfo u
            on p.userSeq = u.sequence
        where isDeleted = 0
        `, (error, rows, field)=>{
            if(error) throw error;
            console.log(rows);
            response.send(rows);
        });
    },
    insertPost : async (request, response) => {
        const {userSeq, title, content} = request.body;
        const sql = `insert into posts (userSeq, title, content) values (${userSeq},${title},${content})`
        query(sql, (error, rows)=>{
            if(error) throw error;
            response.send(rows);
        });
    },

}

export default postCtrl;