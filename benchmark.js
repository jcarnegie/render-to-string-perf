require("jsx-require-extension");

var React             = require("react");
var Simple            = require("./simple.jsx");
var ParentSingleChild = require("./parent-single-child.jsx");
var ParentFiveChild   = require("./parent-five-child.jsx");
var ParentTenChild    = require("./parent-ten-child.jsx");
var Grandchildren     = require("./grandchildren.jsx");
var Hundred           = require("./hundred.jsx");
var Benchmark         = require("benchmark");
var suite             = new Benchmark.Suite;

var simple            = React.createFactory(Simple)();
var parentSingleChild = React.createFactory(ParentSingleChild)();
var parentFiveChild   = React.createFactory(ParentFiveChild)();
var parentTenChild    = React.createFactory(ParentTenChild)();
var grandchildren     = React.createFactory(Grandchildren)();
var hundred           = React.createFactory(Hundred)();

suite
    .add("simple", function() {
        React.renderToString(simple);
    })
    .add("parent-single-child", function() {
        React.renderToString(parentSingleChild);
    })
    .add("parent-five-child", function() {
        React.renderToString(parentFiveChild);
    })
    .add("parent-ten-child", function() {
        React.renderToString(parentTenChild);
    })
    .add("grandchildren", function() {
        React.renderToString(grandchildren);
    })
    .add("hundred", function() {
        React.renderToString(hundred);
    })
    // add listeners
    .on("cycle", function(event) {
      console.log(String(event.target));
    })
    .on("complete", function() {
      console.log("Fastest is " + this.filter("fastest").pluck("name"));
    })
    // run
    .run(true);