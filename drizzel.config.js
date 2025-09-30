/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/Schema.jsx",      // Path to your schema definition file
  dialect: 'postgresql',      // Database type (PostgreSQL in this case)
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_URL,  // Database URL is taken from environment variable
  },
};
