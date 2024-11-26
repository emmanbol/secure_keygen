const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const par = require('./pa2')
const fs = require('fs')//.promises
const path = require('path');

const app = express()

var corsOptions = {
	origin: 'http://localhost:3001'//set who can use this api domain
}

app.use(cors(corsOptions))
/*
app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", '*');
    next();
});*/
/*
const db = require('./app/models')
db.sequelize.sync()
//in devellopment, you may want to drop existing table and resync db, use
/*db.sequelize.sync({force: true}).then(()=>{
	console.log('Drop and re-sync db.')
})*/

//parse requests of content-type - application /json
app.use(bodyParser.json())
//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//let mrx = `<!`

//simple route
app.get("/", async(req, res, next) => {
	//res.json({message: 'welcome to sirbee app'})
    //res.send("whao, dis is good34")
	try{
		let kd = await par.kg()
		res.send(`<div style='margin: 40px; font-size: 25px'>${kd}</div>`)
		//res.json(kd)

		//console.log(kd)

		/*let ram = JSON.parse(JSON.stringify(kd))
		ram.forEach( dd => {
			console.log(`${dd.address} - ${dd.mnemonic}`)
		})*/
		
	}
	catch(err){
		next(err)
	}
	
})

app.get("/ddm", async(req, res) => {

	const filename = "filey.txt"
	const content = { "first":39, "second":"babanla nonsense" }

	const filePath1 = path.join(__dirname, "/mjk/lam56")
	const filePath = path.join(__dirname, "/mjk/lam56/", filename)

	try{
		if (!fs.existsSync(filePath1)) 
			fs.mkdirSync(filePath1, { recursive: true })
		
		const mmr = JSON.stringify(content)
		await fs.writeFileSync(filePath, mmr);
		res.send("write completed successfully")
	}
	catch(error){
		res.send(`Error happened: ${error}`)
	}
	
})


/*
app.use("*", (req, res)=>{
	res.send("not found")
})*/

//require("./app/routes/tutorial.routes")(app);


//set port, listen for requesets
const port = process.env.PORT || 9001;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})