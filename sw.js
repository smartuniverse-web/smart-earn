self.addEventListener('install', event => {
    console.log('Smart Earn Service Worker installing.');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Smart Earn Service Worker activated.');
});

self.addEventListener('fetch', event => {
    // यह ऐप को फ़ास्ट और स्मूथ चलाने में मदद करता है
});