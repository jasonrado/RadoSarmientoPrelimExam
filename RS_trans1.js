const pool = require("./db");
; (async () => {
  // note: we don't try/catch this because if connecting throws an exception
  // we don't need to dispose of the client (it will be undefined)
  const client = await pool.connect()
  try {

    //adding of supplier 1
    await client.query('BEGIN')
    const addsupplier1 = 'INSERT INTO "PrelimExam"."RS_supplier"(sup_name,sup_location) VALUES ($1,$2) RETURNING "sup_ID"';
    const suppliername1 = ['Hubstore', 'Korea'];
    const supID1 = await client.query(addsupplier1, suppliername1);

    //adding of supplier 2
    await client.query('BEGIN')
    const addsupplier2 = 'INSERT INTO "PrelimExam"."RS_supplier"(sup_name,sup_location) VALUES ($1,$2) RETURNING "sup_ID"';
    const suppliername2 = ['Clothing Line', 'Japan'];
    const supID2 = await client.query(addsupplier2, suppliername2);

    //adding of supplier 3
    await client.query('BEGIN')
    const addsupplier3 = 'INSERT INTO "PrelimExam"."RS_supplier"(sup_name,sup_location) VALUES ($1,$2) RETURNING "sup_ID"';
    const suppliername3 = ['Warehouse', 'Davao'];
    const supID3 = await client.query(addsupplier3, suppliername3);

    //adding of supplier 4
    await client.query('BEGIN')
    const addsupplier4 = 'INSERT INTO "PrelimExam"."RS_supplier"(sup_name,sup_location) VALUES ($1,$2) RETURNING "sup_ID"';
    const suppliername4 = ['ThriftStore', 'Davao'];
    const supID4 = await client.query(addsupplier4, suppliername4);

    //adding of supplier 5
    await client.query('BEGIN')
    const addsupplier5 = 'INSERT INTO "PrelimExam"."RS_supplier"(sup_name,sup_location) VALUES ($1,$2) RETURNING "sup_ID"';
    const suppliername5 = ['Gadget Center', 'Cebu'];
    const supID5 = await client.query(addsupplier5, suppliername5);


    //updating product because supplier is a FK 
    //product 1
    const qr1 = 'INSERT INTO "PrelimExam"."RS_product"("sup_ID",prod_name,prod_price) VALUES ($1,$2,$3) RETURNING "prod_ID"';
    const data1 = [supID1.rows[0].sup_ID, 'Towel', 100];
    const prodID1 = await client.query(qr1, data1)

    //product 2
    const qr2 = 'INSERT INTO "PrelimExam"."RS_product"("sup_ID",prod_name,prod_price) VALUES ($1,$2,$3) RETURNING "prod_ID"';
    const data2 = [supID2.rows[0].sup_ID, 'Lipstick', 199];
    const prodID2 = await client.query(qr2, data2)
    //product 3
    const qr3 = 'INSERT INTO "PrelimExam"."RS_product"("sup_ID",prod_name,prod_price) VALUES ($1,$2,$3) RETURNING "prod_ID"';
    const data3 = [supID3.rows[0].sup_ID, 'Iphone', 50000];
    const prodID3 = await client.query(qr3, data3)
    //product 4
    const qr4 = 'INSERT INTO "PrelimExam"."RS_product"("sup_ID",prod_name,prod_price) VALUES ($1,$2,$3) RETURNING "prod_ID"';
    const data4 = [supID4.rows[0].sup_ID, 'Mascara', 399];
    const prodID4 = await client.query(qr4, data4)

    //product 5
    const qr5 = 'INSERT INTO "PrelimExam"."RS_product"("sup_ID",prod_name,prod_price) VALUES ($1,$2,$3) RETURNING "prod_ID"';
    const data5 = [supID5.rows[0].sup_ID, 'Ipad', 23000];
    const prodID5 = await client.query(qr5, data5)


    //add customer 1 
    const addcustomer1 = 'INSERT INTO "PrelimExam"."RS_customer"(cust_name,cust_address) VALUES ($1,$2) RETURNING "cust_ID"';
    const customername1 = ['Eren Yeager', 'Paradis'];
    await client.query(addcustomer1, customername1);
    //add customer 2
    const addcustomer2 = 'INSERT INTO "PrelimExam"."RS_customer"(cust_name,cust_address) VALUES ($1,$2) RETURNING "cust_ID"';
    const customername2 = ['Mikasa Ackerman', 'Paradis'];
    await client.query(addcustomer2, customername2);
    //add customer 3 
    const addcustomer3 = 'INSERT INTO "PrelimExam"."RS_customer"(cust_name,cust_address) VALUES ($1,$2) RETURNING "cust_ID"';
    const customername3 = ['Reiner Braun', 'Marley'];
    await client.query(addcustomer3, customername3);
    //add customer 4 
    const addcustomer4 = 'INSERT INTO "PrelimExam"."RS_customer"(cust_name,cust_address) VALUES ($1,$2) RETURNING "cust_ID"';
    const customername4 = ['Levi Ackerman', 'Paradis'];
    await client.query(addcustomer4, customername4);
    //add customer 5
    const addcustomer5 = 'INSERT INTO "PrelimExam"."RS_customer"(cust_name,cust_address) VALUES ($1,$2) RETURNING "cust_ID"';
    const customername5 = ['Zeke Yeager', 'Marley'];
    await client.query(addcustomer5, customername5);
    await client.query('COMMIT')
    

  } catch (e) {
    await client.query('ROLLBACK')
    throw e



  } finally {
    client.release()
  }
})().catch(e => console.error(e.stack))