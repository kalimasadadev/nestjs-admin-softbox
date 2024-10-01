export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
        db_user: process.env.DATABASE_USER,
        db_pass: process.env.DATABASE_PASS,
        db_name: process.env.DATABASE_NAME
    }
})