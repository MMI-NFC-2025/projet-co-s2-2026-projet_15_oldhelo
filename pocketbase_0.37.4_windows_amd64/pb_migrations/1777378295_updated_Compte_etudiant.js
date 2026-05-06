/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_356999698")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text4007288574",
    "max": 0,
    "min": 0,
    "name": "mdp",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "date750439983",
    "max": "",
    "min": "",
    "name": "disponibilite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "help": "",
    "hidden": false,
    "id": "geoPoint3432295479",
    "name": "code_postal",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "geoPoint"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text93372675",
    "max": 0,
    "min": 0,
    "name": "experience",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "help": "",
    "hidden": false,
    "id": "file832271821",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "carte_etudiante",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_356999698")

  // remove field
  collection.fields.removeById("text4007288574")

  // remove field
  collection.fields.removeById("date750439983")

  // remove field
  collection.fields.removeById("geoPoint3432295479")

  // remove field
  collection.fields.removeById("text93372675")

  // remove field
  collection.fields.removeById("file832271821")

  return app.save(collection)
})
