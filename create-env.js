const fs = require('fs');
fs.writeFileSync('./.env', `GITHUB_ACCESS_TOKEN=${process.env.GITHUB_ACCESS_TOKEN}\n`);
