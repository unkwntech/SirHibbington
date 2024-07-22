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
      host: "192.168.1.203",
      path: "/home/achapman/projects/SirHibbington/",
      repo: "git@github.com:unkwntech/sirhibbington.git",
      ref: "origin/main",
      key: "~/.ssh/id_ed25519",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js; rm -rf /home/achapman/projects/SirHibbington/source",
    },
  },
};
