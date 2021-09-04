//use optica

db.createCollection("proveidor",{
    validator: {
        $jsonSchema:{
            additionalProperties: false,
            bsonType: "object",
            required: ["nom","telefon","fax","NIF","adreca"],
            properties: {
                nom:{bsonType:"string"},
                telefon:{bsonType:"string"},
                fax:{bsonType:"string"},
                NIF:{bsonType:"string"},
                adreca:{
                    bsonType:"object",
                    required: ["carrer","numero","pis","porta","ciutat","codi_postal","pais"],
                    properties:{
                        carrer:{bsonType:"string"},
                        numero:{bsonType:"int"},
                        pis:{bsonType:"string"},
                        porta:{bsonType:"string"},
                        ciutat:{bsonType:"string"},
                        codi_postal:{bsonType:"string"},
                        pais:{bsonType:"string"}
                    }
                }
            }
        }
    }
})


//use optica

db.createCollection("clients",{
    validator: {
        $jsonSchema:{
            additionalProperties: false,
            bsonType: "object",
            required: [
                "nom",
                "codi_postal",
                "telefon",
                "email",
                "data_registre",
                "empleat_encarregat",
                "recomanacio_client"
            ],
            properties:{
                nom: {bsonType:"string"},
                codi_postal: {bsonType:"string"},
                telefon: {bsonType:"string"},
                email: {bsonType:"string"},
                data_registre: {bsonType:"date"},
                empleat_encarregat: {bsonType:"string"},
                recomanacio_client:  {bsonType:"string"}
            }
        }
    }
})


//use optica

db.createCollection("ulleres",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType:"object",
            required: [
                "graduacio",
                "marca",
                "tipus_montura",
                "color",
                "colo_del_vidre",
                "preu"                
            ],
            properties: {
                graduacio: {bsonType:"decimal"},
                marca: {bsonType:"string"},
                tipus_montura:  {enum:["flotant","pasta","metalica"]},
                color: {bsonType:"string"},
                color_del_vidre: {bsonType:"string"},
                preu: {bsonType:"decimal"}
            }
        }
    }
})