export interface NonFood {
    id: number;
    name: string;
    type: string;
    defaultQuantity: number;
};

export const nonFoods: NonFood[] = [
    { id: 0, name: 'Koiran ruoka', type: 'pussi/a', defaultQuantity: 1 },
    { id: 1,name: 'Vessapaperi',type: 'pussi/a',defaultQuantity: 1 },
    { id: 2,name: 'Kokista',type: 'laatikko/pulloja',defaultQuantity: 1},
    { id: 3,name: 'Fairy',type: 'pulloja',defaultQuantity: 1 },
    { id: 4, name: 'Astianpesuaine(kone)', type: 'pussi', defaultQuantity: 1 },
    { id: 5, name: 'Vaatteidepesuaine(kone)', type: 'pussi', defaultQuantity: 1 },
    { id: 6, name: 'Hammastahna', type: 'tuubi', defaultQuantity: 1 }
];