const NewsModel = require('../../models/NewsModel')
const NewsService ={
    // add: async ({tittle,content,category,isPublish,cover,editTime})=>{
    //     return NewsModel.create({
    //         tittle,
    //         content,
    //         category,
    //         isPublish,
    //         cover,
    //         editTime
    //     })
    // },
    // getlist:async ({_id})=>{
    //     return _id?NewsModel.find({_id}):NewsModel.find({})
        
    // },
    publish:async ({_id,isPublish,editTime})=>{
        return NewsModel.updateOne({_id},{isPublish,editTime})
    },
    delList: async ({_id})=>{
        return NewsModel.deleteOne({_id})
    },
    updatelist: async ({tittle,content,category,isPublish,cover,editTime,_id})=>{
        if(cover){
            return NewsModel.updateOne({_id},{
                tittle,content,category,isPublish,cover,editTime 
            })
        }else{
            return NewsModel.updateOne({_id},{
                tittle,content,category,isPublish,editTime 
            })
        }
    },
    addAnnouncement: async ({title,content,category,isPublish,cover,creator,editTime})=>{
        return NewsModel.create({
            title,
            content,
            category,
            isPublish,
            cover,
            creator,
            editTime
        })
    },
    getAnnouncementList: async ()=>{
        return NewsModel.find({})
    },
    DeleteOneAnnouncement: async ({_id})=>{
        return NewsModel.deleteOne({_id})
    },
    DeleteManyAnnouncement: async ({_ids})=>{
        return NewsModel.deleteMany({_id:{$in:_ids}})
    },
    updateStatus: async ({_id,state})=>{
        return NewsModel.updateOne({_id},{isPublish:state})
    }
}

module.exports = NewsService