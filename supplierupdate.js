const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."RS_supplier" SET sup_name = $1 WHERE "sup_ID" = 1 RETURNING *';
const data = ['Military'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();