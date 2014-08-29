define(["knockout", "text!./home.html"], function (ko, homeTemplate) {
    function homeViewModel(params) {
        var self = this;
        self.title = ko.observable('SilkThread - Yet another SPA Framework');
        self.guests = ko.observableArray([]);
        self.guests.push({ guestName: "Sumit" });
        self.guests.push({ guestName: "Optimus" });
        self.guests.push({ guestName: "Bumblebee" });
        return self;
    }
    return { viewModel: homeViewModel, template: homeTemplate };
});