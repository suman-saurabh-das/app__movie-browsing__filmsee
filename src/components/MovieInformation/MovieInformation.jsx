import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Common/Loader'
import Rating from '../Common/Rating'
import genreIcons from '../../assets/genres'
import { useDispatch } from 'react-redux'
import { selectGenreIdOrCategoryName } from '../../features/currentGenreIdOrCategoryName'

import { useGetMovieQuery } from '../../services/TMDB'

function MovieInformation({ showSidebar }) {
  const { id } = useParams()
  const { data, isFetching, error } = useGetMovieQuery(id)
  const dispatch = useDispatch()
  // const isFetching = false, error = false
  // const data = {
  //   "adult": false,
  //   "backdrop_path": "/lUPz9zW0uf0bHfYsRRID8RtBHEU.jpg",
  //   "belongs_to_collection": null,
  //   "budget": 0,
  //   "genres": [
  //     {
  //       "id": 18,
  //       "name": "Drama"
  //     },
  //     {
  //       "id": 36,
  //       "name": "History"
  //     }
  //   ],
  //   "homepage": "",
  //   "id": 457232,
  //   "imdb_id": "tt5533370",
  //   "original_language": "en",
  //   "original_title": "Lamborghini: The Man Behind the Legend",
  //   "overview": "Follow the launch of Lamborghini’s career as a manufacturer of tractors, a creator of military vehicles during World War II, and the designer of Lamborghini cars, which he launched in 1963 as the high-end sports car company Automobili Lamborghini.",
  //   "popularity": 108.172,
  //   "poster_path": "/RKgnYLhCNGCUkrhiCRrs40rEHe.jpg",
  //   "production_companies": [
  //     {
  //       "id": 184844,
  //       "logo_path": "/gsd7K46hkePQejS6hN6Lc5RqBH1.png",
  //       "name": "Iervolino & Lady Bacardi Entertainment",
  //       "origin_country": "IT"
  //     },
  //     {
  //       "id": 3604,
  //       "logo_path": "/jC6Hk3ZyNRlVPJsA0xGlAhgd2RP.png",
  //       "name": "Grindstone Entertainment Group",
  //       "origin_country": "US"
  //     },
  //     {
  //       "id": 184846,
  //       "logo_path": null,
  //       "name": "Lambofilm",
  //       "origin_country": "US"
  //     },
  //     {
  //       "id": 184847,
  //       "logo_path": null,
  //       "name": "Zian Films",
  //       "origin_country": ""
  //     }
  //   ],
  //   "production_countries": [
  //     {
  //       "iso_3166_1": "IT",
  //       "name": "Italy"
  //     },
  //     {
  //       "iso_3166_1": "US",
  //       "name": "United States of America"
  //     }
  //   ],
  //   "release_date": "2022-11-18",
  //   "revenue": 0,
  //   "runtime": 97,
  //   "spoken_languages": [
  //     {
  //       "english_name": "English",
  //       "iso_639_1": "en",
  //       "name": "English"
  //     }
  //   ],
  //   "status": "Released",
  //   "tagline": "",
  //   "title": "Lamborghini: The Man Behind the Legend",
  //   "video": false,
  //   "vote_average": 6.254,
  //   "vote_count": 293,
  //   "videos": {
  //     "results": [
  //       {
  //         "iso_639_1": "en",
  //         "iso_3166_1": "US",
  //         "name": "Official Clip - \"Lamborghini and Ferrari\"",
  //         "key": "q_o2eL0s7Fs",
  //         "site": "YouTube",
  //         "size": 1080,
  //         "type": "Clip",
  //         "official": true,
  //         "published_at": "2022-11-16T18:00:14.000Z",
  //         "id": "637577b943cd54009b114366"
  //       },
  //       {
  //         "iso_639_1": "en",
  //         "iso_3166_1": "US",
  //         "name": "Official Clip - 'Dinner Argument'",
  //         "key": "0EFlPvxPkqU",
  //         "site": "YouTube",
  //         "size": 1080,
  //         "type": "Clip",
  //         "official": true,
  //         "published_at": "2022-11-10T18:00:22.000Z",
  //         "id": "636d5c341b729400c3a8d4ea"
  //       },
  //       {
  //         "iso_639_1": "en",
  //         "iso_3166_1": "US",
  //         "name": "UK Trailer",
  //         "key": "WjTICfrC25s",
  //         "site": "YouTube",
  //         "size": 1080,
  //         "type": "Trailer",
  //         "official": true,
  //         "published_at": "2022-11-09T12:24:52.000Z",
  //         "id": "636ba62a21621b00cd61376f"
  //       },
  //       {
  //         "iso_639_1": "en",
  //         "iso_3166_1": "US",
  //         "name": "Official Trailer",
  //         "key": "kzqwRxorvKE",
  //         "site": "YouTube",
  //         "size": 1080,
  //         "type": "Trailer",
  //         "official": true,
  //         "published_at": "2022-11-01T17:00:12.000Z",
  //         "id": "6361544d07e281007a9c94ab"
  //       }
  //     ]
  //   },
  //   "credits": {
  //     "cast": [
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 81685,
  //         "known_for_department": "Acting",
  //         "name": "Frank Grillo",
  //         "original_name": "Frank Grillo",
  //         "popularity": 21.317,
  //         "profile_path": "/br2nPzelch2Tb3pZHnYAbXng7cz.jpg",
  //         "cast_id": 18,
  //         "character": "Ferruccio Lamborghini",
  //         "credit_id": "614af648511d090043ec5ac7",
  //         "order": 0
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 1922410,
  //         "known_for_department": "Acting",
  //         "name": "Romano Reggiani",
  //         "original_name": "Romano Reggiani",
  //         "popularity": 2.304,
  //         "profile_path": "/omBSby3nGrKl4XdtTleX58B3VqJ.jpg",
  //         "cast_id": 9,
  //         "character": "Young Ferruccio Lamborghini",
  //         "credit_id": "613fa0e872a2c9002611c7a5",
  //         "order": 1
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 5168,
  //         "known_for_department": "Acting",
  //         "name": "Gabriel Byrne",
  //         "original_name": "Gabriel Byrne",
  //         "popularity": 14.944,
  //         "profile_path": "/9r9oDGENg92VYYFMkV4C09IUlrb.jpg",
  //         "cast_id": 19,
  //         "character": "Enzo Ferrari",
  //         "credit_id": "614af65dcf9ba30092323fc7",
  //         "order": 2
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1790757,
  //         "known_for_department": "Acting",
  //         "name": "Matteo Leoni",
  //         "original_name": "Matteo Leoni",
  //         "popularity": 4.49,
  //         "profile_path": "/xtdujFEjF57CEDyh5EYN5yXivMh.jpg",
  //         "cast_id": 46,
  //         "character": "Matteo",
  //         "credit_id": "63575f74b9a0bd0083b387be",
  //         "order": 3
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 1540185,
  //         "known_for_department": "Acting",
  //         "name": "Hannah van der Westhuysen",
  //         "original_name": "Hannah van der Westhuysen",
  //         "popularity": 14.902,
  //         "profile_path": "/v1pWVLqNDSLUjvuH2yCtsxA6OxT.jpg",
  //         "cast_id": 8,
  //         "character": "Clelia Monti",
  //         "credit_id": "613fa0df9979d2004635661d",
  //         "order": 4
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 23931,
  //         "known_for_department": "Acting",
  //         "name": "Mira Sorvino",
  //         "original_name": "Mira Sorvino",
  //         "popularity": 23.173,
  //         "profile_path": "/11raFiNo7QfisH44v3NIfpVvIz5.jpg",
  //         "cast_id": 21,
  //         "character": "Anita Borgatti",
  //         "credit_id": "614af6e4d2c0c10066821f91",
  //         "order": 5
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 1815997,
  //         "known_for_department": "Acting",
  //         "name": "Chiara Primavesi",
  //         "original_name": "Chiara Primavesi",
  //         "popularity": 2.337,
  //         "profile_path": "/1IAWn5JC1vk08Bex4WpYbH1ED7o.jpg",
  //         "cast_id": 11,
  //         "character": "Young Anita",
  //         "credit_id": "613fa1068d22fc0044a5a14f",
  //         "order": 6
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 3414548,
  //         "known_for_department": "Acting",
  //         "name": "Francesca Tizzano",
  //         "original_name": "Francesca Tizzano",
  //         "popularity": 1.96,
  //         "profile_path": "/1yNU6vqpseoOiJc9LG3Ls37g5Yi.jpg",
  //         "cast_id": 51,
  //         "character": "Gabriella",
  //         "credit_id": "63781e55336e010082e11719",
  //         "order": 7
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1816062,
  //         "known_for_department": "Acting",
  //         "name": "Francesca De Martini",
  //         "original_name": "Francesca De Martini",
  //         "popularity": 3.069,
  //         "profile_path": "/ky2R6fkYU15ALp5PysYTR6DfkIU.jpg",
  //         "cast_id": 14,
  //         "character": "Evelina Lamborghini",
  //         "credit_id": "613fa13d006b010044730cab",
  //         "order": 8
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 1343864,
  //         "known_for_department": "Acting",
  //         "name": "Fortunato Cerlino",
  //         "original_name": "Fortunato Cerlino",
  //         "popularity": 5.125,
  //         "profile_path": "/4tibFPR632uYcm0ewrbn11POpLf.jpg",
  //         "cast_id": 22,
  //         "character": "Antonio Lamborghini",
  //         "credit_id": "614af761a6ddcb0043b59315",
  //         "order": 9
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 137803,
  //         "known_for_department": "Acting",
  //         "name": "Giulio Mezza",
  //         "original_name": "Giulio Mezza",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "cast_id": 53,
  //         "character": "Edmondo Lamborghini",
  //         "credit_id": "63c9a5e8bb070d00c8a0bdce",
  //         "order": 10
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 9236,
  //         "known_for_department": "Acting",
  //         "name": "Giorgio Cantarini",
  //         "original_name": "Giorgio Cantarini",
  //         "popularity": 6.209,
  //         "profile_path": "/hzb7CRUnOitz31kQbgUqJpIPcLO.jpg",
  //         "cast_id": 10,
  //         "character": "Giorgio Lamborghini",
  //         "credit_id": "613fa0f36af9dd00917df94a",
  //         "order": 11
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 2219983,
  //         "known_for_department": "Acting",
  //         "name": "Giovanni Scotti",
  //         "original_name": "Giovanni Scotti",
  //         "popularity": 2.36,
  //         "profile_path": "/a6MVIV0OXTwXcPZoRd6v8jT5wfl.jpg",
  //         "cast_id": 54,
  //         "character": "Silvio Lamborghini",
  //         "credit_id": "63c9a64668afd6008ef5af70",
  //         "order": 12
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 3881661,
  //         "known_for_department": "Acting",
  //         "name": "Lorenzo Viganò",
  //         "original_name": "Lorenzo Viganò",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "cast_id": 55,
  //         "character": "Tonino Lamborghini",
  //         "credit_id": "63c9a67703f0b600810995f1",
  //         "order": 13
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 76022,
  //         "known_for_department": "Acting",
  //         "name": "Patrick Brennan",
  //         "original_name": "Patrick Brennan",
  //         "popularity": 4.299,
  //         "profile_path": "/dEJbh3gfwYMg5q0vdCpx9l3cMmh.jpg",
  //         "cast_id": 52,
  //         "character": "Bob Wallace",
  //         "credit_id": "63781e7f976e480091a67c39",
  //         "order": 14
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 1612166,
  //         "known_for_department": "Acting",
  //         "name": "Leonardo Cecchi",
  //         "original_name": "Leonardo Cecchi",
  //         "popularity": 3.892,
  //         "profile_path": "/bpFH3Gq6Tt6oRAzcdvD9M1TqCxA.jpg",
  //         "cast_id": 48,
  //         "character": "Gian Paolo Dallara",
  //         "credit_id": "63781d620284200075e32ba7",
  //         "order": 15
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1156419,
  //         "known_for_department": "Acting",
  //         "name": "Luca  Riemma",
  //         "original_name": "Luca  Riemma",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "cast_id": 56,
  //         "character": "Giotto Bizzarrini",
  //         "credit_id": "63c9a6d968afd6007c711459",
  //         "order": 16
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 25102,
  //         "known_for_department": "Acting",
  //         "name": "Andrea Bruschi",
  //         "original_name": "Andrea Bruschi",
  //         "popularity": 4.728,
  //         "profile_path": "/sWsOuuVVOAwffIaFxlF2ZThYDl.jpg",
  //         "cast_id": 57,
  //         "character": "Franco Scaglione",
  //         "credit_id": "63c9a6f303f0b600843d0b6b",
  //         "order": 17
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 1605204,
  //         "known_for_department": "Acting",
  //         "name": "Clementino",
  //         "original_name": "Clementino",
  //         "popularity": 0.84,
  //         "profile_path": null,
  //         "cast_id": 58,
  //         "character": "Mario Corrado",
  //         "credit_id": "63c9a70903f0b600b91d85f8",
  //         "order": 18
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 2078350,
  //         "known_for_department": "Acting",
  //         "name": "Tommaso Basili",
  //         "original_name": "Tommaso Basili",
  //         "popularity": 1.828,
  //         "profile_path": "/gGTY9TbPS88lMq7AP38DddYro4G.jpg",
  //         "cast_id": 59,
  //         "character": "Diego",
  //         "credit_id": "63c9a72f03f0b6008109961e",
  //         "order": 19
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 1868278,
  //         "known_for_department": "Acting",
  //         "name": "Gian Franco Tordi",
  //         "original_name": "Gian Franco Tordi",
  //         "popularity": 2.961,
  //         "profile_path": "/v9TDrKgiLqNQM881PsD8vM8kaOC.jpg",
  //         "cast_id": 60,
  //         "character": "Radio reporter",
  //         "credit_id": "63c9a741bb070d00a8568c45",
  //         "order": 20
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 7196,
  //         "known_for_department": "Acting",
  //         "name": "Loris Loddi",
  //         "original_name": "Loris Loddi",
  //         "popularity": 2.816,
  //         "profile_path": "/xW1fnvI8mbJJABjKBafdHAkVQ1z.jpg",
  //         "cast_id": 61,
  //         "character": "Graphic artist",
  //         "credit_id": "63c9a75068afd60086f9891e",
  //         "order": 21
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 1169685,
  //         "known_for_department": "Acting",
  //         "name": "Eliana Jones",
  //         "original_name": "Eliana Jones",
  //         "popularity": 9.788,
  //         "profile_path": "/2y313RR1jMyzbK470IGWLyxcHI0.jpg",
  //         "cast_id": 49,
  //         "character": "Billie Alland",
  //         "credit_id": "63781e19336e01007695fd95",
  //         "order": 22
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2767655,
  //         "known_for_department": "Acting",
  //         "name": "Giovanni Antonacci",
  //         "original_name": "Giovanni Antonacci",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "cast_id": 62,
  //         "character": "Tony Renis",
  //         "credit_id": "63c9a76b68afd60086f98927",
  //         "order": 23
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 3881663,
  //         "known_for_department": "Acting",
  //         "name": "Shyann Yan",
  //         "original_name": "Shyann Yan",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "cast_id": 63,
  //         "character": "News reporter",
  //         "credit_id": "63c9a7a1ed96bc0091aa22a4",
  //         "order": 24
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2523045,
  //         "known_for_department": "Acting",
  //         "name": "Marianna Folli",
  //         "original_name": "Marianna Folli",
  //         "popularity": 0.6,
  //         "profile_path": "/125QvXFEwamrnuodU2o4XCv5MID.jpg",
  //         "cast_id": 64,
  //         "character": "Maid",
  //         "credit_id": "63c9a7c2a097dc0086e74c23",
  //         "order": 25
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 3881665,
  //         "known_for_department": "Acting",
  //         "name": "Ema Kovac",
  //         "original_name": "Ema Kovac",
  //         "popularity": 0.6,
  //         "profile_path": "/yRa4D6pAXOvWT70dcYBnGGrXfN6.jpg",
  //         "cast_id": 65,
  //         "character": "Blonde Beauty",
  //         "credit_id": "63c9a80368afd600a4964482",
  //         "order": 26
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 1896050,
  //         "known_for_department": "Acting",
  //         "name": "Leonardo Salerni",
  //         "original_name": "Leonardo Salerni",
  //         "popularity": 1.214,
  //         "profile_path": "/7QmRpvHtUb5ayD7dSuI3BonksE9.jpg",
  //         "cast_id": 13,
  //         "character": "Vito Rossi",
  //         "credit_id": "613fa11a60c751008d8988d7",
  //         "order": 27
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 3881666,
  //         "known_for_department": "Acting",
  //         "name": "David Meden",
  //         "original_name": "David Meden",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "cast_id": 66,
  //         "character": "Government Official",
  //         "credit_id": "63c9a84cbb070d0087fe1164",
  //         "order": 28
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 3881667,
  //         "known_for_department": "Acting",
  //         "name": "Lorenzo Malaguti",
  //         "original_name": "Lorenzo Malaguti",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "cast_id": 67,
  //         "character": "Engraver",
  //         "credit_id": "63c9a862bb070d007c80b8b5",
  //         "order": 29
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2184140,
  //         "known_for_department": "Acting",
  //         "name": "Nicoletta Cefaly",
  //         "original_name": "Nicoletta Cefaly",
  //         "popularity": 0.689,
  //         "profile_path": null,
  //         "cast_id": 68,
  //         "character": "Neigbor",
  //         "credit_id": "63c9a87bed96bc00c394726b",
  //         "order": 30
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 996844,
  //         "known_for_department": "Acting",
  //         "name": "Marco Quaglia",
  //         "original_name": "Marco Quaglia",
  //         "popularity": 3.115,
  //         "profile_path": "/w2oRqYtVa8B3ALOrBqajwp72YQf.jpg",
  //         "cast_id": 69,
  //         "character": "Doctor",
  //         "credit_id": "63c9a890ed96bc0091aa22d7",
  //         "order": 31
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2064634,
  //         "known_for_department": "Acting",
  //         "name": "Beatrice Cevolani",
  //         "original_name": "Beatrice Cevolani",
  //         "popularity": 0.652,
  //         "profile_path": null,
  //         "cast_id": 70,
  //         "character": "Doctor",
  //         "credit_id": "63c9a89c006b01009678357d",
  //         "order": 32
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 2463372,
  //         "known_for_department": "Acting",
  //         "name": "Elles Case",
  //         "original_name": "Elles Case",
  //         "popularity": 0.6,
  //         "profile_path": "/qdCv8HETXdRJkQoWXhS5j5MAW2L.jpg",
  //         "cast_id": 71,
  //         "character": "Ferrari Model",
  //         "credit_id": "63f742991f331900843b1acc",
  //         "order": 33
  //       }
  //     ],
  //     "crew": [
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 23580,
  //         "known_for_department": "Production",
  //         "name": "Sharon Howard-Field",
  //         "original_name": "Sharon Howard-Field",
  //         "popularity": 1.96,
  //         "profile_path": null,
  //         "credit_id": "63575de8d399e60082315138",
  //         "department": "Production",
  //         "job": "Casting"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 39614,
  //         "known_for_department": "Camera",
  //         "name": "Blasco Giurato",
  //         "original_name": "Blasco Giurato",
  //         "popularity": 1.4,
  //         "profile_path": "/jgrj6D4uTbCbI3JKrItVsiISdcY.jpg",
  //         "credit_id": "63575e8bd18fb900825ed693",
  //         "department": "Camera",
  //         "job": "Director of Photography"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 65814,
  //         "known_for_department": "Production",
  //         "name": "Barry Brooker",
  //         "original_name": "Barry Brooker",
  //         "popularity": 2.362,
  //         "profile_path": null,
  //         "credit_id": "63575ed5a9117f007d861a8b",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 65840,
  //         "known_for_department": "Sound",
  //         "name": "Tuomas Kantelinen",
  //         "original_name": "Tuomas Kantelinen",
  //         "popularity": 1.96,
  //         "profile_path": "/cjcLGFO1WF9DybDTH745vtdM34H.jpg",
  //         "credit_id": "63575e34a9117f007a06d450",
  //         "department": "Sound",
  //         "job": "Original Music Composer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 81685,
  //         "known_for_department": "Acting",
  //         "name": "Frank Grillo",
  //         "original_name": "Frank Grillo",
  //         "popularity": 21.317,
  //         "profile_path": "/br2nPzelch2Tb3pZHnYAbXng7cz.jpg",
  //         "credit_id": "63575e96d6c3000091613f56",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 94047,
  //         "known_for_department": "Production",
  //         "name": "Stan Wertlieb",
  //         "original_name": "Stan Wertlieb",
  //         "popularity": 2.117,
  //         "profile_path": null,
  //         "credit_id": "63575edfa06efe007f297370",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 137064,
  //         "known_for_department": "Writing",
  //         "name": "Bobby Moresco",
  //         "original_name": "Bobby Moresco",
  //         "popularity": 10.497,
  //         "profile_path": "/5vaD8bwPyI8vBC6hwncrxVtl8ca.jpg",
  //         "credit_id": "63575db0385202007dd1c761",
  //         "department": "Writing",
  //         "job": "Screenplay"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 137064,
  //         "known_for_department": "Writing",
  //         "name": "Bobby Moresco",
  //         "original_name": "Bobby Moresco",
  //         "popularity": 10.497,
  //         "profile_path": "/5vaD8bwPyI8vBC6hwncrxVtl8ca.jpg",
  //         "credit_id": "613fa0b99979d20023c88a16",
  //         "department": "Directing",
  //         "job": "Director"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 550306,
  //         "known_for_department": "Camera",
  //         "name": "Gian Filippo Corticelli",
  //         "original_name": "Gian Filippo Corticelli",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575e82f8e982007c5e0d05",
  //         "department": "Camera",
  //         "job": "Director of Photography"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 1,
  //         "id": 1099631,
  //         "known_for_department": "Editing",
  //         "name": "Kayla Emter",
  //         "original_name": "Kayla Emter",
  //         "popularity": 1.4,
  //         "profile_path": "/K32r12Foxhh6vHAZiAGHUJ6sDh.jpg",
  //         "credit_id": "63575e5c385202007a03b031",
  //         "department": "Editing",
  //         "job": "Editor"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1162649,
  //         "known_for_department": "Costume & Make-Up",
  //         "name": "Paola Marchesin",
  //         "original_name": "Paola Marchesin",
  //         "popularity": 1.4,
  //         "profile_path": null,
  //         "credit_id": "63575e02d18fb9007ab43850",
  //         "department": "Costume & Make-Up",
  //         "job": "Costume Design"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1188993,
  //         "known_for_department": "Production",
  //         "name": "Jeff Bowler",
  //         "original_name": "Jeff Bowler",
  //         "popularity": 0.828,
  //         "profile_path": null,
  //         "credit_id": "63575ea59b8616007a2981ef",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 2,
  //         "id": 1276565,
  //         "known_for_department": "Production",
  //         "name": "Andrea Iervolino",
  //         "original_name": "Andrea Iervolino",
  //         "popularity": 3.319,
  //         "profile_path": "/fYcOinCNh1HMZIcGkO3TXGj3c1Q.jpg",
  //         "credit_id": "613f9cfe9450fe0064ed9791",
  //         "department": "Production",
  //         "job": "Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1382242,
  //         "known_for_department": "Production",
  //         "name": "Bruno Rosato",
  //         "original_name": "Bruno Rosato",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575df6945d36007a2f838b",
  //         "department": "Production",
  //         "job": "Casting"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1385132,
  //         "known_for_department": "Production",
  //         "name": "Monika Bacardi",
  //         "original_name": "Monika Bacardi",
  //         "popularity": 1.4,
  //         "profile_path": null,
  //         "credit_id": "613fa16e60c7510042ecdb1f",
  //         "department": "Production",
  //         "job": "Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1610474,
  //         "known_for_department": "Production",
  //         "name": "Guglielmo Marchetti",
  //         "original_name": "Guglielmo Marchetti",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "614af67e2b531d006250de0b",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1632727,
  //         "known_for_department": "Production",
  //         "name": "Julien Favre",
  //         "original_name": "Julien Favre",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575ecad6c300007ddc1e73",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1782239,
  //         "known_for_department": "Production",
  //         "name": "Danielle Maloni",
  //         "original_name": "Danielle Maloni",
  //         "popularity": 1.264,
  //         "profile_path": null,
  //         "credit_id": "63575eebc9dbf9007a008610",
  //         "department": "Production",
  //         "job": "Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1794062,
  //         "known_for_department": "Art",
  //         "name": "Mauro Vanzati",
  //         "original_name": "Mauro Vanzati",
  //         "popularity": 1.4,
  //         "profile_path": null,
  //         "credit_id": "613fa153d236e6002632b518",
  //         "department": "Art",
  //         "job": "Production Design"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1813459,
  //         "known_for_department": "Directing",
  //         "name": "Sergio Navarretta",
  //         "original_name": "Sergio Navarretta",
  //         "popularity": 1.22,
  //         "profile_path": null,
  //         "credit_id": "63575ebe5f4b73007b86e9ed",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 1890521,
  //         "known_for_department": "Acting",
  //         "name": "Akiko Kusayanagi",
  //         "original_name": "Akiko Kusayanagi",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575e24b9a0bd007e370dc2",
  //         "department": "Costume & Make-Up",
  //         "job": "Costume Design"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2024503,
  //         "known_for_department": "Production",
  //         "name": "Marita D'Elia",
  //         "original_name": "Marita D'Elia",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575de043250f007d05612d",
  //         "department": "Production",
  //         "job": "Casting"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2036220,
  //         "known_for_department": "Production",
  //         "name": "Bret Saxon",
  //         "original_name": "Bret Saxon",
  //         "popularity": 1.128,
  //         "profile_path": null,
  //         "credit_id": "63575e9ed399e6008231519a",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2262155,
  //         "known_for_department": "Production",
  //         "name": "Allen Dam",
  //         "original_name": "Allen Dam",
  //         "popularity": 1.22,
  //         "profile_path": null,
  //         "credit_id": "63575ef1d18fb900825ed6d1",
  //         "department": "Production",
  //         "job": "Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 2907275,
  //         "known_for_department": "Production",
  //         "name": "Roman Kopelevich",
  //         "original_name": "Roman Kopelevich",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575eb29b8616007d5d3aa9",
  //         "department": "Production",
  //         "job": "Executive Producer"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 3233504,
  //         "known_for_department": "Writing",
  //         "name": "Tonino Lamborghini",
  //         "original_name": "Tonino Lamborghini",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575dbc3852020082c50fb6",
  //         "department": "Writing",
  //         "job": "Book"
  //       },
  //       {
  //         "adult": false,
  //         "gender": 0,
  //         "id": 3289704,
  //         "known_for_department": "Art",
  //         "name": "Tiberio Caporossi",
  //         "original_name": "Tiberio Caporossi",
  //         "popularity": 0.6,
  //         "profile_path": null,
  //         "credit_id": "63575e4b56b9f7007b150a32",
  //         "department": "Art",
  //         "job": "Production Design"
  //       }
  //     ]
  //   }
  // }
  console.log(data);

  const isFavorited = false
  const isWatchlisted = false
  const addToFavorites = () => {

  }
  const addToWatchlist = () => {

  }

  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        {
          isFetching && <Loader width={10} />
        }
        {
          error && <Link to={'/'}>
            Something went wrong !<br />
            <i className="uil uil-arrow-left"></i> Please go back
          </Link>
        }
        {
          !isFetching && !error && <>
            {/* Movie Image, Information & Suggestions container */}
            <div className="grid gap-8 lg:gap-0 lg:grid-cols-3">

              {/* Image Container */}
              <div className="">
                <img
                  alt={data.title}
                  src={data.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                    : 'https://murphys-movies.vercel.app/movie-poster-placeholder.svg'}
                  className="shadow-lg shadow-slate-900 rounded-lg object-contain mx-auto w-[80%]"
                />
              </div>

              {/* Information Conatiner */}
              <div className="mx-auto w-[90%] lg:col-span-2">
                {/* Title */}
                <h2 className="font-semibold text-center text-2xl lg:text-3xl">
                  {data?.title} ({data.release_date.split('-')[0]})
                </h2>

                {/* Tag line */}
                <h3 className="mt-8 text-center">
                  {data?.tagline}
                </h3>

                {/* Rating, Duration & Language */}
                <div className="flex justify-between sm:justify-around items-center mt-8">
                  <div>
                    <Rating rating={data?.vote_average} />
                    &emsp;
                    <span className="text-xs sm:text-sm text-gray-500 font-semibold">
                      {data?.vote_average} / 10
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500 font-semibold">
                      {data?.runtime}m{data?.spoken_languages.length > 0 ? ` / ${data.spoken_languages[0].name}` : ""}
                    </span>
                  </div>
                </div>

                {/* Genres */}
                <div className="flex items-center justify-around mt-8">
                  {
                    data?.genres?.map(genre => (
                      <Link
                        className="flex flex-col sm:flex-row gap-2 items-center justify-center"
                        onClick={() => dispatch(selectGenreIdOrCategoryName(genre?.id))}
                        to="/"
                      >
                        <img
                          className="w-6 dark:invert"
                          src={genreIcons[genre?.name.toLowerCase()]}
                          alt="genre-icon"
                        />
                        {genre?.name}
                      </Link>
                    ))
                  }
                </div>

                {/* Overview */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4 text-xl">
                    Overview
                  </h3>
                  <p>{data?.overview}</p>
                </div>

                {/* Top cast */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-8 text-xl">
                    Top Cast
                  </h3>
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
                    {
                      data && data.credits?.cast?.map((character, i) => (
                        character.profile_path &&
                        <Link to={`/actors/${character.id}`}>
                          <img
                            className="object-cover rounded-lg max-w-[7rem] mx-auto mb-2"
                            src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                            alt={character?.name}
                          />
                          <p className="text-xs sm:text-sm text-center">
                            {character?.name}
                          </p>
                          <p className="text-xs sm:text-sm text-center text-gray-500">
                            {character?.character.split('/')[0]}
                          </p>
                        </Link>
                      )).slice(0, 6)
                    }
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8">
                  {/* Button group 1 */}
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
                    <button
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm"
                      target="_blank" rel="noopener noreferrer"
                      href={data?.homepage}
                    >
                      Website <i className="uil uil-globe"></i>
                    </button>
                    <button
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm"
                      target="_blank" rel="noopener noreferrer"
                      href={`https://www.imdb.com/title/${data?.imdb_id}`}
                    >
                      IMDB <i class="uil uil-film"></i>
                    </button>
                    <button
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm"
                      href="#"
                      onClick={() => { }}
                    >
                      Trailer <i class="uil uil-youtube"></i>
                    </button>
                    <button
                      className={`border-2 border-gray-500 px-2 py-1 rounded-md text-sm ${isFavorited ? "bg-gray-200 text-black" : ""}`}
                      onClick={addToFavorites}
                      disabled={isFavorited}
                    >
                      Favorite <i class="uil uil-heart"></i>
                    </button>
                    <button
                      className={`border-2 border-gray-500 px-2 py-1 rounded-md text-sm ${isWatchlisted ? "bg-gray-200 text-black" : ""}`}
                      onClick={addToWatchlist}
                      disabled={isWatchlisted}
                    >
                      Watchlist <i class="uil uil-10-plus"></i>
                    </button>
                    <Link
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm text-center"
                      to="/"
                      onClick={() => { }}
                    >
                      Back <i class="uil uil-arrow-left"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Suggestions - You might also like */}
            </div>
          </>
        }
      </div>
    </main>
  )
}

export default MovieInformation
