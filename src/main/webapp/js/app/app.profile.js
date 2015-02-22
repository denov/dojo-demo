var profile = (function () {

    var miniExcludes = {
                'app/LICENSE': 1,
                'app/README.md': 1,
                'app/package.js': 1,
                'app/package.json': 1
            },
            isTestRe = /\/test\//;

    return {

        resourceTags: {

            test: function (filename, mid) {
                return isTestRe.test(filename);
            },

            miniExclude: function (filename, mid) {
                return /\/(?:test|example|doc)\//.test(filename) || mid in miniExcludes;
            },

            amd: function (filename, mid) {
                return /\.js$/.test(filename);
            }

        }

    };
})();