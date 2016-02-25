module Api

open Gluon

[<Remote>] // default is POST
let ping () =
    async {
        return ()
    }

[<Remote>] 
let incr x = x + 1

[<Remote(Verb="GET")>]
let getSimple () = "SIMPLE"

[<Remote(Verb="GET")>]
let error ():unit = failwith "Error.."

type C1_C2_C3 =
    | C1 of string
    | C3 of string
    | C2 of string list

[<Remote(Verb="GET")>]
let testC i = 
    if i = 1 then
        C1("test")
    elif i = 2 then
        C2(["C2"])
    else
        C3("C3")