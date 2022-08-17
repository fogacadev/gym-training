type Evolution = {
    id: string;
    date: Date;
    description: string;
    reps: Rep[]
    exercicieId: string;
}

type Rep = {
    reps: string;
    weight: string;
}


const keyName = "@gymtraining_Evolutions"

export function getEvolutionsByExercicieId(exercicieId?: string): Evolution[] {

    if (!exercicieId) {
        return [];
    }

    const stored = localStorage.getItem(keyName);

    if (!stored) {
        return [];
    }
    const evolutions = JSON.parse(stored) as Evolution[];

    return evolutions.filter(item => item.exercicieId === exercicieId);
}

export function getEvolutions(): Evolution[] {

    const stored = localStorage.getItem(keyName);

    if (!stored) {
        return [];
    }
    return JSON.parse(stored) as Evolution[];
}

export function addEvolution(Evolution: Evolution) {
    const evolutions = getEvolutions();

    evolutions.push(Evolution);

    const stored = JSON.stringify(evolutions);
    localStorage.setItem(keyName, stored);
}

export function getEvolution(id?: string): Evolution | null {
    if (!id) {
        return null;
    }
    const evolutions = getEvolutions();

    const evolution = evolutions.filter(item => item.id == id);

    if (evolution.length > 0) {
        return evolution[0];
    }

    return null;
}

export function deleteEvolution(id: string) {
    const evolutions = getEvolutions();

    const newEvolutions = evolutions.filter(item => item.id !== id);

    const stored = JSON.stringify(newEvolutions);
    localStorage.setItem(keyName, stored);
}