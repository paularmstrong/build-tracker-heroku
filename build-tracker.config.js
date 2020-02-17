const withPostgres = require('@build-tracker/plugin-with-postgres').default;

module.exports = withPostgres({
  artifacts: {},
  defaultBranch: process.env.BT_DEFAULT_BRANCH,
  pg: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  },
  port: process.env.PORT,
  url: process.env.BT_URL
});
