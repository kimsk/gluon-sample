var Api;
(function (Api) {
    Api.ping = Gluon.Internals.remoteMethod("Api.ping");
    Api.incr = Gluon.Internals.remoteMethod("Api.incr");
    Api.getSimple = Gluon.Internals.remoteMethod("Api.getSimple");
    Api.error = Gluon.Internals.remoteMethod("Api.error");
})(Api || (Api = {}));
Gluon.Internals.registerActivators({});
Gluon.Internals.registerService({ "Methods": [{ "CallingConvention": ["HttpCallingConvention", ["Post"], "Api/ping"], "MethodName": "Api.ping", "MethodParameters": [], "MethodReturnType": null }, { "CallingConvention": ["HttpCallingConvention", ["Post"], "Api/incr"], "MethodName": "Api.incr", "MethodParameters": [{ "ParameterName": "x", "ParameterType": ["IntType"] }], "MethodReturnType": [["IntType"]] }, { "CallingConvention": ["HttpCallingConvention", ["Get"], "Api/getSimple"], "MethodName": "Api.getSimple", "MethodParameters": [], "MethodReturnType": [["StringType"]] }, { "CallingConvention": ["HttpCallingConvention", ["Get"], "Api/error"], "MethodName": "Api.error", "MethodParameters": [], "MethodReturnType": null }], "TypeDefinitions": [] });
