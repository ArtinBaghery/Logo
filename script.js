const carsDatabase = {
    /* 1 */
    bmw: {
        brandName: "BMW",
        logo: "logos/bmw.png",
        banner: "cars/bmw-banner.jpg",
        description: "Leader in engineering German sport and luxury cars",
        models: {
            model1: { name: "M5 CS", desc: "4.4L V8 Turbo 635 HP • 0-100: 3.0s" },
            model2: { name: "i7 M70", desc: "Electric 660 HP • Range: 560 km" },
            model3: { name: "X3 M Competition", desc: "3.0L Turbo 510 HP" }
        }
    },

    /* 2 */
    mercedes: {
        brandName: "Mercedes-Benz",
        logo: "logos/mercedes.png",
        banner: "cars/mercedes-banner.jpg",
        description: "Combination of German luxury and advanced technology",
        models: {
            model1: { name: "AMG One", desc: "1.6L V6 + electric motor • 1200 HP" },
            model2: { name: "EQS SUV", desc: "Electric 536 HP • Range 660 km" },
            model3: { name: "G63 4x4²", desc: "Off-roader 585 HP • 1.3m height" }
        }
    },

    /* 3 */
    ferrari: {
        brandName: "Ferrari",
        logo: "logos/ferrari.png",
        banner: "cars/ferrari-banner.jpg",
        description: "Legendary Italian sports cars",
        models: {
            model1: { name: "SF90 XX Stradale", desc: "4.0L V8 + 3 electric motors • 1030 HP" },
            model2: { name: "Daytona SP3", desc: "6.5L V12 • 829 HP" },
            model3: { name: "Purosangue", desc: "First Ferrari SUV • 6.5L V12" }
        }
    },

    /* 4 */
    volkswagen: {
        brandName: "Volkswagen",
        logo: "logos/volkswagen.png",
        banner: "cars/volkswagen-banner.jpg",
        description: "German automotive giant with diverse products",
        models: {
            model1: { name: "Golf R", desc: "2.0L Turbo 315 HP • 0-100: 4.7s" },
            model2: { name: "ID. Buzz", desc: "Electric • Range 423 km" },
            model3: { name: "Touareg R", desc: "PHEV SUV • 462 HP" }
        }
    },

    /* 5 */
    opel: {
        brandName: "Opel",
        logo: "logos/opel.png",
        banner: "cars/opel-banner.jpg",
        description: "German automaker with practical design",
        models: {
            model1: { name: "Manta GSe ElektroMOD", desc: "Electric • Retro design" },
            model2: { name: "Corsa-e Rally", desc: "Electric race version" },
            model3: { name: "Grandland GSe", desc: "PHEV • 300 HP" }
        }
    },

    /* 6 */
    ford: {
        brandName: "Ford",
        logo: "logos/ford.png",
        banner: "cars/ford-banner.jpg",
        description: "Icon of American automotive",
        models: {
            model1: { name: "GT Mk IV", desc: "3.5L V6 • 800 HP • Limited to 67 units" },
            model2: { name: "Bronco DR", desc: "Off-roader 400 HP" },
            model3: { name: "Mustang Mach-E 1400", desc: "Electric 1400 HP" }
        }
    },

    /* 7 */
    fordmustang: {
        brandName: "Ford Mustang",
        logo: "logos/ford-mustang.png",
        banner: "cars/ford-mustang-banner.jpg",
        description: "American muscle legend",
        models: {
            model1: { name: "Mustang Shelby GT500", desc: "5.2L V8 Supercharged • 760 HP" },
            model2: { name: "Mustang Dark Horse", desc: "5.0L V8 • 500 HP" },
            model3: { name: "Mustang GTD", desc: "Road-legal race version • 800+ HP" }
        }
    },

    /* 8 */
    chevrolet: {
        brandName: "Chevrolet",
        logo: "logos/chevrolet.png",
        banner: "cars/chevrolet-banner.jpg",
        description: "Classic American automaker",
        models: {
            model1: { name: "Corvette Z06", desc: "5.5L V8 • 670 HP" },
            model2: { name: "Silverado EV", desc: "Electric • 664 HP" },
            model3: { name: "Camaro ZL1 1LE", desc: "6.2L V8 • 650 HP" }
        }
    },

    /* 9 */
    dodge: {
        brandName: "Dodge",
        logo: "logos/dodge.png",
        banner: "cars/dodge-banner.jpg",
        description: "Leader in muscle cars",
        models: {
            model1: { name: "Challenger SRT Demon 170", desc: "6.2L HEMI • 1025 HP with E85" },
            model2: { name: "Charger Daytona SRT", desc: "Electric • 800+ HP" },
            model3: { name: "Durango Hellcat", desc: "SUV • 710 HP" }
        }
    },

    /* 10 */
    peugeot: {
        brandName: "Peugeot",
        logo: "logos/peugeot.png",
        banner: "cars/peugeot-banner.jpg",
        description: "French design with innovation",
        models: {
            model1: { name: "9X8 Hypercar", desc: "LMH race car" },
            model2: { name: "508 PSE", desc: "Hybrid 360 HP" },
            model3: { name: "e-308", desc: "Electric • 156 HP" }
        }
    },

    /* 11 */
    tesla: {
        brandName: "Tesla",
        logo: "logos/tesla.png",
        banner: "cars/tesla-banner.jpg",
        description: "Revolutionizing the electric vehicle industry",
        models: {
            model1: { name: "Model S Plaid", desc: "1,020 HP • 0-100: 1.99s" },
            model2: { name: "Cybertruck Tri Motor", desc: "845 HP • Range 755 km" },
            model3: { name: "Roadster 2025", desc: "0-100 in 1.1s • Range 1,000 km" }
        }
    },

    /* 12 */
    rollsroyce: {
        brandName: "Rolls-Royce",
        logo: "logos/rollsroyce.png",
        banner: "cars/rollsroyce-banner.jpg",
        description: "Ultimate symbol of luxury",
        models: {
            model1: { name: "Phantom Series II", desc: "6.75L V12 • 571 HP" },
            model2: { name: "Spectre", desc: "Electric • 585 HP" },
            model3: { name: "Boat Tail", desc: "Custom $28 million model" }
        }
    },

    /* 13 */
    bentley: {
        brandName: "Bentley",
        logo: "logos/bentley.png",
        banner: "cars/bentley-banner.jpg",
        description: "Combination of luxury and power",
        models: {
            model1: { name: "Batur", desc: "6.0L W12 • 740 HP • Limited to 18 units" },
            model2: { name: "Continental GT Speed", desc: "6.0L W12 • 659 HP" },
            model3: { name: "Mulliner Bacalar", desc: "Limited edition (12 units)" }
        }
    },

    /* 14 */
    lamborghini: {
        brandName: "Lamborghini",
        logo: "logos/lamborghini.png",
        banner: "cars/lamborghini-banner.jpg",
        description: "Aggressive Italian design",
        models: {
            model1: { name: "Revuelto", desc: "6.5L V12 + 3 electric motors • 1,001 HP" },
            model2: { name: "Huracan Sterrato", desc: "First off-road supercar" },
            model3: { name: "Lanzador", desc: "Electric concept car" }
        }
    },

    /* 15 */
    porsche: {
        brandName: "Porsche",
        logo: "logos/porsche.png",
        banner: "cars/porsche-banner.jpg",
        description: "Precision German engineering",
        models: {
            model1: { name: "911 GT3 RS", desc: "4.0L • 525 HP" },
            model2: { name: "Mission X", desc: "Electric concept • 1:1 power ratio" },
            model3: { name: "Cayenne Turbo E-Hybrid", desc: "739 HP" }
        }
    },

    /* 16 */
    audi: {
        brandName: "Audi",
        logo: "logos/audi.png",
        banner: "cars/audi-banner.jpg",
        description: "Advanced quattro technology",
        models: {
            model1: { name: "RS e-tron GT", desc: "637 HP • 0-100: 3.3s" },
            model2: { name: "Q8 e-tron", desc: "Electric • Range 600 km" },
            model3: { name: "Activesphere", desc: "Off-road concept" }
        }
    },

    /* 17 */
    mclaren: {
        brandName: "McLaren",
        logo: "logos/mclaren.png",
        banner: "cars/mclaren-banner.jpg",
        description: "Formula One engineering for the road",
        models: {
            model1: { name: "750S", desc: "4.0L V8 • 740 HP" },
            model2: { name: "Solus GT", desc: "Single-seat race car • 840 HP" },
            model3: { name: "Artura Spider", desc: "Hybrid 700 HP" }
        }
    },

    /* 18 */
    bugatti: {
        brandName: "Bugatti",
        logo: "logos/bugatti.png",
        banner: "cars/bugatti-banner.jpg",
        description: "Pushing the boundaries of speed",
        models: {
            model1: { name: "Mistral", desc: "Final W16 model • 1,600 HP" },
            model2: { name: "Bolide", desc: "Pure race car • 1,825 HP" },
            model3: { name: "Centodieci", desc: "Tribute to EB110" }
        }
    },

    /* 19 */
    koenigsegg: {
        brandName: "Koenigsegg",
        logo: "logos/koenigsegg.png",
        banner: "cars/koenigsegg-banner.jpg",
        description: "Swedish innovation in hypercars",
        models: {
            model1: { name: "Jesko Absolut", desc: "1,600 HP • Top speed 531 km/h" },
            model2: { name: "Gemera", desc: "Family car 2.0L + 3 electric motors" },
            model3: { name: "CC850", desc: "50th anniversary • 1,385 HP" }
        }
    },

    /* 20 */
    pagani: {
        brandName: "Pagani",
        logo: "logos/pagani.png",
        banner: "cars/pagani-banner.jpg",
        description: "Italian moving art",
        models: {
            model1: { name: "Huayra R Evo", desc: "6.0L V12 • 838 HP" },
            model2: { name: "Utopia", desc: "New generation design" },
            model3: { name: "Codalunga", desc: "Long version Huayra" }
        }
    },

    /* 21 */
    jaguar: {
        brandName: "Jaguar",
        logo: "logos/jaguar.png",
        banner: "cars/jaguar-banner.jpg",
        description: "British design and pure performance",
        models: {
            model1: { name: "F-Type 75", desc: "5.0L V8 • 575 HP" },
            model2: { name: "XJ220 Legacy", desc: "Rebuilt classic model" },
            model3: { name: "Project 8", desc: "Limited edition (300 units)" }
        }
    },

    /* 22 */
    maserati: {
        brandName: "Maserati",
        logo: "logos/maserati.png",
        banner: "cars/maserati-banner.jpg",
        description: "Italian luxury with pure sound",
        models: {
            model1: { name: "MCXtrema", desc: "Race version of MC20" },
            model2: { name: "GranTurismo Folgore", desc: "Electric • 760 HP" },
            model3: { name: "Grecale GT", desc: "SUV • 530 HP" }
        }
    },

    /* 23 */
    genesis: {
        brandName: "Genesis",
        logo: "logos/genesis.png",
        banner: "cars/genesis-banner.jpg",
        description: "Hyundai's luxury brand",
        models: {
            model1: { name: "GV90", desc: "Flagship electric SUV" },
            model2: { name: "X Convertible", desc: "Electric convertible concept" },
            model3: { name: "Neolun", desc: "Hydrogen SUV concept" }
        }
    },

    /* 24 */
    astonmartin: {
        brandName: "Aston Martin",
        logo: "logos/astonmartin.png",
        banner: "cars/astonmartin-banner.jpg",
        description: "British style and pure power",
        models: {
            model1: { name: "Valkyrie AMR Pro", desc: "6.5L V12 • 1,160 HP" },
            model2: { name: "DB12 Volante", desc: "Convertible coupe 680 HP" },
            model3: { name: "Valhalla", desc: "Hybrid 937 HP" }
        }
    },

    /* 25 */
    mitsubishi: {
        brandName: "Mitsubishi",
        logo: "logos/mitsubishi.png",
        banner: "cars/mitsubishi-banner.jpg",
        description: "Specializing in four-wheel drive vehicles",
        models: {
            model1: { name: "Lancer Evolution Final Edition", desc: "Final version of the legend" },
            model2: { name: "Outlander PHEV", desc: "Hybrid • 248 HP" },
            model3: { name: "Xpander Cross", desc: "Off-road MPV" }
        }
    },

    /* 26 */
    lexus: {
        brandName: "Lexus",
        logo: "logos/lexus.png",
        banner: "cars/lexus-banner.jpg",
        description: "Toyota's luxury brand",
        models: {
            model1: { name: "LFA Nürburgring Edition", desc: "4.8L V10 • 562 HP" },
            model2: { name: "LC 500 Convertible", desc: "5.0L V8 • 471 HP" },
            model3: { name: "RZ 450e", desc: "Electric • 313 HP" }
        }
    },

    /* 27 */
    hyundai: {
        brandName: "Hyundai",
        logo: "logos/hyundai.png",
        banner: "cars/hyundai-banner.jpg",
        description: "Korean automaker with innovation",
        models: {
            model1: { name: "N Vision 74", desc: "Hydrogen concept • 670 HP" },
            model2: { name: "IONIQ 5 N", desc: "Electric • 641 HP" },
            model3: { name: "Santa Fe Hybrid", desc: "Hybrid • 226 HP" }
        }
    },

    /* 28 */
    jeep: {
        brandName: "Jeep",
        logo: "logos/jeep.png",
        banner: "cars/jeep-banner.jpg",
        description: "Leader in off-road vehicles",
        models: {
            model1: { name: "Wrangler 4xe", desc: "Hybrid • 375 HP" },
            model2: { name: "Grand Wagoneer L", desc: "Luxury SUV • 6.4L V8" },
            model3: { name: "Recon", desc: "Electric off-roader" }
        }
    },

    /* 29 */
    acura: {
        brandName: "Acura",
        logo: "logos/acura.png",
        banner: "cars/acura-banner.jpg",
        description: "Honda's luxury brand in America",
        models: {
            model1: { name: "NSX Type S", desc: "Hybrid 600 HP" },
            model2: { name: "Integra Type S", desc: "2.0L Turbo • 320 HP" },
            model3: { name: "ZDX", desc: "Electric • 500 HP" }
        }
    },

    /* 30 */
    buick: {
        brandName: "Buick",
        logo: "logos/buick.png",
        banner: "cars/buick-banner.jpg",
        description: "American semi-luxury automaker",
        models: {
            model1: { name: "Wildcat EV", desc: "Electric concept" },
            model2: { name: "Enclave Avenir", desc: "Luxury SUV" },
            model3: { name: "Electra E5", desc: "Electric • 268 HP" }
        }
    },

    /* 31 */
    ds: {
        brandName: "DS Automobiles",
        logo: "logos/ds.png",
        banner: "cars/ds-banner.jpg",
        description: "French luxury brand",
        models: {
            model1: { name: "DS 9 Opera", desc: "Luxury PHEV sedan" },
            model2: { name: "DS 4 E-Tense", desc: "Hybrid 225 HP" },
            model3: { name: "DS Aero Sport Lounge", desc: "Electric concept" }
        }
    },

    /* 32 */
    karma: {
        brandName: "Karma",
        logo: "logos/karma.png",
        banner: "cars/karma-banner.jpg",
        description: "Luxury hybrid vehicle manufacturer",
        models: {
            model1: { name: "Revero GT", desc: "Hybrid 536 HP" },
            model2: { name: "GS-6", desc: "Optimized Revero version" },
            model3: { name: "Gyesera", desc: "Electric • 590 HP" }
        }
    },

    /* 33 */
    nissan: {
        brandName: "Nissan",
        logo: "logos/nissan.png",
        banner: "cars/nissan-banner.jpg",
        description: "Japanese automaker with innovation",
        models: {
            model1: { name: "GT-R Nismo", desc: "3.8L V6 • 600 HP" },
            model2: { name: "Ariya Nismo", desc: "Electric • 429 HP" },
            model3: { name: "Z Nismo", desc: "3.0L V6 • 420 HP" }
        }
    },

    /* 34 */
    toyota: {
        brandName: "Toyota",
        logo: "logos/toyota.png",
        banner: "cars/toyota-banner.jpg",
        description: "World's largest automaker",
        models: {
            model1: { name: "GR Supra GT4", desc: "Race version" },
            model2: { name: "Mirai", desc: "Hydrogen • 182 HP" },
            model3: { name: "Land Cruiser 2024", desc: "Modern off-roader" }
        }
    },

    /* 35 */
    alfaromeo: {
        brandName: "Alfa Romeo",
        logo: "logos/alfaromeo.png",
        banner: "cars/alfaromeo-banner.jpg",
        description: "Italian driving emotion",
        models: {
            model1: { name: "Giulia GTA", desc: "2.9L V6 • 540 HP" },
            model2: { name: "Tonale Quadrifoglio", desc: "PHEV • 285 HP" },
            model3: { name: "33 Stradale", desc: "Limited to 33 units • 620 HP" }
        }
    },

    /* 36 */
    cadillac: {
        brandName: "Cadillac",
        logo: "logos/cadillac.png",
        banner: "cars/cadillac-banner.jpg",
        description: "American luxury automaker",
        models: {
            model1: { name: "Celestiq", desc: "Electric • 600 HP" },
            model2: { name: "CT5-V Blackwing", desc: "6.2L V8 • 668 HP" },
            model3: { name: "Escalade-V", desc: "SUV • 682 HP" }
        }
    },

    /* 37 */
    citroen: {
        brandName: "Citroën",
        logo: "logos/citroen.png",
        banner: "cars/citroen-banner.jpg",
        description: "French design with unmatched comfort",
        models: {
            model1: { name: "C5 X", desc: "PHEV crossover" },
            model2: { name: "Oli Concept", desc: "Electric concept" },
            model3: { name: "Ami", desc: "Urban electric vehicle" }
        }
    },

    /* 38 */
    honda: {
        brandName: "Honda",
        logo: "logos/honda.png",
        banner: "cars/honda-banner.jpg",
        description: "Japanese engineering with reliability",
        models: {
            model1: { name: "Civic Type R", desc: "2.0L Turbo • 315 HP" },
            model2: { name: "Prologue", desc: "Electric • 288 HP" },
            model3: { name: "CR-V Hybrid", desc: "Hybrid • 204 HP" }
        }
    },

    /* 39 */
    infiniti: {
        brandName: "Infiniti",
        logo: "logos/infiniti.png",
        banner: "cars/infiniti-banner.jpg",
        description: "Japanese luxury brand",
        models: {
            model1: { name: "QX Monograph", desc: "Electric SUV concept" },
            model2: { name: "Q60 Project Black S", desc: "Hybrid 563 HP" },
            model3: { name: "QX Inspiration", desc: "Autonomous concept" }
        }
    },

    /* 40 */
    maybach: {
        brandName: "Maybach",
        logo: "logos/maybach.png",
        banner: "cars/maybach-banner.jpg",
        description: "Mercedes' most luxurious products",
        models: {
            model1: { name: "S-Class Maybach", desc: "6.0L V12 • 612 HP" },
            model2: { name: "EQS SUV Maybach", desc: "Electric • 649 HP" },
            model3: { name: "Ultimate Luxury Concept", desc: "SUV sedan concept" }
        }
    },

    /* 41 */
    bmwM: {
        brandName: "BMW M Series",
        logo: "logos/bmw-m.png",
        banner: "cars/bmw-m-banner.jpg",
        description: "BMW's race-inspired versions",
        models: {
            model1: { name: "M3 Touring", desc: "First M station wagon • 510 HP" },
            model2: { name: "M4 CSL", desc: "Lightweight version • 550 HP" },
            model3: { name: "XM Label Red", desc: "PHEV SUV • 748 HP" }
        }
    },

    /* 42 */
    jaguar: {
        brandName: "Jaguar",
        logo: "logos/jaguar.png",
        banner: "cars/jaguar-banner.jpg",
        description: "Classic British design",
        models: {
            model1: { name: "XJ220S TWR", desc: "Rebuilt 90s legend" },
            model2: { name: "F-Pace SVR", desc: "SUV • 550 HP" },
            model3: { name: "Project 8", desc: "Race-inspired sedan" }
        }
    },

    /* 43 */
    mansory: {
        brandName: "Mansory",
        logo: "logos/mansory.png",
        banner: "cars/mansory-banner.jpg",
        description: "Extreme luxury tuning and bespoke supercars",
        models: {
            model1: { name: "Mansory Venatus", desc: "Lamborghini Urus tuned to 900 HP • 0-100: 2.9s" },
            model2: { name: "Mansory Stallone", desc: "Ferrari Roma tuned to 780 HP • Carbon body kit" },
            model3: { name: "Mansory Gronos", desc: "Rolls-Royce Cullinan tuned to 900 HP • Full carbon fiber" }
        }
    },

        /* 44 */
        mazda: {
            brandName: "Mazda",
            logo: "logos/mazda.png",
            banner: "cars/mazda-banner.jpg",
            description: "Japanese innovation with soul - Zoom-Zoom philosophy",
            models: {
                model1: { 
                    name: "RX-7 FD3S", 
                    desc: "1.3L twin-rotor Wankel • 276 HP • 50/50 weight distribution • Iconic pop-up headlights" 
                },
                model2: { 
                    name: "MX-5 Miata", 
                    desc: "1.5L/2.0L Skyactiv-G • Perfect roadster balance • World's best-selling two-seater convertible" 
                },
                model3: { 
                    name: "RX-Vision GT3", 
                    desc: "Concept rotary-powered racer • 562 HP • Virtual Le Mans winner" 
                },
                model4: { 
                    name: "3 Turbo Hatchback", 
                    desc: "2.5L Turbo • 250 HP • Kodo design language • Premium interior" 
                }
            }
        },

            /* 45 */
    lancia: {
        brandName: "Lancia",
        logo: "logos/lancia.png",
        banner: "cars/lancia-banner.jpg",
        description: "Italian elegance and rally dominance - Where luxury meets competition",
        models: {
            model1: { 
                name: "Delta HF Integrale Evoluzione", 
                desc: "2.0L Turbo • 215 HP • 6x WRC Champion • Full-time 4WD • Iconic Martini livery" 
            },
            model2: { 
                name: "Stratos HF Stradale", 
                desc: "2.4L Dino V6 • 190 HP • Wedge-shaped design • Rally homologation special" 
            },
            model3: { 
                name: "Aurelia B24 Spider", 
                desc: "2.5L V6 • 118 HP • First production V6 • Beautiful Pininfarina design" 
            },
            model4: { 
                name: "Fulvia HF", 
                desc: "1.3L V4 • 132 HP • Front-wheel drive rally champion • Italian elegance" 
            },
            model5: { 
                name: "Ypsilon HF", 
                desc: "1.4L Turbo • 140 HP • Modern hot hatch • Limited special editions" 
            }
        }
    },

    /* 46 */
    saab: {
        brandName: "Saab",
        logo: "logos/saab.png",
        banner: "cars/saab-banner.jpg",
        description: "Born from jets - Swedish innovation with turbocharged soul",
        models: {
            model1: { 
                name: "900 Turbo 16S", 
                desc: "2.0L Turbo • 175 HP • Aircraft-inspired dash • Convertible with rollover protection" 
            },
            model2: { 
                name: "99 Turbo", 
                desc: "2.0L Turbo • 145 HP • First production turbocharged car • Rally success" 
            },
            model3: { 
                name: "9-3 Viggen", 
                desc: "2.3L Turbo • 230 HP • Fighter jet-inspired • 'Black Panel' night mode" 
            },
            model4: { 
                name: "Sonett III", 
                desc: "1.7L V4 • 65 HP • Fiberglass body • Rare Swedish sports car" 
            },
            model5: { 
                name: "9-5 Aero HOT", 
                desc: "2.3L Turbo • 260 HP • Last true Saab • Night Panel dashboard" 
            }
        }
    },        
            /* 47 */
    subaru: {
        brandName: "Subaru",
        logo: "logos/subaru.png",
        banner: "cars/subaru-banner.jpg",
        description: "Symmetrical AWD specialists - Boxer engines and rally-bred performance",
        models: {
            model1: { 
                name: "Impreza WRX STI", 
                desc: "2.5L Turbo Boxer • 310 HP • Rally-inspired • Iconic blue with gold wheels" 
            },
            model2: { 
                name: "BRZ", 
                desc: "2.4L Boxer • 228 HP • Rear-wheel drive • Perfect 53:47 weight balance" 
            },
            model3: { 
                name: "Forester STI", 
                desc: "2.5L Turbo Boxer • 320 HP • Rare JDM performance SUV" 
            },
            model4: { 
                name: "Legacy GT-B", 
                desc: "2.0L Twin-Turbo Boxer • 280 HP • Sleeper sedan • JDM exclusive" 
            },
            model5: { 
                name: "Levorg STI Sport", 
                desc: "1.8L Turbo Boxer • 300 HP • AWD sports wagon • STI-tuned chassis" 
            }
        }
    },
    /* 48 */
    mini: {
        brandName: "Mini",
        logo: "logos/mini.png",
        banner: "cars/mini-banner.jpg",
        description: "British icon reimagined – Go-kart handling with timeless style",
        models: {
            model1: { 
                name: "Mini Cooper S", 
                desc: "2.0L Turbo • 189 HP • 0-60mph: 6.5s • Classic Union Jack taillights" 
            },
            model2: { 
                name: "John Cooper Works GP", 
                desc: "2.0L Turbo • 301 HP • Limited edition • Track-focused aerodynamics" 
            },
            model3: { 
                name: "Mini Electric", 
                desc: "181 HP • 145 miles range • Instant torque • Retains classic Mini fun" 
            },
            model4: { 
                name: "Countryman JCW", 
                desc: "2.0L Turbo • 296 HP • AWD • Sportiest small SUV" 
            },
            model5: { 
                name: "Original Mini 1275GT", 
                desc: "1.3L • 59 HP • 1969 rally legend • Front-wheel drive pioneer" 
            }
        }
    },    
            /* 49 */
    volvo: {
        brandName: "Volvo",
        logo: "logos/volvo.png",
        banner: "cars/volvo-banner.jpg",
        description: "Scandinavian luxury meets unrivalled safety – Innovators since 1927",
        models: {
            model1: { 
                name: "P1800", 
                desc: "1.8L B18 • 100-118 HP • Iconic coupe design • World record 3M+ mile example" 
            },
            model2: { 
                name: "850 R", 
                desc: "2.3L Turbo • 250 HP • Legendary wagon • BTCC racing heritage" 
            },
            model3: { 
                name: "XC90 T8", 
                desc: "2.0L Twin-Charged + Electric • 400 HP • Luxe 7-seat SUV • Thor's Hammer headlights" 
            },
            model4: { 
                name: "S60 Polestar Engineered", 
                desc: "2.0L Turbo + Electric • 415 HP • Öhlins dampers • Gold seatbelts" 
            },
            model5: { 
                name: "240 Turbo", 
                desc: "2.1L Turbo • 155 HP • Boxy legend • Group A rally homologation" 
            }
        }
    },
    /* 50 */
    rangeRover: {
        brandName: "rangerover",
        logo: "logos/range-rover.png",
        banner: "cars/range-rover-banner.jpg",
        description: "The ultimate luxury SUV – Unmatched refinement with legendary off-road capability",
        models: {
            model1: { 
                name: "Range Rover Classic", 
                desc: "3.5L V8 • 135 HP • 1970 original • Pioneering luxury 4x4 • Aluminum body" 
            },
            model2: { 
                name: "Range Rover Sport SVR", 
                desc: "5.0L Supercharged V8 • 575 HP • 0-60: 4.3s • Nürburgring SUV record holder" 
            },
            model3: { 
                name: "Range Rover Velar", 
                desc: "3.0L Turbo + Electric • 400 HP • Flush door handles • Minimalist luxury" 
            },
            model4: { 
                name: "Range Rover PHEV", 
                desc: "2.0L Turbo + Electric • 398 HP • 70+ mile EV range • Silent off-roading" 
            },
            model5: { 
                name: "Range Rover SVAutobiography", 
                desc: "4.4L Twin-Turbo V8 • 606 HP • Executive Class seating • Bespoke customization" 
            }
        }
    }    
};

// تابع نمایش اطلاعات
function showCar(brand) {
  const carData = carsDatabase[brand];
  if (!carData) return;

  document.getElementById('carImage').src = carData.banner;
  document.getElementById('carTitle').textContent = carData.brandName;
  document.getElementById('carDescription').textContent = carData.description;

  // نمایش مدل‌ها
  document.getElementById('model1Title').textContent = carData.models.model1.name;
  document.getElementById('model1Desc').textContent = carData.models.model1.desc;
  document.getElementById('model2Title').textContent = carData.models.model2.name;
  document.getElementById('model2Desc').textContent = carData.models.model2.desc;
  document.getElementById('model3Title').textContent = carData.models.model3.name;
  document.getElementById('model3Desc').textContent = carData.models.model3.desc;

  document.getElementById('carDetails').style.display = 'block';
  document.getElementById('carDetails').scrollIntoView({ behavior: 'smooth' });
}

function showModel(modelId) {
  // نمایش جزییات بیشتر برای هر مدل
  alert(`جزییات بیشتر برای ${document.getElementById(modelId + 'Title').textContent}`);
}

// افزودن انیمیشن‌ها به DOM
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
      }
  `;
  document.head.appendChild(style);
});