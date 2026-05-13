/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3465131082")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_769924773",
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

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_356999698",
    "help": "",
    "hidden": false,
    "id": "relation1790293105",
    "maxSelect": 10,
    "minSelect": 0,
    "name": "candidat",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3465131082")

  // remove field
  collection.fields.removeById("relation4208515716")

  // remove field
  collection.fields.removeById("relation1790293105")

  return app.save(collection)
})
