const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."RS_customer" SET cust_address = $1 WHERE "cust_ID" = 1 RETURNING *';
const data = ['Marley'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();