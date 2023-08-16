const Pool = require('../db/db');
const express = require('express');
const router = express.Router();

router.post('/accpet_at', async (req, res) => {
  try {
    console.log(req.body)
    const { department, avrage } = req.body;
    if (!department || !avrage) {
      throw new Error('please provide the department and avrage');
    }
    const { rows } = await Pool.query(
      `select * from data where average<=$2 and section=$1
      order by average DESC
      `,
      [department, avrage]
    );
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});
module.exports = router;
