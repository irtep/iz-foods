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
    { id: 10, name: 'appelsiinejä', type: 'kg', defaultQuantity: 1 }
];

export const menus: Plate[] = [
    {
        id: 0,
        name: 'Makaronilaatikko',
        ingredients: [
            {
                id: 0, // kananmuna
                quantity: 4
            },
            {
                id: 1,  // jauheliha
                quantity: 400
            },
            {
                id: 2, // maito
                quantity: 1.75
            },
            {
                id: 3, // makaroni
                quantity: 400
            }
        ],
        notes: `
        200 asteisessa uunissa, vähän reilu 1 tunnin ajan
        `
    },
    {
        id: 0,
        name: 'Arroz Chaufa',
        ingredients: [
            {
                id: 4, // riisi
                quantity: 400
            },
            {
                id: 0, // kananmuna
                quantity: 2
            },
            {
                id: 5, // kevätsipuli 210s anita
                quantity: 1
            },
            {
                id: 8, // possu
                quantity: 400
            },
            {
                id: 7, // soijakastike
                quantity: 1
            },
            {
                id: 6, // inkivääri
                quantity: 1
            }
        ]
    }
    
];
