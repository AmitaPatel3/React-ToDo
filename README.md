//MOCK OBJECT FOR TODO

{ "name": "Learn React", 
"id": 1, 
"dueDate": 2.24.16,
"description": "self explanatory" 
 }

//MOCK API FOR TODO

{ "GET /todos": { "desc": "returns all lions", "response": "200 application/json", "data": [{}, {}, {}] },

"GET /todos/:id": { "desc": "returns one lion respresented by its id", "response": "200 application/json", "data": {} },

"POST /todos": { "desc": "create and returns a new lion uisng the posted object as the lion", "response": "201 application/json", "data": {} },

"PUT /todos/:id": { "desc": "updates and returns the matching lion with the posted update object", "response": "200 application/json", "data": {} },

"DELETE /todos/:id": { "desc": "deletes and returns the matching lion", "response": "200 application/json", "data": {} } }