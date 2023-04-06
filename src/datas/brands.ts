export const CAR_BRANDS = {
  peugeot: {
    name: "Peugeot",
    description: "Peugeot is a French car manufacturer, part of Groupe PSA.",
    models: {
      peugeot208: {
        name: "Peugeot 208",
        description:
          "Peugeot 208 is a supermini car produced by the French automaker Peugeot.",
      },
      peugeot308: {
        name: "Peugeot 308",
        description:
          "Peugeot 308 is a compact car produced by the French automaker Peugeot.",
      },
    },
  },
  renault: {
    name: "Renault",
    description:
      "Renault is a French car manufacturer, part of Groupe Renault.",
    models: {
      renaultClio: {
        name: "Renault Clio",
        description:
          "Renault Clio is a supermini car produced by the French automaker Renault.",
      },
    },
  },

  toyota: {
    name: "Toyota",
    description: "Toyota is a Japanese car manufacturer, part of Toyota Group.",
    models: {
      toyotaYaris: {
        name: "Toyota Yaris",
      },
      toyotaCorolla: {
        name: "Toyota Corolla",
        description: "Toyota Corolla is a subcompact car produced by Toyota.",
      },
    },
  },

  volkswagen: {
    name: "Volkswagen",
    description:
      "Volkswagen is a German car manufacturer, part of Volkswagen Group.",
    models: {
      volkswagenPolo: {
        name: "Volkswagen Polo",
        description:
          "Volkswagen Polo is a supermini car produced by Volkswagen.",
      },
      volkswagenGolf: {
        name: "Volkswagen Golf",
        description: "Volkswagen Golf is a compact car produced by Volkswagen.",
      },
    },
  },
};

export const SCOOTER_BRANDS = {
  peugeot: {
    name: "Peugeot",
    description: "Peugeot is a French car manufacturer, part of Groupe PSA.",
    models: {
      peugeotMetropolis: {
        name: "Peugeot Metropolis",
        description: "Peugeot Metropolis is a scooter produced by Peugeot.",
      },
      peugeotScooty: {
        name: "Peugeot Scooty",
      },
    },
  },

  kymco: {
    name: "Kymco",
    description: "Kymco is a Taiwanese motorcycle manufacturer.",
    models: {
      kymcoPeople: {
        name: "Kymco People",
        description: "Kymco People is a scooter produced by Kymco.",
      },
      kymcoLike: {
        name: "Kymco Like",
      },
    },
  },

  yamaha: {
    name: "Yamaha",
    description: "Yamaha is a Japanese motorcycle manufacturer.",
    models: {
      yamahaXMax: {
        name: "Yamaha X-Max",
        description: "Yamaha X-Max is a scooter produced by Yamaha.",
      },
      yamahaTMax: {
        name: "Yamaha T-Max",
      },
    },
  },
};

export const BRANDS = {
  ...CAR_BRANDS,
  ...SCOOTER_BRANDS,
};

export type CarBrand = keyof typeof CAR_BRANDS;
export type ScooterBrand = keyof typeof SCOOTER_BRANDS;
export type Brand = CarBrand | ScooterBrand;
