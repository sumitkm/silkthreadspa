define(["knockout", "text!./docs.html"], function (ko, docsTemplate) {
    function docsViewModel(params) {
        var self = this;
        self.title = ko.observable('SilkThread - Yet another SPA Framework');
        self.data ={
            title: "Documentation Home",
            nodes: [
                {
                    title: "Node 0",
                    nodes: [
                    {
                        title: "Node 0-1",
                        expanded: false,
                        nodes: [
                            {
                                title: "Node 0-1-0"
                            },
                            {
                                title: "Node 0-1-1"
                            }
                        ]
                    },
                    {
                        title: "Node 0-2"
                    }]
                },
                {
                    title: "Node 1",
                    expanded: false,
                    nodes: [
                    {
                        title: "Node 1-1"
                    },
                    {
                        title: "Node 1-2"
                    }]
                },
                {
                    title: "Node 2"
                }]
        };
        return self;
    }
    return { viewModel: docsViewModel, template: docsTemplate };
});