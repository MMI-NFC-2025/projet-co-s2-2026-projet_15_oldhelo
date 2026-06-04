/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3465131082")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2087274390",
    "help": "",
    "hidden": false,
    "id": "relation1790293105",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "candidat",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3440083424",
    "help": "",
    "hidden": false,
    "id": "relation4208515716",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "createur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3465131082")

  // remove field
  collection.fields.removeById("relation1790293105")

  // remove field
  collection.fields.removeById("relation4208515716")

  return app.save(collection)
})
