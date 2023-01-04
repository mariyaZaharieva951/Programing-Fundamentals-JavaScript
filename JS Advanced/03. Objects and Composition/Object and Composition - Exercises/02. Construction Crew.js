function constructionCrew(worker) {

if(worker.dizziness){
    let needWater = worker.weight * 0.1 * worker.experience;
    worker.levelOfHydrated += needWater;
    worker.dizziness = false;
}

return worker

}

constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
  
  )