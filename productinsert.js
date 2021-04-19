const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."RS_product"("sup_ID", prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
const data = [1,'ODM Gear',1000];

pool.query(sql,data,(err,res)=>{
	if(err){
		console.log(err.stack);
	} else {	
		console.log(res.rows[0]);
	}
});


pool.end();
