//use youtube

db.createCollection("usuaris",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            required: [
                "email",
                "password",
                "nom_usuari",
                "data_neixament",
                "sexe",
                "pais",
                "codi_postal",
                "suscripcions",
                "likes",
                "dislikes",
                "coment_like",
                "coment_dislike"
            ],
            properties: {
                email: {bsonType:"string"},
                password: {bsonType:"string"},
                nom_usuari: {bsonType:"string"},
                data_neixament: {bsonType:"date"},
                sexe: {enum:["masculi","femeni"]},
                pais: {bsonType:"string"},
                codi_postal: {bsonType:"string"},
                suscripcions: {
                    bsonType:"object",
                    required:["canal_id"],
                    properties:{canal_id: {bsonType:"objectId"}}
                }
            }
        }
    }
})

                
//use youtube
                
db.createCollection("canals",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            required: [
                "nom",
                "descripcio",
                "data_creacio"
            ],
            properties: {
                nom: {bsonType:"string"},
                descripcio: {bsonType:"string"},
                data_creacio: {bsonType:"date"}
            }
        }
    }
})


//use youtube

db.createCollection("playlists",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            required: [
                "nom",
                "descripcio",
                "data_creacio",
                "estat",
                "videos_playlist"
            ],
            properties: {
                nom: {bsonType:"string"},
                descripcio: {bsonType:"string"},
                data_creacio: {bsonType:"date"},
                estat: {enum:["public","privat"]},
                videos_playlist: {
                    bsonType:"object",
                    required:["video_id"],
                    properties:{video_id:{bsonType:"objectId"}}
                }
            }
        }
    }
})


//use youtube

db.createCollection("videos",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            required: [
                "titol",
                "descripcio",
                "grandaria",
                "nom_arxiu",
                "durada",
                "thumbnail",
                "numero_reproduccions",
                "numero_likes",
                "numero_dislikes",
                "estat",
                "data_hora",
                "etiquetes",
                "comentaris"
            ],
            properties: {
                titol: {bsonType:"string"},
                descripcio: {bsonType:"string"},
                grandaria: {bsonType:"string"},
                nom_arxiu: {bsonType:"string"},
                durada: {bsonType:"int"},
                thumbnail: {bsonType:"string"},
                numero_reproduccions: {bsonType:"int"},
                numero_likes: {bsonType:"int"},
                numero_dislikes: {bsonType:"int"},
                estat: {enum:["public","privat","ocult"]},
                data_hora: {bsonType:"string"},
                etiquetes: {
                    bsonType:"object",
                    required:["nom_etiqueta"],
                    properties:{nom_etiqueta:{bsonType:"string"}}
                },
                comentaris: {
                    bsonType:"object",
                    required:[
                        "text",
                        "data_hora"    
                    ],
                    properties:{
                        text: {bsonType:"string"},
                        data_hora: {bsonType:"date"}
                    }
                }
            }
        }
    }
})