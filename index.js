import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
  }));


app.get("/", (req, res) =>{
    res.render("index.ejs")
})

app.get("/about", (req, res) =>{
    res.render("about.ejs")
})

app.get("/contact", (req, res) =>{
    res.render("contact.ejs")
})

app.get("/signup", (req, res) =>{
    
    res.render("signup.ejs")
})

app.post("/login", (req, res) => {
    console.log(req.body)
    res.redirect("/");
})

app.post("/createuser", (req, res) =>{
    
    // res.render("signup.ejs")
    console.log(req.body)

    res.redirect("/signup");
})

app.post("/create-post", (req, res) => {
    res.redirect("/");
    const newPost = req.body;
    console.log(`Calling post ${newPost["textarea"]}`);
    console.log(`Calling title ${newPost["title"]}`);

})


app.post("/createuser", (req, res) => {
    res.redirect("/signup")
    // console.log(res.body);
});


app.listen(port, () =>{
    console.log(`Listining on port ${port}.`)
});

