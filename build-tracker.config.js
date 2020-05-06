const withPostgres = require('@build-tracker/plugin-with-postgres').default;
const { BudgetLevel, BudgetType } = require('@build-tracker/types');

module.exports = withPostgres({
  artifacts: {
    // https://buildtracker.dev/docs/budgets
    budgets: {
      '*': [
        {
          level: BudgetLevel.ERROR,
          sizeKey: 'stat',
          type: BudgetType.PERCENT_DELTA,
          maximum: 0.05,
        },
      ],
      "dist/extension-chrome/scripts/popup-bundle.js": [{
        level: BudgetLevel.WARN,
        sizeKey: 'stat',
        type: BudgetType.SIZE,
        maximum: 15000,
      }],
      "dist/lightrider/lighthouse-lr-bundle.js": [{
        level: BudgetLevel.WARN,
        sizeKey: 'stat',
        type: BudgetType.SIZE,
        maximum: 1500000,
      }],
      "dist/viewer/src/viewer.js": [{
        level: BudgetLevel.WARN,
        sizeKey: 'stat',
        type: BudgetType.SIZE,
        maximum: 65000,
      }],
      "dist/lighthouse-dt-bundle.js": [{
        level: BudgetLevel.WARN,
        sizeKey: 'stat',
        type: BudgetType.SIZE,
        maximum: 470000,
      }],
      "dist/lightrider/report-generator-bundle.js": [{
        level: BudgetLevel.WARN,
        sizeKey: 'stat',
        type: BudgetType.SIZE,
        maximum: 50000,
      }]
    },
  },
  defaultBranch: process.env.BT_DEFAULT_BRANCH,
  pg: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
  port: process.env.PORT,
  url: process.env.BT_URL,
});
