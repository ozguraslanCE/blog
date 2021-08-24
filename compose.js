//jshint esversion:6


exports.objects = function(){

    const object = {
        title:req.body.postTitle,
        post : req.body.postBody   
    }
    return object;
}