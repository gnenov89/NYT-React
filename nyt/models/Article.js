var mongoose = require("mongoose");

// create a schema classs 
var Schema = mongoose.Schema;

// create article Schema
var ArticleSchema = new Schema ({
	title:{
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		date: Date
	}
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;