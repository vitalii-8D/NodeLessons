module.exports = {
    DB_NAME: process.env.DB_NAME || "auto_shop",
    DB_USER: process.env.DB_USER || "root",
    DB_PASS: process.env.DB_PASS || "root",

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'fordriversmail@gmail.com',
    ROOT_EMAIL_PASS: process.env.ROOT_EMAIL_PASS || 'driverpassword',
    FRONTEND_URL: process.env.FRONTEND_URL || 'https://www.youtube.com/',

    ACCESS_TOKEN_SECRET: "access-secret",
    REFRESH_TOKEN_SECRET: "refresh-secret",
}
