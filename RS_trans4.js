const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."RS_supplier" SET sup_name = $1, sup_location = $2 WHERE "sup_ID" = 1 RETURNING *';
const data = ['Schools Supply','Philippines'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();