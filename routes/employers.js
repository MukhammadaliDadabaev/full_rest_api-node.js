const { Router } = require("express");
const pool = require("../config/db");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const employers = await pool.query("SELECT * FROM employer");

    res.status(200).json(employers.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { name, salary, degree, job_id } = req.body;
    const newEmployer = await pool.query(
      "INSERT INTO employer (name, salary, degree, job_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, salary, degree, job_id]
    );

    res.status(201).json(newEmployer.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
