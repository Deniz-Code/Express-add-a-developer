import { Develop } from "../models/develop.js";

function index(req, res) {
  Develop.find({})
    .then((develops) => {
      res.render("develops/index", {
        develops: develops,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/todos");
    });
}

export{index}