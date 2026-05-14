module.exports = {
  apps: [
    {
      name: '3admin-panel-dev',
      script: 'node_modules/vite/bin/vite.js',
      args: '',
      env: {
        NODE_ENV: 'development',
      },
      // Vite handles its own watching and HMR, so we disable PM2 watch
      // to prevent full process restarts on every file change.
      watch: false,
      autorestart: true,
      log_file: './logs/dev.log',
      merge_logs: true,
      time: false,
    },
  ],
};
