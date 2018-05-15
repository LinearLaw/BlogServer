/**
 * Created by Administrator on 2017/3/2.
 */
$(function () {

    $.ajax({
        url:'http://czdm.ittun.com/api/gettopics',
        type:'GET',
        success: function (result) {
            var topicTag = template("topicModel",{arr:result});
            $("#bodys>div").html(topicTag);
        }
    })
})