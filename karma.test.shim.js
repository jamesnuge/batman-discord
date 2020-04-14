Error.stackTraceLimit = Infinity;

var appContext = require.context('./src', true, /\.spec\.tsx?$/);
appContext.keys().forEach(appContext);
