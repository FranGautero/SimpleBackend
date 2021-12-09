const express = require("express");
const router = express.Router();

//Gettin Agents Loged In
router.get("/agents", (req, res) => {
  try {
    const agents = {
      success: true,
      totalCount: 5,
      registros: [
        {
          agente_nro: 101,
          agente_nombre: "George Joestar",
          timestamp_login: 1638792513,
          interno_login: 301,
        },
        {
          agente_nro: 205,
          agente_nombre: "Dio Brando",
          timestamp_login: 1638792513,
          interno_login: 101,
        },
        {
          agente_nro: 103,
          agente_nombre: "Jotaro Kujo",
          timestamp_login: 1638792513,
          interno_login: 402,
        },
        {
          agente_nro: 102,
          agente_nombre: "Jonathan Joestar",
          timestamp_login: 1638792513,
          interno_login: 303,
        },
        {
          agente_nro: 204,
          agente_nombre: "Joseph Joestar",
          timestamp_login: 1638792513,
          interno_login: 104,
        },
      ],
    };
    res.json(agents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Getting Colas Stats

router.get("/colas", (req, res) => {
  try {
    let t1 = Math.floor(Math.random() * (10000 - 6000 + 1) + 6000);
    let a1 = Math.floor(Math.random() * (t1 - 5000 + 1) + 5000);
    let t2 = Math.floor(Math.random() * (7000 - 3000 + 1) + 3000);
    let a2 = Math.floor(Math.random() * (t2 - 1000 + 1) + 1000);
    let t3 = Math.floor(Math.random() * (100 - 30 + 1) + 30);
    let a3 = Math.floor(Math.random() * (t3 - 15 + 1) + 15);
    let t4 = Math.floor(Math.random() * (700 - 200 + 1) + 200);
    let a4 = Math.floor(Math.random() * (t4 - 50 + 1) + 50);
    let t5 = Math.floor(Math.random() * (800 - 300 + 1) + 300);
    let a5 = Math.floor(Math.random() * (t5 - 100 + 1) + 100);
    const colas = {
      success: true,
      totalCount: 5,
      registros: [
        {
          id: 1,
          nombre_cola: "107",
          cantidad_total: t1,
          cantidad_atendidas: a1,
        },
        {
          id: 2,
          nombre_cola: "central_derivaciones",
          cantidad_total: t2,
          cantidad_atendidas: a2,
        },
        {
          id: 3,
          nombre_cola: "mesa_sectorial",
          cantidad_total: t3,
          cantidad_atendidas: a3,
        },
        {
          id: 4,
          nombre_cola: "reguladores",
          cantidad_total: t4,
          cantidad_atendidas: a4,
        },
        {
          id: 5,
          nombre_cola: "traslados_iapos",
          cantidad_total: t5,
          cantidad_atendidas: a5,
        },
      ],
    };
    res.json(colas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
