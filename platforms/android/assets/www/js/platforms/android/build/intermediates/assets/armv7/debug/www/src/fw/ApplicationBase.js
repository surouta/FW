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
//# sourceMappingURL=../../../../../../../../../../../../platforms/android/build/intermediates/assets/armv7/debug/www/src/fw/ApplicationBase.js.map