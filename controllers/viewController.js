const catchAsync = require("../utils/catchAsync");

exports.getOverview = async (req, res) => {
  res.status(200).render("home", {
    title: "Início",
    home: true,
  });
};
exports.getBikes = async (req, res) => {
  res.status(200).render("bike", {
    title: "Bikes",
    bike: true,
  });
};

exports.getMotos = async (req, res) => {
  res.status(200).render("moto", {
    title: "Motos",

    moto: true,
  });
};

exports.getAbout = async (req, res) => {
  res.status(200).render("about", {
    title: "Sobre",
    about: true,

  });
};

