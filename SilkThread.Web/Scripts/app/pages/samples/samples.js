define(["knockout", "text!./samples.html"], function (ko, samplesTemplate) {
    function samplesViewModel(params) {
        var self = this;
        self.guests = ko.observableArray([]);
        self.guests.push({ guestName: "Sumit" });
        self.guests.push({ guestName: "Optimus" });
        self.guests.push({ guestName: "Bumblebee" });
    }
    return { viewModel: samplesViewModel, template: samplesTemplate };
});