import Project from './project'
import Task from './task'

let db = firebase.firestore()
const docRef = db.collection('projects').doc('Naqhid')

export default function saveState() {
 
  docRef
    .withConverter(projectConverter)
    .set(window.projects)
  
}

async function getState() {
  await docRef
    .withConverter(projectConverter)
    .get().then((doc) => {
      if(doc.exists){
        let data = doc.data()
        window.projects = data
      } else {
        // Project didn't exist
        window.projects = []
      }
    })
    
  return;
}

var projectConverter = {
  toFirestore: function(projects) {
    return { projects: JSON.parse(JSON.stringify(projects)) }
  
    return data["projects"].map(project => {

      
      let expandedTabs = project
      
      
      expandedTabs.storage = expandedTabs.storage.map(task => Object.assign(new Task, task))

     
      return Object.assign(new Project(), expandedTabs)
    });
  }
}

function expandState(jsonState) {
   return JSON.parse(jsonState).map(project => {

    
    let expandedTabs = project
    
  
    expandedTabs.storage = expandedTabs.storage.map(task => Object.assign(new Task, task))

    
    return Object.assign(new Project(), expandedTabs)
  });
}

export {saveState, getState};
