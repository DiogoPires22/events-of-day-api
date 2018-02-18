const mongoose = require('mongoose');

function connect(){
	mongoose.connect('mongodb://localhost/test');
}


module.exports={
	getEventsByDay: function(date){
		
	}
}