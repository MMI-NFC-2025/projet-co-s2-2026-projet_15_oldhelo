/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_145646462")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2087274390",
    "help": "",
    "hidden": false,
    "id": "relation4090409246",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "compte_etudiant",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3440083424",
    "help": "",
    "hidden": false,
    "id": "relation2007918625",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "compte_senior",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_145646462")

  // remove field
  collection.fields.removeById("relation4090409246")

  // remove field
  collection.fields.removeById("relation2007918625")

  return app.save(collection)
})
