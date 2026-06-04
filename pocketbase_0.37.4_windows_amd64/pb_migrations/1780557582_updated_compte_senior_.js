/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3440083424")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_ps4nzy3upl` ON `compte_senior` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_ps4nzy3upl` ON `compte_senior` (`email`) WHERE `email` != ''"
    ],
    "name": "compte_senior"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3440083424")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_ps4nzy3upl` ON `compte_senior_` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_ps4nzy3upl` ON `compte_senior_` (`email`) WHERE `email` != ''"
    ],
    "name": "compte_senior_"
  }, collection)

  return app.save(collection)
})
