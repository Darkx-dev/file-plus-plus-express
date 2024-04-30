import e, { urlencoded } from "express";
import {
  createFile,
  filesInDirectory,
  fileStats,
  deleteFile,
  readFile,
} from "./fileOperations.js";
import methodOverride from "method-override";

const app = e();

app.use(methodOverride("_method"));
app.use(e.json());
app.use(urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const files = filesInDirectory("./files");
  const stats = fileStats("./files", files);
  res.render("home", { files, stats });
});

app.post("/", (req, res) => {
  const { f__name, f__data } = req.body;
  createFile(f__name, f__data);
  res.redirect("/");
});

app.delete("/", (req, res) => {
  const { file_name } = req.body;
  deleteFile("./files", file_name);
  res.redirect("/");
});

app.get("/edit", (req, res) => {
  const { file_name } = req.query;
  const file_content = readFile("./files", file_name);
  res.render("edit", { file_name, file_content });
});

app.patch("/edit", (req, res) => {
  const { f__name, f__name__prev, f__data } = req.body;
  if (f__name !== f__name__prev) {
    deleteFile("./files", f__name__prev);
  }
  createFile(f__name, f__data);
  res.redirect("/");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
