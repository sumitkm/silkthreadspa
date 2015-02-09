define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {
    ko.components.register('greeter', { require: 'App/components/greeter/greeting' });
    ko.components.register('tree', { require: 'App/components/tree/tree' });
    ko.components.register('tree-node', { require: 'App/components/tree-node/tree-node' });

    ko.components.register('home', { require: 'App/pages/home/home' });
    ko.components.register('samples', { require: 'App/pages/samples/samples' });
    ko.components.register('docs', { require: 'App/pages/docs/docs' });

    ko.components.register('settings', {
        template: { require: 'text!App/pages/settings/settings.html' }
    });
    ko.applyBindings({ route: router.currentRoute });
});