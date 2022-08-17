type Training = {
    id: string;
    title: string;
    description: string;
}

const keyName = "@gymtraining_trainings"

export function getTrainings(): Training[] {
    const stored = localStorage.getItem(keyName);

    if (!stored) {
        return [];
    }
    const trainings = JSON.parse(stored);

    return trainings;
}

export function addTraining(training: Training) {
    const trainings = getTrainings();

    trainings.push(training);

    const stored = JSON.stringify(trainings);
    localStorage.setItem(keyName, stored);
}

export function getTraining(id?: string) : Training | null{
    if(!id){
        return null;
    }
    const trainings = getTrainings();


    const training = trainings.filter(item => item.id == id);

    if(training.length > 0){
        return training[0];
    }

    return null;
}

export function deleteTraining(id: string) {
    const trainings = getTrainings();

    const newTrainings = trainings.filter(item => item.id !== id);

    const stored = JSON.stringify(newTrainings);
    localStorage.setItem(keyName, stored);
}