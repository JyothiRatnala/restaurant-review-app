let storedcache= 'restaurants';
let urlsToCache=[
'/',
'./css/styles.css',
'./js/dbhelper.js',
'./js/main.js',
'./js/restaurant_info.js',
'./data/restaurants.json',
'./img/1.jpg',
'./img/2.jpg',
'./img/3.jpg',
'./img/4.jpg',
'./img/5.jpg',
'./img/6.jpg',
'./img/7.jpg',
'./img/8.jpg',
'./img/9.jpg',
'./img/10.jpg'
];
self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(storedcache)
    .then(function(cache){
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    }));
});


self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.open(storedcache).then(function(cache){
      return cache.match(event.request).then(
        function(response){
          return response || fetch(event.request).
          then(function(response){
            cache.put(event.request,response.clone(
              ));
            return response;
          })
        })
    }))
})
