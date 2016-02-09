/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="Gluon.d.ts" />
/// <reference path="FSharpApp.ts" />
jQuery(function () {
    console.log('start');
    var cli = new Gluon.Client();
    var ping = Api.ping(cli);
    var getSimple = Api.getSimple(cli);
    var incr = Api.incr(cli);
    ping().done(function () {
        console.log('ping..');
    });
    incr(1).then(function (x) {
        console.log('incr(1) = ', x);
    });
    incr(10).then(function (x) {
        console.log('incr(1) = ', x);
    });
    getSimple().then(function (str) {
        console.log(str);
    });
    Api.error(cli)()
        .then(function () {
        // should not get here
    })
        .fail(function (err) {
        console.error(err.status);
    });
});
