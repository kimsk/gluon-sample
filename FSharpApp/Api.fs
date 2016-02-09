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
