const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API",
  },
  host: "stormy-dawn-53463.herokuapp.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js", "./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
