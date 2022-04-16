const mysql = require('mysql');
const mysqlConfig = require('./DBConfig').default;
const pool=mysql.createPool(mysqlConfig)

const query = (sql: string) => {
    return new Promise<any>((resolve, reject) => {
        pool.getConnection((error: any, connection: { query: (arg0: string, arg1: (error: any, results: any) => void) => void; release: () => void; }) => {
            if (error) {
                reject(error);
            } else {
                connection.query(sql, (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                    connection.release(); // 释放该链接
                });
            }
        });
    });
};
export default query