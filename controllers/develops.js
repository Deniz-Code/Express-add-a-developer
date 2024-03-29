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
      res.redirect("/develops");
    });
}

function newDevelop(req, res) {
  res.render("develops/new");
}

function create(req, res) {
  req.body.skill = true;
  Develop.create(req.body)
    .then((develop) => {
      res.redirect("/develops");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/develops");
    });
}

function show(req, res) {
  Develop.findById(req.params.id)
    .then((develops) => {
      res.render("develops/show", {
        develops:develops,
      });
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/develops");
    });
}

export { index, newDevelop as new, create,show };
