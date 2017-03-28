Package.describe({
    name: 'ohif:core',
    summary: 'OHIF core components, helpers and UI functions',
    version: '0.0.1'
});

Npm.depends({
    'simpl-schema': '0.2.3',
    'message-box': '0.0.2'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4');

    api.use('ecmascript');
    api.use('jquery');
    api.use('stylus');
    api.use('underscore');
    api.use('templating');
    api.use('reactive-var');

    api.use('twbs:bootstrap', 'client');
    api.use('peppelg:bootstrap-3-modal', 'client');

    // Router dependencies
    api.use('iron:router@1.0.13', 'client');

    // Component's library dependencies
    api.use('natestrauser:select2@4.0.1', 'client');

    // UI Styles
    api.addFiles([
        'client/ui/dimensional/dimensional.styl',
        'client/ui/resizable/resizable.styl',
        'client/components/bootstrap/dialog/bootstrap.styl',
        'client/components/bootstrap/dialog/loading.styl',
        'client/components/bootstrap/dialog/progress.styl',
        'client/components/bootstrap/dialog/unsavedChangesDialog.styl',
        'client/components/bootstrap/dropdown/dropdown.styl'
    ], 'client');

    api.mainModule('main.js', ['client', 'server']);

    // Client imports and routes
    api.addFiles('client/index.js', 'client');

    // Server imports and methods
    api.addFiles('server/index.js', 'server');

    // Client and server imports
    api.addFiles('both/index.js', ['client', 'server']);

});
