var profile = (function(){

    return {

        basePath: "./src/main/webapp/js",
        releaseDir: "../",
        releaseName: "build",
        action: "clean,release",
        layerOptimize: "closure",
        optimize: "closure",
        cssOptimize: "comments",
        mini: true,
        stripConsole: "normal",
        selectorEngine: "acme",
        includeLocales: 'en-us',


        defaultConfig: {
            hasCache:{
                "dojo-built": 1,
                "dojo-loader": 1,
                "dom": 1,
                "host-browser": 1,
                "config-selectorEngine": "lite"
            },
            async: 1
        },

        staticHasFeatures: {
            // The trace & log APIs are used for debugging the loader, so we do not need them in the build.
            'dojo-trace-api': 0,
            'dojo-log-api': 0,

            // This causes normally private loader data to be exposed for debugging. In a release build, we do not need
            // that either.
            'dojo-publish-privates': 0,

            // This application is pure AMD, so get rid of the legacy loader.
            'dojo-sync-loader': 0,

            // `dojo-xhr-factory` relies on `dojo-sync-loader`, which we have removed.
            'dojo-xhr-factory': 0,

            // We are not loading tests in production, so we can get rid of some test sniffing code.
            'dojo-test-sniff': 0
        },

        packages:[
            {name: "dojo",  location: "dojo"},
            {name: "dijit", location: "dijit" },
            {name: "dojox", location: "dojox"},
            {name: "app",   location: "app"}
        ],

        layers: {
            "dojo/dojo": {
                include: ["dojo/i18n","dojo/domReady","app/main","app/run","app/HomePage"],
                customBase: true,
                boot: true
            }
        }
    };

})();
