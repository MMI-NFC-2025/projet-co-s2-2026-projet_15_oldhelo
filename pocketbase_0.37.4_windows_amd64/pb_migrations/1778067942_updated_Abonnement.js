/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2231327739")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_356999698",
    "help": "",
    "hidden": false,
    "id": "relation1389249409",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "compte_relie_e",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_769924773",
    "help": "",
    "hidden": false,
    "id": "relation2786784976",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "compte_relie_s",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2231327739")

  // remove field
  collection.fields.removeById("relation1389249409")

  // remove field
  collection.fields.removeById("relation2786784976")

  return app.save(collection)
})
