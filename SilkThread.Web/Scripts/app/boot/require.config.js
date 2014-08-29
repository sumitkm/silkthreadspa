var require = {
    baseUrl: "/Scripts/",
    paths: {
        "bootstrap": "libs/bootstrap/bootstrap",
        "historyjs": "libs/history/native.history",
        "crossroads": "libs/crossroads/crossroads",
        "jquery": "libs/jquery/jquery-1.9.0",
        "knockout": "libs/knockout/knockout-3.2.0beta.debug",
        "knockout-projections": "libs/knockout/knockout-projections.min",
        "signals": "libs/crossroads/signals",
        //"hasher": "Scripts/crossroads/hasher",
        "text": "libs/require/text"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
}