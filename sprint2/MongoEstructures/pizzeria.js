// use pizzeria

db.createCollection("clients",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType: "object",
            required: [
                "nom",
                "cognom",
                "adreca",
                "codi_postal",
                "telefon",
                "comanda"
            ],
            properties: {
                nom: {bsonType: "string"},
                cognom: {bsonType: "string"},
                adreca: {bsonType: "string"},
                codi_postal: {bsonType: "string"},
                telefon: {bsonType: "string"},
                comanda: {
                    bsonType: "object",
                    required: [
                        "data_hora",
                        "tipus_comanda",
                        "quantitat",
                        "preu_total"
                    ],
                    properties:{
                        data_hora: {bsonType: "date"},
                        tipues_comanda: {
                            enum: ["domicili", "recollida"]
                            },
                        quantitat: {bsonType: "int"},
                        preu_total: {bsonType: "decimal"}
                    }
                }
            }
        }
    }
})

// use pizzeria

db.createCollection("provincia",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType: "object",
            required: [
                "nom",
                "localitat"
            ],
            properties: {
                nom: { bsonType: "string"},
                localitat: {
                    bsonType: "object",
                    required: ["nom_localitat"],
                    properties: {
                        nom_localitat: {bsonType: "string"}
                    }
                },

            }
        }
    }
})

// use pizzeria

db.createCollection("botiga",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType: "object",
            required: [
                "adreca",
                "codi_postal",
                "empleat"
            ],
            properties: {
                adreca: {bsonType: "string"},
                codi_postal: {bsonType: "string"},
                empleat: {
                    bsonType: "object",
                    required:[
                        "nom",
                        "cognom",
                        "NIF",
                        "telefon",
                        "feina"
                    ],
                    properties: {
                        nom: {bsonType: "string"},
                        cognom: {bsonType: "string"},
                        NIF: {bsonType: "string"},
                        telefon: {bsonType: "string"},
                        feina: {enum: ["cuiner","repartidor"]}
                    }
                }
            }
        }
    }
})

//use pizzeria

db.createCollection("productes",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType: "object",
            required: [
                "nom",
                "descripcio",
                "preu_total",
                "quantitat"
            ],
            properties: {
                nom: {bsonType: "string"},
                descripcio: {bsonType: "string"},
                peru_total: {bsonType: "decimal"},
                quantitat: {bsonType: "decimal"}
            }
        }
    }
})

//use pizzeria

db.createCollection("categories_pizza",{
    validation: {
        $jsonSchema: {
            additionalProperties: false,
            required: ["nom"],
            properties: {nom: {bsonType:"string"}}
        }
    }
})