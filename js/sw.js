importScripts('/cache-polyfill.js');


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/About.html',
                '/css/styles.css',
                '/js/app.js',
                'images/Atom/Icon/Logo/WhiteLogo.svg',
                'images/Atom/Icon/Logo/BlackLogo.svg'
            ]);
        })
    );
});