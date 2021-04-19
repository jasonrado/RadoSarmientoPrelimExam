const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."RS_lineitem"("po_ID", "prod_ID", li_date, li_description) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [1,1,'04/19/2021','test2'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();
