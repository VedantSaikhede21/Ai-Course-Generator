/** @type { import("drizzle-kit").Config } */
module.exports = {
  schema: "./configs/schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_URL,
  },
};