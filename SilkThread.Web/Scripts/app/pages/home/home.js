define(["knockout", "text!./home.html"], function (ko, homeTemplate) {
    function homeViewModel(params) {
        var self = this;
        self.title = ko.observable('SilkThread - Yet another SPA Framework');
        return self;
    }
    return { viewModel: homeViewModel, template: homeTemplate };
});