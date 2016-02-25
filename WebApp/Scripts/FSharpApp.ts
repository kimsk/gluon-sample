 module Api {
  
    export class C1 {
      
        constructor(public Item: string) { }
         tag(): string { return "C1";}
         toJSON(): any { return Gluon.Internals.toJSON("Api.C1_C2_C3", this);}
    }
    export class C3 {
      
        constructor(public Item: string) { }
         tag(): string { return "C3";}
         toJSON(): any { return Gluon.Internals.toJSON("Api.C1_C2_C3", this);}
    }
    export class C2 {
      
        constructor(public Item: string []) { }
         tag(): string { return "C2";}
         toJSON(): any { return Gluon.Internals.toJSON("Api.C1_C2_C3", this);}
    }
    export type C1_C2_C3 = C1 | C3 | C2;
    export var ping = Gluon.Internals.remoteMethod<(() => JQueryPromise<void>)>("Api.ping");
    export var incr = Gluon.Internals.remoteMethod<((x:  number) => JQueryPromise<number>)>("Api.incr");
    export var getSimple = Gluon.Internals.remoteMethod<(() => JQueryPromise<string>)>("Api.getSimple");
    export var error = Gluon.Internals.remoteMethod<(() => JQueryPromise<void>)>("Api.error");
    export var testC = Gluon.Internals.remoteMethod<((i:  number) => JQueryPromise<Api.C1_C2_C3>)>("Api.testC");
}
 module Api.C1_C2_C3 {
  
    export function fromJSON(json: any): C1_C2_C3 {
       return Gluon.Internals.fromJSON("Api.C1_C2_C3", json);
    }
    export function match<T>(value: Api.C1_C2_C3,
    cont: {
      C1: ((Item:  string) => T),
      C3: ((Item:  string) => T),
      C2: ((Item:  string []) => T)
    }): T {
      
        if (value instanceof C1) { return cont.C1(value.Item);}
        else if (value instanceof C3) { return cont.C3(value.Item);}
        else if (value instanceof C2) { return cont.C2(value.Item);} else {
           throw new Error("match failed");
        }
    }
}
Gluon.Internals.registerActivators({
  "Api.C1": (a) => new Api.C1(a),
  "Api.C3": (a) => new Api.C3(a),
  "Api.C2": (a) => new Api.C2(a)
});
Gluon.Internals.registerService({"Methods":[{"CallingConvention":["HttpCallingConvention",["Post"],"Api/ping"],"MethodName":"Api.ping","MethodParameters":[],"MethodReturnType":null},{"CallingConvention":["HttpCallingConvention",["Post"],"Api/incr"],"MethodName":"Api.incr","MethodParameters":[{"ParameterName":"x","ParameterType":["IntType"]}],"MethodReturnType":[["IntType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"Api/getSimple"],"MethodName":"Api.getSimple","MethodParameters":[],"MethodReturnType":[["StringType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"Api/error"],"MethodName":"Api.error","MethodParameters":[],"MethodReturnType":null},{"CallingConvention":["HttpCallingConvention",["Get"],"Api/testC"],"MethodName":"Api.testC","MethodParameters":[{"ParameterName":"i","ParameterType":["IntType"]}],"MethodReturnType":[["TypeReference","Api.C1_C2_C3"]]}],"TypeDefinitions":[["DefineUnion",{"UnionName":"Api.C1_C2_C3","UnionCases":[{"CaseName":"C1","CaseFields":[{"FieldName":"Item","FieldType":["StringType"]}]},{"CaseName":"C3","CaseFields":[{"FieldName":"Item","FieldType":["StringType"]}]},{"CaseName":"C2","CaseFields":[{"FieldName":"Item","FieldType":["ListType",["StringType"]]}]}]}]]});
