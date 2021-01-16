import mysql from 'mysql';
const getConnection = async() => {
    let conn = mysql.createConnection( {
        "host" : "localhost",
        "port": "3306",
        "user": "root",
        "password": "root",
        "database": "studentdb"
    })
    await conn.connect( err => {
        if (err) {
            console.log('getConnection: connection error: ' + err)
            return;
        }
        console.log('getConnection: connection successful');
    })
    return conn;
}

export const dbQueryQuestions = async (id) => {
    var questions = [];
    let conn = await getConnection();
    const resultHandler = (err, result, fields, resolve) => {
        if (err) {
            console.log('dbQueryQuestions: connection error: ' + err)
            return;
        }
        console.log('dbQueryQuestions: connection successful');
        for (let i=0; i< result.length; i++) {
            let row = result[i];
            let question = { "cid" : row["CID"], "question": row["QUESTION"]}
            console.log("question="+JSON.stringify(question))
            questions = [...questions, question]
        }
        resolve( questions);   
    }
    try {
        return new Promise( (resolve, reject) => {
            let sql = 'SELECT CID, QUESTION FROM QUESTIONS WHERE CID = '+id;
            console.log( 'dbQueryQuestions: sql='+sql);
            conn.query( sql, (err, result, fields) => {
                resultHandler( err, result, fields, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbQueryQuestions: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise( (resolve, reject) => {resolve([])})
}




export const dbInsertQuestions = async (question) => {
    var question;
    let conn = await getConnection();
    const resultHandler = (err, result, fields, resolve) => {
        if (err) {
            console.log('dbInsertQuestions: connection error: ' + err)
            return;
        }
        console.log('dbInsertQuestions: connection successful');
        resolve( 1);   
    }
    try {
        return new Promise( (resolve, reject) => {
            let sql = `INSERT INTO QUESTIONS (CID, QUESTION) VALUES ('${question.cid}', '${question.question})`;
            console.log( 'dbInsertQuestions: sql='+sql);
            conn.query( sql, (err, result, fields) => {
                resultHandler( err, result, fields, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbInsertQuestions: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise( (resolve, reject) => {resolve(0)})
}


 export const dbDeleteQuestions = async (id) => {
    let conn = await getConnection();
    const resultHandler = (err, result, fields, resolve) => {
        if (err) {
            console.log('dbDeleteQuestion: connection error: ' + err)
            return;
        }
        console.log('dbDeleteQuestion: connection successful');
        resolve( 1);   
    }
    try {
        return new Promise( (resolve, reject) => {
            let sql = `DELETE FROM QUESTIONS WHERE UID='${id}'`;
            console.log( 'dbDeleteQuestion: sql='+sql);
            conn.query( sql, (err, result, fields) => {
                resultHandler( err, result, fields, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbDeleteQuestion: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise( (resolve, reject) => {resolve(0)})
}
 
/* export const dbUpdateQuestions = async (user) => {
    var user;
    let conn = await getConnection();
    const resultHandler = (err, result, fields, resolve) => {
        if (err) {
            console.log('dbUpdateUser: connection error: ' + err)
            return;
        }
        console.log('dbUpdateUser: connection successful');
        resolve( 1);   
    }
    try {
        return new Promise( (resolve, reject) => {
            let sql = `UPDATE USERS SET FNAME='${user.fname}',LNAME='${user.lname}' WHERE UID='${user.id}'`;
            console.log( 'dbUpdateUser: sql='+sql);
            conn.query( sql, (err, result, fields) => {
                resultHandler( err, result, fields, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbUpdateUser: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise( (resolve, reject) => {resolve(0)})
} */

/* export const dbQueryUser = async (id) => {
    var user;
    let conn = await getConnection();
    const resultHandler = (err, result, fields, resolve) => {
        if (err) {
            console.log('dbQueryUser: connection error: ' + err)
            return;
        }
        console.log('dbQueryUser: connection successful');
        let row = result[0];
        let user = { "id" : row["UID"], "fname": row["FNAME"], "lname": row["LNAME"]}
        console.log("user="+JSON.stringify(user))
        resolve( user);   
    }
    try {
        return new Promise( (resolve, reject) => {
            let sql = `SELECT UID, FNAME, LNAME FROM USERS WHERE UID='${id}'`;
            console.log( 'dbQueryUser: sql='+sql);
            conn.query( sql, (err, result, fields) => {
                resultHandler( err, result, fields, resolve)
            })
        })
    }
    catch (err) {
        console.log('dbQueryUser: caught error: ' + err)
    }
    finally {
        if (conn) conn.end();
    }
    return new Promise( (resolve, reject) => {resolve({})})
} */
