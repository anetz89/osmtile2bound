 (function() {
    'use strict';

    const
        tile2bound = require('./index.js'),
        expect = function(bound, values) {
            if (!bound.getNorth() === values[0]) {
                throw new Error('expected north value of ' + values[0] + ', got ' + bound.getNorth());
            }
            if (!bound.getEast() === values[1]) {
                throw new Error('expected east value of ' + values[1] + ', got ' + bound.getEast());
            }
            if (!bound.getSouth() === values[2]) {
                throw new Error('expected south value of ' + values[2] + ', got ' + bound.getSouth());
            }
            if (!bound.getWest() === values[3]) {
                throw new Error('expected west value of ' + values[3] + ', got ' + bound.getWest());
            }
        };

    expect(tile2bound(139507, 90949, 18), 
        [11.583709716796875, 48.1605894313262, 11.5850830078125, 48.16150547016801]);

    expect(tile2bound('http://c.tile.openstreetmap.org/18/139507/90949.png'), 
        [11.583709716796875, 48.1605894313262, 11.5850830078125, 48.16150547016801]);

    expect(tile2bound({
            valid : true,
            x : 139507,
            y : 90949,
            z : 18
        }), [11.583709716796875, 48.1605894313262, 11.5850830078125, 48.16150547016801]);


    console.log('OK');

}());
