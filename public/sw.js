/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "elements/detail-view.js",
    "revision": "74cb8d634cfab3dc639dbc6172dc45fe"
  },
  {
    "url": "elements/list-view.js",
    "revision": "c67ff3c519e7026524e99fa46e72ee65"
  },
  {
    "url": "elements/my-app.js",
    "revision": "d9af9bab416af4ec3859c634a05734f5"
  },
  {
    "url": "favicon.ico",
    "revision": "25ba468ed4ce64ffbd05c18ec78a63a4"
  },
  {
    "url": "index.html",
    "revision": "9d20130d1f253497fc4f1b3c8ea7edd8"
  },
  {
    "url": "style.css",
    "revision": "136144651ad43b738bee8feeaef6dd93"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("index.html");

workbox.routing.registerRoute("//data/.*/", workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/https:\/\/prpl-ce-firebase\.firebaseapp\.com\/images\//, workbox.strategies.cacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
