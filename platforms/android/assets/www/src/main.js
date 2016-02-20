define(["require", "exports", 'app/Application'], function (require, exports, Application) {
    require(['require_config'], function () {
        var App = new Application();
        App.initialize();
    });
});
//# sourceMappingURL=main.js.map