var Api;
(function (Api) {
    var C1 = (function () {
        function C1(Item) {
            this.Item = Item;
        }
        C1.prototype.tag = function () { return "C1"; };
        C1.prototype.toJSON = function () { return Gluon.Internals.toJSON("Api.C1_C2_C3", this); };
        return C1;
    }());
    Api.C1 = C1;
    var C3 = (function () {
        function C3(Item) {
            this.Item = Item;
        }
        C3.prototype.tag = function () { return "C3"; };
        C3.prototype.toJSON = function () { return Gluon.Internals.toJSON("Api.C1_C2_C3", this); };
        return C3;
    }());
    Api.C3 = C3;
    var C2 = (function () {
        function C2(Item) {
            this.Item = Item;
        }
        C2.prototype.tag = function () { return "C2"; };
        C2.prototype.toJSON = function () { return Gluon.Internals.toJSON("Api.C1_C2_C3", this); };
        return C2;
    }());
    Api.C2 = C2;
    Api.ping = Gluon.Internals.remoteMethod("Api.ping");
    Api.incr = Gluon.Internals.remoteMethod("Api.incr");
    Api.getSimple = Gluon.Internals.remoteMethod("Api.getSimple");
    Api.error = Gluon.Internals.remoteMethod("Api.error");
    Api.testC = Gluon.Internals.remoteMethod("Api.testC");
})(Api || (Api = {}));
var Api;
(function (Api) {
    var C1_C2_C3;
    (function (C1_C2_C3) {
        function fromJSON(json) {
            return Gluon.Internals.fromJSON("Api.C1_C2_C3", json);
        }
        C1_C2_C3.fromJSON = fromJSON;
        function match(value, cont) {
            if (value instanceof Api.C1) {
                return cont.C1(value.Item);
            }
            else if (value instanceof Api.C3) {
                return cont.C3(value.Item);
            }
            else if (value instanceof Api.C2) {
                return cont.C2(value.Item);
            }
            else {
                throw new Error("match failed");
            }
        }
        C1_C2_C3.match = match;
    })(C1_C2_C3 = Api.C1_C2_C3 || (Api.C1_C2_C3 = {}));
})(Api || (Api = {}));
Gluon.Internals.registerActivators({
    "Api.C1": function (a) { return new Api.C1(a); },
    "Api.C3": function (a) { return new Api.C3(a); },
    "Api.C2": function (a) { return new Api.C2(a); }
});
Gluon.Internals.registerService({ "Methods": [{ "CallingConvention": ["HttpCallingConvention", ["Post"], "Api/ping"], "MethodName": "Api.ping", "MethodParameters": [], "MethodReturnType": null }, { "CallingConvention": ["HttpCallingConvention", ["Post"], "Api/incr"], "MethodName": "Api.incr", "MethodParameters": [{ "ParameterName": "x", "ParameterType": ["IntType"] }], "MethodReturnType": [["IntType"]] }, { "CallingConvention": ["HttpCallingConvention", ["Get"], "Api/getSimple"], "MethodName": "Api.getSimple", "MethodParameters": [], "MethodReturnType": [["StringType"]] }, { "CallingConvention": ["HttpCallingConvention", ["Get"], "Api/error"], "MethodName": "Api.error", "MethodParameters": [], "MethodReturnType": null }, { "CallingConvention": ["HttpCallingConvention", ["Get"], "Api/testC"], "MethodName": "Api.testC", "MethodParameters": [{ "ParameterName": "i", "ParameterType": ["IntType"] }], "MethodReturnType": [["TypeReference", "Api.C1_C2_C3"]] }], "TypeDefinitions": [["DefineUnion", { "UnionName": "Api.C1_C2_C3", "UnionCases": [{ "CaseName": "C1", "CaseFields": [{ "FieldName": "Item", "FieldType": ["StringType"] }] }, { "CaseName": "C3", "CaseFields": [{ "FieldName": "Item", "FieldType": ["StringType"] }] }, { "CaseName": "C2", "CaseFields": [{ "FieldName": "Item", "FieldType": ["ListType", ["StringType"]] }] }] }]] });
