import Project from './project';
import Task from './task';

const docRef = db.collection('projects').doc('Naqhid');

export default function saveState() {
  docRef
    .withConverter(projectConverter)
    .set(window.projects);
}

async function getState() {
  await docRef
    .withConverter(projectConverter)
    .get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        window.projects = data;
      } else {
        // Project didn't exist
        window.projects = [];
      }
    });
}

var projectConverter = {
  toFirestore(projects) {
    return { projects: JSON.parse(JSON.stringify(projects)) };

    return data.projects.map((project) => {
      const expandedTabs = project;

      expandedTabs.storage = expandedTabs.storage.map((task) => Object.assign(new Task(), task));

      return Object.assign(new Project(), expandedTabs);
    });
  },
};

    expandedTabs.storage = expandedTabs.storage.map((task) => Object.assign(new Task(), task));

    return Object.assign(new Project(), expandedTabs);
  
};

export { saveState, getState };
