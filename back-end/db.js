const Pool = require("pg").Pool;

const Pool = new Pool ({
    user: "ep-silent-mouse-a1s1q88r-pooler",
    password: "npg_IA5uU6QFleiV",
    host: "localhost",
    port: 5432,
    database: "nzhome"
})

module.exports = Pool;