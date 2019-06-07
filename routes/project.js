const express = require("express");
const router = express.Router();
const { data } = require("../data.json");
const { projects } = data;

router.get("/project/:id", (req, res) => {
  const { id } = req.params;
  const templateData = {
    id,
    project_name,
    description,
    technologies,
    live_link,
    github_link,
    image_urls
  };

  res.render("project", templateData);
});

module.exports = router;
