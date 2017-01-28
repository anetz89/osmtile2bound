# osmtile2bound
This package converts passed OSM slippy tile request values to a WGS84 bounds object.
This is done by following the suggestions in the 
[OSM Wiki](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames).

## Installation
npm install --save osmtile2bound

## Usage
Pass the three necessary values (x, y and z) to the function.

```js
var tile2bound = require('osmtile2bound');

// http://c.tile.openstreetmap.org/18/139507/90949.png
console.log(tile2bound(139507, 90949, 18));

// output:
// [ [ 11.583709716796875, 48.16150547016801 ],
//   [ 11.5850830078125, 48.16150547016801 ],
//   [ 11.5850830078125, 48.1605894313262 ],
//   [ 11.583709716796875, 48.1605894313262 ] ]
```

## Further work
- Allow the complete url link and parse the relevant parameters
- add options, to allow a different bound output (like L.LatLngBounds)
- add tests

## Contribute
Feel free to add issues or pull requests. I'm glad for every kind of feedback!