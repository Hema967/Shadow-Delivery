import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ ok: true, name: "shadow-api" });
});

export default router;

