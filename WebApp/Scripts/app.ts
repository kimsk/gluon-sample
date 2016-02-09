/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="Gluon.d.ts" />
/// <reference path="FSharpApp.ts" />

jQuery(() => {
    console.log('start');
    const cli = new Gluon.Client();

    const ping = Api.ping(cli);
    const getSimple = Api.getSimple(cli);
    const incr = Api.incr(cli);

    ping().done(() => {
        console.log('ping..');
    });

    incr(1).then(x => {
        console.log('incr(1) = ', x);
    });

    incr(10).then(x => {
        console.log('incr(1) = ', x);
    });

    getSimple().then(str => {
        console.log(str);
    });

    Api.error(cli)()
        .then(() => {
            // should not get here
        })
        .fail(err => {
            console.error(err.status);
        });
});