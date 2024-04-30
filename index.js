import e, { urlencoded } from "express";
import { createFile, filesInDirectory, fileStats, deleteFile } from "./fileOperations.js";
import methodOverride from 'method-override';

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
    const {file_name} = req.body;
    deleteFile("./files",file_name);
    res.redirect("/")
    console.log(req.body)
})

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
