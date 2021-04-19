const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."RS_purchaseorder" SET po_date = $1 WHERE "po_ID" = 4 RETURNING *';
const data = ['04/19/2021'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();