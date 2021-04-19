const pool = require("./db");
;(async () => {
  // note: we don't try/catch this because if connecting throws an exception
  // we don't need to dispose of the client (it will be undefined)
  const client = await pool.connect()
  try {

   
    //1st order
    await client.query('BEGIN')
    const customerorder1 = 'INSERT INTO "PrelimExam"."RS_purchaseorder"("sup_ID","cust_ID",po_date,po_description) VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
    const orderdata1 = [1,1,'04/18/2021','1st Order by Eren'];
    const prodid1 = await client.query(customerorder1,orderdata1);
    const lineitem1 = 'INSERT INTO "PrelimExam"."RS_lineitem"("po_ID","prod_ID",li_date,li_description) VALUES ($1,$2,$3,$4)';
    const linedata1 = [prodid1.rows[0].po_ID,1,'04/18/2121','1st Line Item by Eren']
    await client.query(lineitem1,linedata1)

    //2nd order
    const customerorder2 = 'INSERT INTO "PrelimExam"."RS_purchaseorder"("sup_ID","cust_ID",po_date,po_description) VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
    const orderdata2 = [2,1,'04/18/2021','2st Order by Eren'];
    const prodid2 = await client.query(customerorder2,orderdata2);
    const lineitem2 = 'INSERT INTO "PrelimExam"."RS_lineitem"("po_ID","prod_ID",li_date,li_description) VALUES ($1,$2,$3,$4)';
    const linedata2 = [prodid2.rows[0].po_ID,2,'04/18/2121','2st Line Item by Eren']
    await client.query(lineitem2,linedata2)

    //3rd order
    const customerorder3 = 'INSERT INTO "PrelimExam"."RS_purchaseorder"("sup_ID","cust_ID",po_date,po_description) VALUES ($1,$2,$3,$4) RETURNING "po_ID"';
    const orderdata3 = [3,1,'04/18/2021','3st Order by Eren'];
    const prodid3 = await client.query(customerorder3,orderdata3);
    const lineitem3 = 'INSERT INTO "PrelimExam"."RS_lineitem"("po_ID","prod_ID",li_date,li_description) VALUES ($1,$2,$3,$4)';
    const linedata3 = [prodid3.rows[0].po_ID,3,'04/18/2121','3st Line Item by Eren']
    await client.query(lineitem3,linedata3)
    await client.query('COMMIT')



  } catch (e) {
    await client.query('ROLLBACK')
    throw e



  } finally {
    client.release()
  }
})().catch(e => console.error(e.stack))