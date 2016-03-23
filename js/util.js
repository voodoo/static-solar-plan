// shortcut for cnosole log
var L = console.log.bind(console);


Array.prototype.uniq = function() {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) == -1) {
            unique.push(this[i]);
        }
    }
    return unique;
}; 
