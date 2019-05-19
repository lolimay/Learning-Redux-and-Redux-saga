# Async Actions
Two crucial moments when calling an asynchronous API: 
> 1. the moment you start the call
> 2. the moment when you receive an answer

Each of these two moments usually require a change (dispatch a normal action that will be processed by reducers synchronously) in the application state.