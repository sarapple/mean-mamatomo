// require the controller to route url requests to
var users 	= require('./../server/controllers/users.js'),
    session = require('express-session');
module.exports = function Routes(app){
    app.get 	('/',          		function(req,res)  { 	if(req.session.user_id)	{ users.joined(req,res)} 
    														else 					{ users.index(req,res) } 				});
    app.get 	('/users',          function(req,res)  { 	if(req.session.user_id)	{ console.log('session exists'); res.send(req.session.username)} 
    														else 					{ console.log('session does not exist'); res.send("")} 	                    });
    app.post 	('/users', 			function(req, res) { 	users.create(	req,res, 
    																		(function(id, username){ 
    																			req.session.user_id = id; 
    																			req.session.username = username;	
    																		}))												});
};
