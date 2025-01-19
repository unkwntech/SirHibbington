module.exports = {
    apps: [
        {
            name: "SirHibbington",
            script: "main.js",
            time: true,
            instances: 1,
            autorestart: true,
            max_restarts: 50,
            watch: false,
            max_memory_restart: "1G",
        },
    ],
    deploy: {
        production: {
            user: "github",
            host: "ibns.tech",
            key: "deploy.key",
            ref: "origin/main",
            repo: "https://github.com/unkwntech/SirHibbington.git",
            path: "/var/projects/SirHibbington-backend-prod/",
            "post-deploy":
                "npm i && pm2 reload ecosystem.config.js --env production && pm2 save",
            env: {
                NODE_ENV: "production",
            },
        },
    },
};
