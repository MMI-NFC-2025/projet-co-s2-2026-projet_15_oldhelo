/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2087274390")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_6k4op2c1yb` ON `Compte_etudiant` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_6k4op2c1yb` ON `Compte_etudiant` (`email`) WHERE `email` != ''"
    ],
    "name": "Compte_etudiant"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2087274390")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_6k4op2c1yb` ON `Compte_etudiant_` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_6k4op2c1yb` ON `Compte_etudiant_` (`email`) WHERE `email` != ''"
    ],
    "name": "Compte_etudiant_"
  }, collection)

  return app.save(collection)
})
