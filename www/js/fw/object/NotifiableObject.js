define(["require", "exports"], function (require, exports) {
    var NotifiableObject = (function () {
        function NotifiableObject(data) {
            this.attr = {};
            alert('a');
        }
        NotifiableObject.prototype.set = function (attributeName, value) {
            this.attr[attributeName] = value;
        };
        NotifiableObject.prototype.get = function (attributeName) {
            return this.attr[attributeName];
        };
        return NotifiableObject;
    })();
    return NotifiableObject;
});
//# sourceMappingURL=NotifiableObject.js.map