type Exercicie = {
    id: string;
    title: string;
    description: string;
    divisionId: string;
}

const keyName = "@gymtraining_Divisions"

export function getExerciciesByDivisionId(divisionId?: string): Exercicie[] {

    if(!divisionId){
        return [];
    }

    const stored = localStorage.getItem(keyName);
    
    if (!stored) {
        return [];
    }
    const exercicies = JSON.parse(stored) as Exercicie[];

    return exercicies.filter(item => item.divisionId === divisionId);
}

export function getExercicies(): Exercicie[] {

    const stored = localStorage.getItem(keyName);
    
    if (!stored) {
        return [];
    }
    return JSON.parse(stored) as Exercicie[];
}

export function addExercicie(exercicie: Exercicie) {
    const exercicies = getExercicies();

    exercicies.push(exercicie);

    const stored = JSON.stringify(exercicies);
    localStorage.setItem(keyName, stored);
}

export function getExercicie(id?: string) : Exercicie | null{
    if(!id){
        return null;
    }
    const exercicies = getExercicies();

    const exercicie = exercicies.filter(item => item.id == id);

    if(exercicie.length > 0){
        return exercicie[0];
    }

    return null;
}

export function deleteExercicie(id: string) {
    const exercicies = getExercicies();

    const newExercicies = exercicies.filter(item => item.id !== id);

    const stored = JSON.stringify(newExercicies);
    localStorage.setItem(keyName, stored);
}