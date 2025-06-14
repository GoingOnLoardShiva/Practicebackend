const fastify = require("fastify")();
const path = require("node:path");
const cor = require("@fastify/cors");
const multer = require("multer");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
fastify.register(cor, { origin: "*", methods: "GET,POST,PUT,DELETE" });
const fastifyMultipart = require("@fastify/multipart");

// Register the multipart plugin
fastify.register(fastifyMultipart);
fastify.register(require("@fastify/formbody"));

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST;

const auth = require("./controllers/auTh");
const homeRoutes = require("./routes/homeRoutes");

fastify.register(homeRoutes, { prefix: "/api/v1" });

fastify.addHook("preHandler", auth);

mongoose
  .connect(process.env.MONGODB_URL)

  .then(() => console.log("MongoDB connected"));

fastify.get("/blogrecive", function (req, reply) {
  reply.code(200).send("Api V1 Working");
});

// fastify.post("/verifyotp", function (req, res) {
// res.code(200).send("Api V1 Working")
// })
// fastify.post("/sendotp", function (req, res) {
// res.code(200).send("Api V1 Working")
// })
fastify.get("/homeCrontroller", function (req, reply) {
reply.code(200).send("Api V1 Working")
})

// const PORT = process.env.PORT || 4000;
// const HOST = process.env.HOST || '127.0.0.1';

fastify.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("server listening on " + address);
});
