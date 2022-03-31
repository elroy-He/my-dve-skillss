const skills = [
  {id: 12345, skill: 'java', isFluent: true},
  {id: 12346, skill: 'javaScript', isFluent: true},
  {id: 12347, skill: 'python', isFluent: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function isNum(id) {
  return !isNaN(id)
}

function update(id, key) {
  if (isNum(key) === true) {
    for (let i=0; i<skills.length; i++) {
      if(skills[i].id === parseInt(id)) {
        if (key === 'on') {
          skills[i].isFluent = true;
        } else {
          skills[i].isFluent = false;
        }
      }
    }
  } else if (isNum(key) === false) {
    for (let i=0; i<skills.length; i++) {
      if(skills[i].id === parseInt(id)) {
        skills[i].skill = key;
      }
    }
  }
}


function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

function getFluent(lang) {
  const item = skills.find(skill => skill.skill === lang);
  return item.isFluent;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.isFluent = false;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}