const pool = require("./db");
lastmessage = "";
pool.query('SELECT "po_date","po_description" FROM "PrelimExam"."RS_purchaseorder" WHERE "cust_ID" = 1', (err, res) => {
	try {	
		const finalmessage = console.log(res.rows[0].po_date,res.rows[0].po_description);
		const finalmessage2 = console.log(res.rows[1].po_date,res.rows[1].po_description);
		const finalmessage3 = console.log(res.rows[2].po_date,res.rows[2].po_description);
        lastmessage = finalmessage + finalmessage2 + finalmessage3;
	} catch (err) {
		console.error(err.message);
	}
});
pool.query('SELECT "cust_name","cust_address" FROM "PrelimExam"."RS_customer" WHERE "cust_ID" = 1', (err, res) => {
	try {
		const finalmessage2 = console.log(res.rows[0].cust_name,res.rows[0].cust_address);
        lastmessage = lastmessage + finalmessage2;
	} catch (err) {
		console.error(err.message);
	}
});
pool.query('SELECT "sup_name","sup_location" FROM "PrelimExam"."RS_supplier" WHERE "sup_ID" = 4', (err, res) => {
	try {
		const finalmessage3 = console.log(res.rows[0].sup_name,res.rows[0].sup_location);
        lastmessage = lastmessage + finalmessage3;
	} catch (err) {
		console.error(err.message);
	}
});
console.log(lastmessage)


pool.end();