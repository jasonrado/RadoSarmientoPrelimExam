const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."RS_product" SET prod_name = $1 WHERE "prod_ID" = 1 RETURNING *';
const data = ['ThunderSpear'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();