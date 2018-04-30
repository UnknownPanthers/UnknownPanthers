module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: [
                    "./scripts/**/*.js",
                    "./index.html",
                    "./styles/**/*.css",
                    "!node_modules/**/*.js"
                ],
                tasks: ["eslint", "uglify", "browserify", "copy"],
                options: {
                    spawn: false,
                },
            }
        },
        eslint: {
            src: [
                "./scripts/**/*.js",
                "!node_modules/**/*.js"
            ]
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true,
                    paths: ["./scripts"],
                }
            },
            dist: {
                files: {
                    "../dist/bundle.js": ["scripts/**/*.js"]
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { expand: true, src: ["index.html"], dest: "../dist/", filter: "isFile" },
                    { expand: true, src: ["styles/*.css"], dest: "../dist/", filter: "isFile" },
                ]
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "../dist",
                    src: "bundle.js",
                    dest: "../dist",
                    ext: ".min.js"
                }]
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify-es");

    // Default task(s).
    grunt.registerTask("default", ["eslint", "browserify", "copy", "uglify", "watch"]);
};