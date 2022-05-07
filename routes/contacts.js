const routes = require("express").Router();
const connect = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// Get all contacts
routes.get("/", (req, res) => {
  const results = connect.getCollection().find();
  results.toArray().then((documents) => {
    res.status(200).json(documents);
    console.log("Returned all contacts");
  });
});

// Get a contact by ID
routes.get("/:id", (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const results = connect.getCollection().find({ _id: contactId });

  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Returned Contact ${req.params.id}`);
  });
});

// Create a new contact
routes.post("/", (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = connect.getCollection().insertOne(contact);
  if (response) {
    res.status(201).json("Contact created successfully");
  } else {
    res.status(500).json("Some error occurred while creating the contact");
  }
});

// Edit contact
routes.put("/:id", (req, res) => {
  const id = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = connect.getCollection().replaceOne({ _id: id }, contact);
  if (response) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while updating the contact.");
  }
});

// DELETE contact by ID
routes.delete("/:id", (req, res) => {
  const id = new ObjectId(req.params.id);
  const response = connect.getCollection().deleteOne({ _id: id });
  if (response) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while deleting the contact");
  }
});

module.exports = routes;
