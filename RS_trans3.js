const pool = require("./db");
;(async () => {
  // note: we don't try/catch this because if connecting throws an exception
  // we don't need to dispose of the client (it will be undefined)
  const client = await pool.connect()
  try {
   
  
    //1st Order
    await client.query('BEGIN')
    await client.query('SAVEPOINT sp1')
    const customerorder1 = 'INSERT INTO "PrelimExam"."RS_purchaseorder"("sup_ID","cust_ID",po_date,po_description) VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
    const orderdata1 = [2,2,'04/18/2021','1st Order by Mikasa'];
    const prodid1 = await client.query(customerorder1,orderdata1);
    const lineitem1 = 'INSERT INTO "PrelimExam"."RS_lineitem"("po_ID","prod_ID",li_date,li_description) VALUES ($1,$2,$3,$4)';
    const linedata1 = [prodid1.rows[0].po_ID,2,'04/18/2121','1st Line Item by Mikasa']
    await client.query(lineitem1,linedata1)
    //2nd Order
    await client.query('SAVEPOINT sp2')
    const customerorder2 = 'INSERT INTO "PrelimExam"."RS_purchaseorder"("sup_ID","cust_ID",po_date,po_description) VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
    const orderdata2 = [3,2,'04/18/2021','2st Order by Mikasa'];
    const prodid2 = await client.query(customerorder2,orderdata2);
    const lineitem2 = 'INSERT INTO "PrelimExam"."RS_lineitem"("po_ID","prod_ID",li_date,li_description) VALUES ($1,$2,$3,$4)';
    const linedata2 = [prodid2.rows[0].po_ID,3,'04/18/2121','2nd Line Item by Mikasa']
    await client.query(lineitem2,linedata2)
    //3rd Order
    await client.query('SAVEPOINT sp3')
    const customerorder3 = 'INSERT INTO "PrelimExam"."RS_purchaseorder"("sup_ID","cust_ID",po_date,po_description) VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
    const orderdata3 = [4,2,'04/18/2021','3st Order by Mikasa'];
    const prodid3= await client.query(customerorder3,orderdata3);
    const lineitem3 = 'INSERT INTO "PrelimExam"."RS_lineitem"("po_ID","prod_ID",li_date,li_description) VALUES ($1,$2,$3,$4)';
    const linedata3 = [prodid3.rows[0].po_ID,4,'04/18/2121','3rd Line Item by Mikasa']
    await client.query(lineitem3,linedata3)

    //if customer cancel the last order it will rollback to savepoint sp3
    await client.query('ROLLBACK TO sp3')
    await client.query('COMMIT')


  } catch (e) {
    await client.query('ROLLBACK')
    throw e



  } finally {
    client.release()
  }
})().catch(e => console.error(e.stack))