const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."RS_purchaseorder"("sup_ID", "cust_ID", po_date, po_description) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [1,1,'04/18/2021','test1'];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();
