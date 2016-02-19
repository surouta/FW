define(["require", "exports"], function (require, exports) {
    var ApplicationBase = (function () {
        function ApplicationBase() {
        }
        ApplicationBase.prototype.initialize = function () {
            var initializing = Q.defer();
            initializing.resolve(null);
            $(document.body).append($('<div>').text('iniia'));
            return initializing.promise;
        };
        return ApplicationBase;
    })();
    return ApplicationBase;
});
//# sourceMappingURL=../../../../src/fw/ApplicationBase.js.map