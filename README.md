# ng2-start

Angular2 sample - Scotch School

## Run
```
npm start
```

## Installation
```
npm install
```

## Installation - step by step

- create index.html
```
touch index.html
```

- create package.json with defaults
```
npm init --yes
```

- Install lite-server
```
npm install --save-dev lite-server
```

- Create an npm script in package.json to start lite-server.
```
"scripts": {
  "lite": "lite-server"
}
```
- Install Typescript, typings (dev dependency)
```
npm install --save-dev typescript typings
```

- concurrently (dev dependency)
```
npm install --save-dev concurrently
```

- Install typings global
```
typings install dt~core-js dt~jasmine dt~node --save --global
```

- Edit tsconfig.json
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
```

- Install angular dependencies
```
npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save
```

- Install angular packages
```
npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save
```

- Edit systemjs.config.js
```
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
```

- Edit HTML head (Sample)
```
<head>
    <meta charset="UTF-8">
    <title>My Angular 2 App!</title>

    <!-- css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css">
    <style>body { padding: 50px 0; }</style>

    <!-- js -->
    <!-- load the dependencies -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>

    <!-- load our angular app with systemjs -->
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="systemjs.config.js"></script>
    <script>
        System.import('app').catch(function(err) { console.error(err); });
    </script>
</head>
```

- Edit package.json script
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
  "lite": "lite-server",
  "tsc": "tsc",
  "tsc:w": "tsc -w",
  "typings": "typings",
  "postinstall": "typings install"
},
```
