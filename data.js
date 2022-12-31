var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0176864951620459,
          "pitch": 0.31697095087081806,
          "rotation": 0,
          "target": "1-logo-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-logo-junction",
      "name": "Logo Junction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.077654747038256,
          "pitch": 0.21282902619707755,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.9893938358475918,
          "pitch": 0.22253955483466825,
          "rotation": 1.5707963267948966,
          "target": "2-chemical-laboratory-entrance"
        },
        {
          "yaw": -0.6334691188474171,
          "pitch": 0.22493271495019584,
          "rotation": 4.71238898038469,
          "target": "7-cit-main-block-path"
        },
        {
          "yaw": 0.1365870105196869,
          "pitch": 0.20305876078555052,
          "rotation": 0,
          "target": "19-library-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-chemical-laboratory-entrance",
      "name": "Chemical Laboratory Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.088226486140659,
          "pitch": 0.26901484026534206,
          "rotation": 0,
          "target": "1-logo-junction"
        },
        {
          "yaw": -0.03239099643178989,
          "pitch": 0.10559414151875401,
          "rotation": 0,
          "target": "4-eee-laboratory-entrance"
        },
        {
          "yaw": -1.6473637668769534,
          "pitch": 0.188543291986484,
          "rotation": 0,
          "target": "3-chemical-lab-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chemical-lab-inside",
      "name": "Chemical Lab Inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.002490386342227424,
          "pitch": 0.1522606439579235,
          "rotation": 0,
          "target": "2-chemical-laboratory-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-eee-laboratory-entrance",
      "name": "EEE Laboratory Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.128778859963397,
          "pitch": 0.14116521562865358,
          "rotation": 0,
          "target": "2-chemical-laboratory-entrance"
        },
        {
          "yaw": -1.541602362714018,
          "pitch": 0.23758246789735793,
          "rotation": 0,
          "target": "5-eee-lab-inside"
        },
        {
          "yaw": 0.020616780032144177,
          "pitch": 0.12886389537886167,
          "rotation": 0,
          "target": "6-cit-xerox-shop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-eee-lab-inside",
      "name": "EEE Lab Inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0991725937960712,
          "pitch": 0.3454215982957507,
          "rotation": 0,
          "target": "4-eee-laboratory-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cit-xerox-shop",
      "name": "CIT Xerox Shop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.9185041666994174,
        "pitch": 0.2673055487082898,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.10911814577446322,
          "pitch": 0.1382220764990425,
          "rotation": 0,
          "target": "4-eee-laboratory-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cit-main-block-path",
      "name": "CIT Main Block Path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0539157254816143,
          "pitch": 0.14326735317779793,
          "rotation": 0,
          "target": "1-logo-junction"
        },
        {
          "yaw": -1.564977831564521,
          "pitch": 0.26909966514668504,
          "rotation": 0,
          "target": "8-auditorium-entrance"
        },
        {
          "yaw": -0.0029456700215746423,
          "pitch": 0.15199260967144745,
          "rotation": 0,
          "target": "10-oat-junction"
        },
        {
          "yaw": 1.5105686683777968,
          "pitch": 0.13547319831231164,
          "rotation": 0,
          "target": "12-main-block-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-auditorium-entrance",
      "name": "Auditorium Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.081530199471688,
          "pitch": 0.14798074510245485,
          "rotation": 0,
          "target": "7-cit-main-block-path"
        },
        {
          "yaw": -0.08814103257816264,
          "pitch": 0.1628615711858874,
          "rotation": 0,
          "target": "9-auditorium-full-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-auditorium-full-view",
      "name": "Auditorium Full View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05884534063598146,
          "pitch": 0.18033461402174034,
          "rotation": 0,
          "target": "8-auditorium-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-oat-junction",
      "name": "OAT Junction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5360883367725044,
          "pitch": 0.1787201441656503,
          "rotation": 7.0685834705770345,
          "target": "7-cit-main-block-path"
        },
        {
          "yaw": -1.1866677101937118,
          "pitch": 0.3534811095041501,
          "rotation": 5.497787143782138,
          "target": "11-oat-ground"
        },
        {
          "yaw": 0.038143342680552195,
          "pitch": 0.17349138889630922,
          "rotation": 0,
          "target": "15-tlc-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-oat-ground",
      "name": "OAT Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3242157092154976,
          "pitch": 0.15747116267594308,
          "rotation": 0,
          "target": "10-oat-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-main-block-reception",
      "name": "Main Block Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6138726002519057,
          "pitch": 0.2461778778117747,
          "rotation": 0,
          "target": "7-cit-main-block-path"
        },
        {
          "yaw": -1.5189770093988528,
          "pitch": 0.21253255757558165,
          "rotation": 0,
          "target": "13-main-block-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-main-block-corridor",
      "name": "Main Block Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5700050975740645,
          "pitch": 0.5723453787198771,
          "rotation": 0,
          "target": "12-main-block-reception"
        },
        {
          "yaw": 0.05348480407342748,
          "pitch": 0.19538377509989147,
          "rotation": 0,
          "target": "14-main-block--junction"
        },
        {
          "yaw": -3.0867142507072742,
          "pitch": 0.21954258059968268,
          "rotation": 0,
          "target": "14-main-block--junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-main-block--junction",
      "name": "Main Block  Junction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05792213427578474,
          "pitch": 0.18393173299329746,
          "rotation": 0,
          "target": "13-main-block-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-tlc-block",
      "name": "TLC Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.7388444343222549,
        "pitch": -0.05549554524398914,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.09370032208707713,
          "pitch": 0.19477194703271294,
          "rotation": 0,
          "target": "10-oat-junction"
        },
        {
          "yaw": 1.746941265172837,
          "pitch": 0.19195739317160054,
          "rotation": 0,
          "target": "16-tlc-block-inside"
        },
        {
          "yaw": -2.997947055456777,
          "pitch": 0.2430266014078164,
          "rotation": 0,
          "target": "18-msc-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-tlc-block-inside",
      "name": "TLC Block Inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0729015622560283,
          "pitch": 0.40618627247585337,
          "rotation": 0,
          "target": "15-tlc-block"
        },
        {
          "yaw": -0.014410324019948462,
          "pitch": 0.46756736607322225,
          "rotation": 0,
          "target": "17-tlc-centre-of-excellence"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-tlc-centre-of-excellence",
      "name": "TLC Centre Of Excellence",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9893889689345627,
          "pitch": 0.3256569391757971,
          "rotation": 6.283185307179586,
          "target": "16-tlc-block-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-msc-block",
      "name": "MSC Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.110311417639556,
          "pitch": 0.26288848914679086,
          "rotation": 0,
          "target": "15-tlc-block"
        },
        {
          "yaw": -5.077206211012708e-9,
          "pitch": 0.33715109389343034,
          "rotation": 0,
          "target": "19-library-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-library-junction",
      "name": "Library Junction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.008366526658822,
        "pitch": 0.09635437981454587,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.007766600531725842,
          "pitch": 0.2989688867859357,
          "rotation": 0,
          "target": "1-logo-junction"
        },
        {
          "yaw": 1.7042361735803597,
          "pitch": 0.2942158373331978,
          "rotation": 0,
          "target": "18-msc-block"
        },
        {
          "yaw": 3.083177703738155,
          "pitch": 0.3577774250953176,
          "rotation": 0,
          "target": "23-library-block"
        },
        {
          "yaw": -1.5888390475245338,
          "pitch": 0.35923567971668113,
          "rotation": 0,
          "target": "40-metallurgy-lab"
        },
        {
          "yaw": 1.8570615685043084,
          "pitch": 0.1138696451858987,
          "rotation": 7.0685834705770345,
          "target": "20-cit-library"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-cit-library",
      "name": "CIT Library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.904174809467005,
          "pitch": 0.42798387015218076,
          "rotation": 0,
          "target": "19-library-junction"
        },
        {
          "yaw": -0.9705175516524207,
          "pitch": 0.36470362681611235,
          "rotation": 4.71238898038469,
          "target": "21-library-inside-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-library-inside-view",
      "name": "Library Inside View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7837006762900147,
          "pitch": 0.34554709772075753,
          "rotation": 4.71238898038469,
          "target": "20-cit-library"
        },
        {
          "yaw": -0.8363946149911605,
          "pitch": 0.34316100102770264,
          "rotation": 10.995574287564278,
          "target": "22-library-study-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-library-study-area",
      "name": "Library Study Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8663179594700381,
          "pitch": 0.16658485234519382,
          "rotation": 4.71238898038469,
          "target": "21-library-inside-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-library-block",
      "name": "Library Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.115180238383605,
          "pitch": 0.2681611685923464,
          "rotation": 0,
          "target": "19-library-junction"
        },
        {
          "yaw": 0.7846295205892879,
          "pitch": 0.27526300228849365,
          "rotation": 1.5707963267948966,
          "target": "25-it-block"
        },
        {
          "yaw": -0.7069546623483411,
          "pitch": 0.266734979958942,
          "rotation": 4.71238898038469,
          "target": "24-library-seminar-hall"
        },
        {
          "yaw": 0.014727314589070062,
          "pitch": 0.2004983663543598,
          "rotation": 0,
          "target": "27-temple-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-library-seminar-hall",
      "name": "Library Seminar Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2317899503386318,
          "pitch": 0.37379504465933167,
          "rotation": 5.497787143782138,
          "target": "23-library-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-it-block",
      "name": "IT Block",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.129731166961661,
          "pitch": 0.4030805118864311,
          "rotation": 0,
          "target": "23-library-block"
        },
        {
          "yaw": -0.22024075520337938,
          "pitch": 0.1596037442452385,
          "rotation": 5.497787143782138,
          "target": "26-it-seminar-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-it-seminar-hall",
      "name": "IT Seminar Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.074796145602546,
          "pitch": 0.3474948439519103,
          "rotation": 1.5707963267948966,
          "target": "25-it-block"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-temple-view",
      "name": "Temple View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0905483299160625,
          "pitch": 0.32409399857961674,
          "rotation": 0,
          "target": "23-library-block"
        },
        {
          "yaw": 0.7001028825243338,
          "pitch": 0.3319228725862917,
          "rotation": 13.351768777756625,
          "target": "28-canteen-outside-view"
        },
        {
          "yaw": 0.02650486288134779,
          "pitch": 0.27276762139866406,
          "rotation": 0,
          "target": "33-cricket-ground-outside-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-canteen-outside-view",
      "name": "Canteen Outside View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1282654433529853,
          "pitch": 0.11036127670012696,
          "rotation": 0,
          "target": "27-temple-view"
        },
        {
          "yaw": 1.9768746140045526,
          "pitch": 0.14150963588397225,
          "rotation": 13.351768777756625,
          "target": "30-cit-canteen"
        },
        {
          "yaw": 1.6684604902993732,
          "pitch": 0.28882314431835177,
          "rotation": 0,
          "target": "29-cit-mess-a"
        },
        {
          "yaw": -0.017672241069616845,
          "pitch": 0.3026042397220152,
          "rotation": 0,
          "target": "31-cit-atm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-cit-mess-a",
      "name": "CIT Mess A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6052997475863418,
          "pitch": 0.43753754578193416,
          "rotation": 0,
          "target": "28-canteen-outside-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-cit-canteen",
      "name": "CIT Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.902418932175669,
          "pitch": 0.17133282799328597,
          "rotation": 1.5707963267948966,
          "target": "28-canteen-outside-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-cit-atm",
      "name": "CIT ATM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.105201825323733,
          "pitch": 0.31942780260103376,
          "rotation": 0,
          "target": "28-canteen-outside-view"
        },
        {
          "yaw": -0.05884541117168318,
          "pitch": 0.2226691003754091,
          "rotation": 0,
          "target": "32-basket-ball-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-basket-ball-ground",
      "name": "Basket Ball Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.73519849324137,
          "pitch": 0.14962439343819156,
          "rotation": 5.497787143782138,
          "target": "31-cit-atm"
        },
        {
          "yaw": 2.343370200872327,
          "pitch": 0.09757981141301464,
          "rotation": 5.497787143782138,
          "target": "36-rainwater-harvesting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-cricket-ground-outside-",
      "name": "Cricket Ground Outside ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5743017640008148,
          "pitch": 0.3643305587606669,
          "rotation": 0,
          "target": "27-temple-view"
        },
        {
          "yaw": 1.0016254505544957,
          "pitch": 0.1837930466740012,
          "rotation": 4.71238898038469,
          "target": "34-cricket-ground"
        },
        {
          "yaw": 1.5168875703537594,
          "pitch": 0.2669340485819358,
          "rotation": 0,
          "target": "35-tennis-ground-path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-cricket-ground",
      "name": "Cricket Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.350838185636011,
          "pitch": 0.16678842549454664,
          "rotation": 4.71238898038469,
          "target": "33-cricket-ground-outside-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-tennis-ground-path",
      "name": "Tennis Ground Path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0886069053361354,
          "pitch": 0.32129162406577905,
          "rotation": 0,
          "target": "33-cricket-ground-outside-"
        },
        {
          "yaw": 0.017672421689775675,
          "pitch": 0.4209158099538488,
          "rotation": 0,
          "target": "36-rainwater-harvesting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-rainwater-harvesting",
      "name": "Rainwater Harvesting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.894759260136718,
          "pitch": 0.5469948309409123,
          "rotation": 0,
          "target": "35-tennis-ground-path"
        },
        {
          "yaw": -0.026504767953163366,
          "pitch": 0.3707200006095448,
          "rotation": 0,
          "target": "37-palani-hostel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-palani-hostel",
      "name": "Palani Hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1056062424950603,
          "pitch": 0.28781035065300564,
          "rotation": 0,
          "target": "36-rainwater-harvesting"
        },
        {
          "yaw": -0.8494327746942325,
          "pitch": 0.19962146390409785,
          "rotation": 5.497787143782138,
          "target": "38-thirumalai-hostel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-thirumalai-hostel",
      "name": "Thirumalai Hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8105471805249316,
          "pitch": 0.24848906560020723,
          "rotation": 7.853981633974483,
          "target": "37-palani-hostel"
        },
        {
          "yaw": -3.108275860506117,
          "pitch": 0.387811275841468,
          "rotation": 0,
          "target": "39-velliangiri-hostel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-velliangiri-hostel",
      "name": "Velliangiri Hostel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.27257991790827063,
        "pitch": -0.01338352660916442,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.8185632675071668,
          "pitch": 0.38626393343870014,
          "rotation": 0,
          "target": "38-thirumalai-hostel"
        },
        {
          "yaw": -1.407792496399047,
          "pitch": 0.36671790738556354,
          "rotation": 0,
          "target": "10-oat-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-metallurgy-lab",
      "name": "Metallurgy Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.66029926311574,
          "pitch": 0.31749057602662134,
          "rotation": 0,
          "target": "19-library-junction"
        },
        {
          "yaw": -3.1047472088478045,
          "pitch": 0.3375329218803067,
          "rotation": 0,
          "target": "28-canteen-outside-view"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
