module.exports = {
    type: "theme",

    gulpTasks: function (gulp, project, conf, helper) {
        conf.themeName = "default";

        conf.cssSources = {
            src: [
                "src/components/**/*.css",
                "src/css/**/*.css"
            ],
            targetDir: "css",
            targetFilename: "theme"
        };

        conf.packageSources = [
            {
                src: "src/components/img/**/*.*",
                targetDir: "img"
            },
            {
                src: "src/img/**/*.*",
                targetDir: "img"
            },
            {
                src: "src/fonts/**/*.*",
                targetDir: "fonts"
            }
        ];

        conf.packageDir = require("path").join(project.version, conf.themeName);
    }

};