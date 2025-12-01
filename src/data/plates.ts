export interface IngredientWithQuantity {
    id: number;
    quantity: number;
};

export interface Plate {
    id: number;
    name: string;
    ingredients: IngredientWithQuantity[];
    notes?: string;
};

export interface Ingredient {
    id: number;
    name: string;
    type: string;
    defaultQuantity: number;
};

export const ingredients: Ingredient[] = [
    { id: 0, name: 'kananmuna', type: 'kpl', defaultQuantity: 1 },
    { id: 1, name: 'jauheliha', type: 'g', defaultQuantity: 100 },
    { id: 2, name: 'maito', type: 'l', defaultQuantity: 1 },
    { id: 3, name: 'makaroni', type: 'g', defaultQuantity: 100 },
    { id: 4, name: 'riisiä', type: 'g', defaultQuantity: 100 },
    { id: 5, name: 'kevätsipuli', type: 'pussi/a', defaultQuantity: 1 },
    { id: 6, name: 'inkivääri', type: 'kpl', defaultQuantity: 1 },
    { id: 7, name: 'soijakastike', type: 'pullo/a', defaultQuantity: 1 },
    { id: 8, name: 'possua', type: 'g', defaultQuantity: 100 },
    { id: 9, name: 'kurkku', type: 'kpl', defaultQuantity: 1 },
    { id: 10, name: 'appelsiinejä', type: 'kg', defaultQuantity: 1 },
    { id: 11, name: 'kanankoipia', type: 'kg', defaultQuantity: 1 },
    { id: 12, name: 'spagettia', type: 'kg', defaultQuantity: 1 },
    { id: 13, name: 'porkkanoita', type: 'kg', defaultQuantity: 1 },
    { id: 14, name: 'selleri', type: 'kpl', defaultQuantity: 1 },
    { id: 15, name: 'perunoita', type: 'kg', defaultQuantity: 1 },
    { id: 16, name: 'lasagnelevyjä', type: 'paketti', defaultQuantity: 1 },
    { id: 17, name: 'tomaattimurskaa', type: 'pakettia', defaultQuantity: 1 },
    { id: 18, name: 'valkoista kastiketta', type: 'pullo', defaultQuantity: 1 },
    { id: 19, name: 'lihaa/kanaa/possua', type: 'kg', defaultQuantity: 1 },
    { id: 20, name: 'sipulia', type: 'pussi', defaultQuantity: 1 },
    { id: 21, name: 'tomaatteja', type: 'kg', defaultQuantity: 1 },
    { id: 22, name: 'oliiviöljyä', type: 'l', defaultQuantity: 0.5 },
    { id: 23, name: 'linssejä', type: 'pkt', defaultQuantity: 1 },
    { id: 24, name: 'ohraa', type: 'pkt', defaultQuantity: 1 },
    { id: 25, name: 'kukkakaali', type: 'kg', defaultQuantity: 1 },
    { id: 26, name: 'parsakaali', type: 'kg', defaultQuantity: 1 }
];
/*

*/
export const menus: Plate[] = [
    {
        id: 0, name: 'Makaronilaatikko',
        ingredients: [
            { id: 0, quantity: 3 }, // kananmuna
            { id: 1, quantity: 400 }, // jauheliha
            { id: 2, quantity: 1.75 }, // maito
            { id: 3, quantity: 400 } // makaroni
        ],
        notes: `
        200 asteisessa uunissa, vähän reilu 1 tunnin ajan
        `
    },
    {
        id: 1, name: 'Arroz Chaufa',
        ingredients: [
            { id: 4, quantity: 400 }, // riisi
            { id: 0, quantity: 2 }, // kananmuna
            { id: 5, quantity: 1 }, // kevätsipuli
            { id: 19, quantity: 400 }, // liha/kana/possu
            { id: 7, quantity: 1 }, // soijakastike
            { id: 6, quantity: 1 } // inkivääri
        ]
    },
    {
        id: 2, name: 'Sopa de verduras',
        ingredients: [
            { id: 11, quantity: 11 }, // kanankoipia
            { id: 12, quantity: 1 }, // spagettia
            { id: 13, quantity: 1 }, // porkkanoita
            { id: 14, quantity: 1 }, // selleri
            { id: 6, quantity: 1 }, // inkivääri
            { id: 15, quantity: 1 } // perunoita
        ]
    },
    {
        id: 3, name: 'Lasagne',
        ingredients: [
            { id: 16, quantity: 1 }, // lasagnelevyjä
            { id: 1, quantity: 800 }, // jauheliha
            { id: 17, quantity: 2 }, // tomaattimuskaa
            { id: 18, quantity: 2 } // valkoista kastiketta
        ],
        notes: `
        sama mitä levyjen paketissa neuvotaan
        `
    },
    {
        id: 4, name: 'Papa rellena',
        ingredients: [
            { id: 15, quantity: 1 }, // perunoita
            { id: 4, quantity: 1 }, // riisiä
            { id: 19, quantity: 1 }, // lihaa/kanaa/possua
            { id: 20, quantity: 1 }, // sipulia
            { id: 21, quantity: 1 }, // tomaatteja
            { id: 22, quantity: 0.5 } // oliiviöljyä
        ]
    },
    {
        id: 5, name: 'Tallerines',
        ingredients: [
            { id: 12, quantity: 1 }, // spagetti
            { id: 21, quantity: 1 }, // tomaatit
            { id: 1, quantity: 800 } // jauheliha
        ]
    },
    {
        id: 6, name: 'Lentejitas',
        ingredients: [
            { id: 23, quantity: 1 }, // linssejä
            { id: 4, quantity: 1 }, // riisiä
            { id: 20, quantity: 1 }, // sipulia
            { id: 0, quantity: 3 } // kananmunia
        ]
    },
    {
        id: 7, name: 'Trigo',
        ingredients: [
            { id: 24, quantity: 1 }, // ohraa
            { id: 4, quantity: 1 }, // riisiä
            { id: 0, quantity: 3 } // kananmunia
        ]
    },
    {
        id: 8, name: 'Tortilla de coliflor',
        ingredients: [
            { id: 25, quantity: 1 }, // kukkakaalia
            { id: 0, quantity: 3 } // kananmunia
        ]
    },
    {
        id: 9, name: 'Tortilla de broccoli',
        ingredients: [
            { id: 26, quantity: 1 }, // parsakaalia
            { id: 0, quantity: 3 } // kananmunia
        ]
    },
    {
        id: 10, name: 'Pollo asado',
        ingredients: [
            { id: 0, quantity: 3 }, // muslos de pollo, 9 piezas
            { id: 1, quantity: 400 }, // arroz
            { id: 2, quantity: 1.75 }, // kikkoman
            { id: 3, quantity: 400 } // mostasa
        // vinagre
        // ajo fresco
        // inkivääri kion
        // muskottipähkinä
        // papas
        // vinagre etikka
        //aceite de oliva
        // leche
        ],
        notes: `
        se macera de una noche anterior. horno 180 grados, 45 minutes, pero mas presas es una hora y veinte aprox.
        `
    },
];
