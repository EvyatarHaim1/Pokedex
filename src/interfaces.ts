export interface pokemonsIndexData {
  name: string;
  url: string;
}

export interface PokemonItem {
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }
  ];
  base_experience: number;
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  height: number;
  held_items: [
    {
      item: {
        name: string;
        url: string;
      };
      version_details: [
        {
          rarity: number;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  id: number;
  is_default: number;
  location_area_encounters: string | IEncounter[];
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
      version_group_details: [
        {
          level_earned_at: number;
          move_learn_method: {
            name: string;
            url: string;
          };
          version_group: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      official_artwork: {
        front_default: string | null;
      };
    };
    versions: {
      generation_i: {
        red_blue: {
          back_default: string | null;
          back_gray: string | null;
          front_default: string | null;
          front_gray: string | null;
        };
        yellow: {
          back_default: string | null;
          back_gray: string | null;
          front_default: string | null;
          front_gray: string | null;
        };
      };
      generation_ii: {
        crystal: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
        gold: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
        silver: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
      };
      generation_iii: {
        emerald: {
          front_default: string | null;
          front_shiny: string | null;
        };
        firered_leafgreen: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
        ruby_sapphire: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
      };
      generation_iv: {
        diamond_pearl: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        heartgold_soulsilver: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        platinum: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_v: {
        black_white: {
          animated: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
          };
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_vi: {
        omegaruby_alphasapphire: {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        x_y: {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_vii: {
        icons: {
          front_default: string | null;
          front_female: string | null;
        };
        ultra_sun_ultra_moon: {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_viii: {
        icons: {
          front_default: string | null;
          front_female: string | null;
        };
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
}

interface IEncounter {
  location_area: {
    name: string;
    url: string;
  };
  version_details: [
    {
      encounter_details: [
        {
          chance: number;
          condition_values: [
            {
              name: string;
              url: string;
            }
          ];
          max_level: number;
          method: {
            name: string;
            url: string;
          };
          min_level: number;
        }
      ];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
}
