const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save" , (req , res) => {
	const url = "mongodb+srv://sanskargawade85:ROitmZlCoBjPY7Hn@cluster0.y7yg1ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ; 
	const client = new MongoClient(url);
	const db = client.db("ss24june24");
	const coll = db.collection("student");
	const record = {"name" : req.body.name , "company" :  req.body.company , "package" : req.body.packages };
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));

});

app.listen(9000 , () => { console.log("Ready to serve @ 9000");});
