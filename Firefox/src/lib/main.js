var cm = require("sdk/context-menu");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var paused = false; // Global sentinel value

cm.Item({
    label: "Pause Scrolling",
    context: cm.PageContext(),
    contentScriptFile: self.data.url("pause.js")
});

cm.Item({
    label: "Resume Scrolling",
    context: cm.PageContext(),
    contentScriptFile: self.data.url("resume.js")
});
