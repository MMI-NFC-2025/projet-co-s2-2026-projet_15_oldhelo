/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_769924773")

  // remove field
  collection.fields.removeById("number3381049668")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_769924773")

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "number3381049668",
    "max": null,
    "min": null,
    "name": "id_compte_senior",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
