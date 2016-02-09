namespace FSharpApp

open Owin
open Microsoft.Owin
open Gluon

type Startup() =
    member x.Configuration(app: IAppBuilder) =
        app.MapGluon() |> ignore

[<assembly: OwinStartup(typeof<Startup>)>]
do ()
