var appRouter = function (app) {
  app.get("/", function(req, res) {


  	const mongoRepository = require('../repository/mongoRepository.js');


  	var d= new Date();
  	var dateUTC=Date.UTC(d.getYear(),d.getMonth()+1,d.getDate());

  	mongoRepository.getEventsByDay(dateUTC,
  	function(itens){


  	},function(){

  	});


    res.status(200).send("Welcome to our restful API");
  });
}

module.exports = appRouter;