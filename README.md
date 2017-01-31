# osmtile2bound
This package converts passed OSM slippy tile request values to a WGS84 [bound object](https://www.npmjs.com/package/geobound-object).
This is done by following the suggestions in the 
[OSM Wiki](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames).

## Installation
Use standard npm installation

```shell
npm install --save osmtile2bound
```

## Usage
Pass the three necessary values (x, y and z) to the function and receive a
[Bound object](https://www.npmjs.com/package/geobound-object)

```js
var tile2bound = require('osmtile2bound');

// get WGS84 bounds for "http://c.tile.openstreetmap.org/18/139507/90949.png"
tile2bound(139507, 90949, 18);

// output:
// Bound object with getter methods like getSouth or getNorthEast
```

### Alternative usage
There are two different options how to use the package.

#### URL
You can also pass a complete URL to the constructor and let the package do the
work of parsing:

```js
tile2bound("http://c.tile.openstreetmap.org/18/139507/90949.png");
```

#### TileObject
Pass an object that describes a tile (known from [bound2osmtile](https://www.npmjs.com/package/bound2osmtile)). 
Don't miss the valid = true here...

```js
tile2bound({
    valid : true,
    x : 139507,
    y : 90949,
    z : 18
});
```

## ChangeLog
- 0.2.0
Removed old bound structure and replaced it by a more usable Bound object:
```js
osmtile2bound(139507, 90949, 18).getNorthWest();
// [ 11.583709716796875, 48.16150547016801 ]
```

To return the old structure with the new version, you have to pass an option:

```js
osmtile2bound(139507, 90949, 18, {
    oldBoundStyle : true
});

[ [ 11.583709716796875, 48.16150547016801 ],
  [ 11.5850830078125, 48.16150547016801 ],
  [ 11.5850830078125, 48.1605894313262 ],
  [ 11.583709716796875, 48.1605894313262 ] ]
```

Please note that this option will be removed in 0.3. Sorry for the inconvenience.

## Contribute
Feel free to add issues or pull requests. I'm glad for every kind of feedback!