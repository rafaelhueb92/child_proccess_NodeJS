const logger = require("./logger");

logger.on("messageLogged", args => {
  console.log("Listener Called", args);
});

logger.log("message");
