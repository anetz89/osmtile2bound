 (function() {
    'use strict';

    function tile2long(x, z) {
        return (x / Math.pow(2, z) * 360 - 180);
    }
    function tile2lat(y, z) {
        var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);

        return (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
    }

    module.exports = function(x, y, z) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        z = parseInt(z, 10);

        let nw = [tile2long(x, z), tile2lat(y, z)],
            se = [tile2long(x + 1, z), tile2lat(y + 1, z)];

        let bound = [nw, [se[0], nw[1]], se, [nw[0], se[1]]];

        return bound;
    }
}());
