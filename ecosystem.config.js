module.exports = {
  apps: [
    {
      name: "SirHibbington",
      script: "main.js"
    },
  ],
  deploy: {
    production: {
      user: "achapman",
      host: "64.251.22.21",
      path: "/home/achapman/projects/SirHibbington/",
      repo: "git@github.com:unkwntech/sirhibbington.git",
      ref: "origin/main",
      key: "~/.ssh/id_ed25519",
      "post-deploy": "npm i; pm2 reload SirHibbington; rm -rf /home/achapman/projects/SirHibbington/source/*",
    },
  },
};
