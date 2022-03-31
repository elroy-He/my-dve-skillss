const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  updateSkill
}

function updateSkill(req, res) {
  Skill.update(req.params.id, req.body.done);
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit',{
    skill: Skill.getOne(req.params.id)
  })
}

function deleteSkill(req, res) {
  console.log(req.params.id);
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body, ' <--- req.body, contents of the form')
  res.redirect('/skills');
  Skill.create(req.body);
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  })
}

function show(req, res) {
  res.render('skills/show', {
    skillNum: req.params.id,
    skill: Skill.getOne(req.params.id)
  })
}

