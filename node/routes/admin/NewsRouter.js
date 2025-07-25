var express = require('express');
const NewsController = require('../../controllers/admin/NewsController');
var NewsRouter = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })



//涉及文件上传
// NewsRouter.post('/adminapi/news/add',upload.single('file'),NewsController.add)
// NewsRouter.get('/adminapi/news/list',NewsController.getList)
NewsRouter.put('/adminapi/news/publish',NewsController.publish,upload.single('file'))
NewsRouter.delete('/adminapi/news/list/:id',NewsController.delList)
// NewsRouter.get('/adminapi/news/list/:id',NewsController.getList)
NewsRouter.post('/adminapi/news/list',upload.single('file'),NewsController.updatelist)

NewsRouter.post("/adminapi/announcement/add",upload.single('file'),NewsController.addAnnouncement)//添加通知公告
NewsRouter.get("/adminapi/announcement/list",NewsController.getAnnouncementList)//获取通知公告列表
NewsRouter.post("/adminapi/announcement/deloneannouncement",NewsController.DeleteOneAnnouncement)//删除单个信息
NewsRouter.post("/adminapi/announcement/delmanyannouncement",NewsController.DeleteManyAnnouncement)//删除多个信息
NewsRouter.post("/adminapi/announcement/updatestatus",NewsController.updateStatus)//修改通知公告发布状态
NewsRouter.post("/adminapi/announcement/edit",upload.single('file'),NewsController.editAnnouncement)//修改通知公告内容


module.exports = NewsRouter; 