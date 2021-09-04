//use spotify

db.createCollecion("usuaris",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType:"object",
            required:[
                "tipus",
                "email",
                "password",
                "nom_usuari",
                "data_neixament",
                "sexe",
                "pais",
                "codi_postal",
                "artistes_favorits",
                "playlists",
                "albums_favorits",
                "cancons_favorites"
            ],
            properties:{
                tipus:{enum:["free","premium"]},
                email:{bsonType:"string"},
                password:{bsonType:"string"},
                nom_usuari:{bsonType:"string"},
                data_neixament:{bsonType:"date"},
                sexe:{enum:["masculi","femeni"]},
                pais:{bsonType:"string"},
                codi_postal:{bsonType:"string"},
                artistes_favorits:{
                    bsonType:"object",
                    required:["artista_id"],
                    properties:{artista_id:{bsonType:"objectId"}}
                },
                playlists:{
                    bsonType:"object",
                    required:[
                        "playlist_id",
                        "estat",
                        "titol",
                        "numero_cancons",
                        "data_creacio",
                        "data_eliminacio"
                    ],
                    properties:{
                        playlist_id:{bsonType:"objectId"},
                        estat:{enum:["activa","eliminada"]},
                        titol:{bsonType:"string"},
                        numero_cancons:{bsonType:"int"},
                        data_creacio:{bsonType:"date"},
                        data_eliminacio:{bsonType:"date"}
                    }
                },
                albums_favorits:{
                    bsonType:"object",
                    required:["album_id"],
                    properties:{album_id:{bsonType:"objectId"}}
                },
                cancons_favorites:{
                    bsonType:"object",
                    required:["canco_id"],
                    properties:{canco_id:{bsonType:"objectId"}}
                }
            }
        }
    }
})


//use spotify

db.createCollecion("suscripcions",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType:"object",
            required:[
                "data_inici",
                "data_renovacio",
                "forma_pagament",
                "usuari_id",
                "pagaments",
                "targetas",
                "paypal"
            ],
            properties:{
                data_inici:{bsonType:"date"},
                data_renovacio:{bsonType:"date"},
                forma_pagament:{enum:["targeta","paypal"]},
                usuari_id:{bsonType:"objectId"},
                pagaments:{
                    bsonType:"object",
                    required:[
                        "data",
                        "total_pagat"
                    ],
                    properties:{
                        data:{bsonType:"date"},
                        total_pagar:{bsonType:"decimal"}
                    }
                },
                targetas:{
                    bsonType:"object",
                    required:[
                        "num_targeta",
                        "caducitat",
                        "codi_seguretat"
                    ],
                    properties:{
                        num_targeta:{bsonType:"string"},
                        caducitat:{bsonType:"date"},
                        codi_seguretat:{bsonType:"string"}
                    }
                },
                paypal:{
                    bsonType:"object",
                    required:["nom_conta"],
                    properties:{nom_conta:{bsonType:"string"}}
                }
            }
        }
    }
})


//use spotify

db.createCollecion("artistes",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType:"object",
            required:[
                "nom",
                "imatge",
                "relacions",
                "albums"
            ],
            properties:{
                nom: {bsonType:"string"},
                imatge: {bsonType:"string"},
                relacions: {
                    bsonType:"object",
                    required:["artista_id"],
                    properties:{artista_id:{bsonType:"objectId"}}
                },
                albums: {
                    bsonType:"object",
                    required:[
                        "titol",
                        "any_publicacio",
                        "imatge"
                    ],
                    properties:{
                        titol:{bsonType:"string"},
                        any_publicacio:{bsonType:"date"},
                        imatge:{bsonType:"string"}
                    }
                }
            }
        }
    }
})


//use spotify

db.createCollecion("cancons",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType:"object",
            required:[
                "titol",
                "durada",
                "numero_reproduccions",
                "album_id"
            ],
            properties:{
                titol:{bsonType:"string"},
                durada:{bsonType:"int"},
                numero_reproduccions:{bsonType:"int"},
                album_id:{bsonType:"objectId"}
            }
        }
    }
})


//use spotify

db.createCollecion("cancons_compartides",{
    validator: {
        $jsonSchema: {
            additionalProperties: false,
            bsonType:"object",
            required:[
                "canco_id",
                "usuari_id",
                "playlist_id"
            ],
            properties:{
                canco_id:{bsonType:"objectId"},
                usuari_id:{bsonType:"objectId"},
                playlist_id:{bsonType:"objectId"}
            }
        }
    }
})

