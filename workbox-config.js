module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{js,ico,html,css}"
  ],
  "swDest": "public/sw.js",

  "skipWaiting": true,
  "clientsClaim": true,
  "navigateFallback": "index.html",
  "runtimeCaching": [
    {
      "urlPattern": "/\/data\/.*/",
      "handler": "networkFirst"
    },
    {
      "urlPattern": /https:\/\/prpl-ce-firebase\.firebaseapp\.com\/images\//,
      "handler": "cacheFirst",
      "options": {
        "cacheableResponse": {
          "statuses": [0, 200]
        }
      }
    }
  ]
};