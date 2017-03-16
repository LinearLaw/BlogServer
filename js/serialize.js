/**
 * Created by Administrator on 2017/3/2.
 */
$(function () {
    $.ajax({
        url:'http://czdm.ittun.com/api/getlianzai',
        type:'GET',
        success: function (result) {
            var topicTag = template("seriModel",{seri:result});
            $("#bodys>div").html(topicTag);
        }
    })
})