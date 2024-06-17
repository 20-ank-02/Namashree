import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("products");
});

router.get("/:id", (req: Request, res: Response) => {
  res.send("product with specific id");
});

// Product Materials
router.get("/materials", (req: Request, res: Response) => {
  res.send("get product materials");
});

// Product colors
router.get("/colors", (req: Request, res: Response) => {
  res.send("get product colors");
});

// Product designs
router.get("/designs", (req: Request, res: Response) => {
  res.send("get product designs");
});

// Product customizations
router.post("/customizations", (req: Request, res: Response) => {
  res.send("Creates a new customization for a product.");
});

router.post("/", (req: Request, res: Response) => {
  res.send("admin route- create product");
});

router.put("/:id", (req: Request, res: Response) => {
  res.send("admin route- update product");
});

router.delete("/:id", (req: Request, res: Response) => {
  res.send("admin route- delete product");
});

export default router;
