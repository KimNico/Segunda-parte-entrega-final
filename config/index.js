let admin = require("firebase-admin");

let serviceAccount = require("./config/segunda-parte-del-final-firebase-adminsdk-x8ank-04566a7da8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

module.exports={db}