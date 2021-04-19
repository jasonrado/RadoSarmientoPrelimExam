const { Pool } = require('pg')
const pool = new Pool()
;(async () => {
  // note: we don't try/catch this because if connecting throws an exception
  // we don't need to dispose of the client (it will be undefined)
  const client = await pool.connect()
  try {
    

    await client.query('BEGIN')
    const queryText = 'SELECT FROM PrelimExam.customer WHERE cust_ID = $1'
    const res = await client.query(queryText, ['Jason','Rado','Sasa'])
    const queryText2 = 'INSERT INTO public.purchaseorder(cust_ID) VALUES ($1) RETURNING po_ID'
    const res2 = [res.rows[0].id]
    await client.query(queryText2, res2)
    await client.query('COMMIT')

    
  } catch (e) {
    await client.query('ROLLBACK')
    throw e



  } finally {
    client.release()
  }
})().catch(e => console.error(e.stack))     