/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_356999698")

  // add field
  collection.fields.addAt(13, new Field({
    "help": "",
    "hidden": false,
    "id": "file3010053567",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "photo_profil",
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
  collection.fields.removeById("file3010053567")

  return app.save(collection)
})
