 module Api {
  
    export var ping = Gluon.Internals.remoteMethod<(() => JQueryPromise<void>)>("Api.ping");
    export var incr = Gluon.Internals.remoteMethod<((x:  number) => JQueryPromise<number>)>("Api.incr");
    export var getSimple = Gluon.Internals.remoteMethod<(() => JQueryPromise<string>)>("Api.getSimple");
    export var error = Gluon.Internals.remoteMethod<(() => JQueryPromise<void>)>("Api.error");
}
Gluon.Internals.registerActivators({});
Gluon.Internals.registerService({"Methods":[{"CallingConvention":["HttpCallingConvention",["Post"],"Api/ping"],"MethodName":"Api.ping","MethodParameters":[],"MethodReturnType":null},{"CallingConvention":["HttpCallingConvention",["Post"],"Api/incr"],"MethodName":"Api.incr","MethodParameters":[{"ParameterName":"x","ParameterType":["IntType"]}],"MethodReturnType":[["IntType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"Api/getSimple"],"MethodName":"Api.getSimple","MethodParameters":[],"MethodReturnType":[["StringType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"Api/error"],"MethodName":"Api.error","MethodParameters":[],"MethodReturnType":null}],"TypeDefinitions":[]});
