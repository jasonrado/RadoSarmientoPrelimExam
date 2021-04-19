const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."RS_lineitem" SET li_date = $1 WHERE "po_ID" = 1 RETURNING *';
const data = ['04/20/2021'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});	


pool.end();