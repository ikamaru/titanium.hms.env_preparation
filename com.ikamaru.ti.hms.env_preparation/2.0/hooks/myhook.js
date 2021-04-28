
var helper = require('../libs/helper');

exports.init = function (logger, config, cli, nodeappc) {
    
    cli.on("build.android.copyResource", function (data) {
        
        helper.modifyRootBuildGradle();
        helper.modifyAppBuildGradle();
    });
    cli.on("build.post.compile", function () {
        helper.copyJsonFile();
    });
};