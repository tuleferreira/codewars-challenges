/* https://www.codewars.com/kata/56dd9b84fe5754786f0014f7 */

Array.prototype.filter = function(callback, context) {
    arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};
