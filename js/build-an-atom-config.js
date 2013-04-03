// Copyright 2002-2012, University of Colorado

// RequireJS configuration file for Build an Atom.
require.config(
    {
      deps: ['build-an-atom-main'],

      paths: {
        // local contrib dependencies
        i18n: "../contrib/i18n-2.0.2",
        tpl: "../contrib/tpl-0.2",
        lodash: "../contrib/lodash-1.0.1",
        underscore: "../contrib/underscore-1.4.2",

        // PhET's common code, uppercase names to identify them in require imports
        PHETCOMMON: "../../phetcommon/js",

        // Scenery and its dependencies
        ASSERT: '../../assert/js',
        DOT: '../../dot/js',
        KITE: '../../kite/js',
        PHET_CORE: '../../phet-core/js',
        SCENERY: '../../scenery/js',
        SCENERY_PHET: '../../scenery-phet/js',
        FORT: '../../fort/js'
      },

      shim: {
        lodash: { exports: "_" },
        underscore: { exports: "_" }
      },

      urlArgs: new Date().getTime()  // cache buster to make browser refresh load all included scripts

    } );
