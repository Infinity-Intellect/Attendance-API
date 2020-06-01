const express = require('express');

const router = express.Router();

const sign = require('../controllers/users');
const task = require('../controllers/task');
const attendance = require('../controllers/attendance');
const moduler = require('../controllers/module');
const project = require('../controllers/projects');
const kanban = require('../controllers/kanban');
const userAuth = require('../middleware/userAuth');

router.post('/register', userAuth, sign.register);
router.post('/login', sign.login);
router.post('/attendance', userAuth, attendance.markAttendance);
router.put('/reset', sign.reset);

router.get('/attendance/all', userAuth, attendance.getAllAttendance);
router.get('/attendance/:userId', userAuth, attendance.getAttendanceById);

router.post('/task', userAuth, task.generateTask);
router.put('/task/:taskId', userAuth, task.editTask);
router.delete('/task/:taskId', userAuth, task.deleteTask);
router.get('/task', userAuth, task.getTask);

router.post('/module', userAuth, moduler.createModule);
router.put('/module/:moduleId', userAuth, moduler.editModule);
router.delete('/module/:moduleId', userAuth, moduler.deleteModule);
router.get('/task/:moduleId', userAuth, moduler.getTasks);


router.post('/project', userAuth, project.createProject);
router.put('/project/:projectId', userAuth, project.editProject);
router.delete('/project/:projectId', userAuth, project.deleteProject);
router.get('/project/all', userAuth, project.getAllProject);
router.get('/project/:projectId', userAuth, project.getProject);
router.get('/module/:projectId', userAuth, project.getModules);


router.post('/board', userAuth, kanban.createKanban);
router.put('/board/:boardId', userAuth, kanban.editKanban);
router.delete('/board/:boardId', userAuth, kanban.deleteKanban);
router.get('/board', userAuth, kanban.getKanban);




module.exports = router;