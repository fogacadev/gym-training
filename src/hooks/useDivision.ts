type Division = {
    id: string;
    title: string;
    dayOfWeek: string;
    division: string;
    trainingId: string;
}

const keyName = "@gymtraining_divisions"

export function getDivisionsByTrainingId(trainingId?: string): Division[] {

    if(!trainingId){
        return [];
    }

    const stored = localStorage.getItem(keyName);
    
    if (!stored) {
        return [];
    }
    const divisions = JSON.parse(stored) as Division[];

    return divisions.filter(item => item.trainingId === trainingId);
}

export function getDivisions(): Division[] {

    const stored = localStorage.getItem(keyName);
    
    if (!stored) {
        return [];
    }
    return JSON.parse(stored) as Division[];
}

export function addDivision(division: Division) {
    const divisions = getDivisions();

    divisions.push(division);

    const stored = JSON.stringify(divisions);
    localStorage.setItem(keyName, stored);
}

export function getDivision(id?: string) : Division | null{
    if(!id){
        return null;
    }
    const divisions = getDivisions();

    const division = divisions.filter(item => item.id == id);

    if(division.length > 0){
        return division[0];
    }

    return null;
}

export function deleteDivision(id: string) {
    const divisions = getDivisions();

    const newDivisions = divisions.filter(item => item.id !== id);

    const stored = JSON.stringify(newDivisions);
    localStorage.setItem(keyName, stored);
}