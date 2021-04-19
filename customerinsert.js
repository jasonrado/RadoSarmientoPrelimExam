const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."RS_customer"(cust_name,cust_address) VALUES ($1,$2) RETURNING *';
const data = ['Renier Braus','Paradis'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();
