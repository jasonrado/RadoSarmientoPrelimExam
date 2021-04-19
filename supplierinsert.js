const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."RS_supplier"(sup_name,sup_location) VALUES ($1,$2) RETURNING *';
const data = ['Azumabito','Japan'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();
