/**
 * Created by Administrator on 2017/3/2.
 */
$(function () {
    //1、获取轮播图图片
    $.ajax({
        url:'http://czdm.ittun.com/api/getlunbo',
        type:'GET',
        success:function(result){
            var carImgTag = template("carouTem",{list:result});
            $("#car-img").html(carImgTag);
            $("#car-img .item").eq(0).addClass("active");
        }
    })


    //2、获取标签页1的图片
    $.ajax({
        url:'http://czdm.ittun.com/api/gethometab/1',
        type:'GET',
        success:function(result){
            var tabImgTag = template("tabTem-content",{datas:result});
            $("#home").html(tabImgTag);

            window.localStorage.setItem("1",JSON.stringify(result));
        }
    })
    //3、封装发送请求函数
    function ajaxTab(s,tabName){
        console.log(s);
        $.ajax({
            url:'http://czdm.ittun.com/api/gethometab/'+s,
            type:'GET',
            success:function(result){
                var tabImgTag = template("tabTem-content",{datas:result});
                $(tabName).html(tabImgTag);
                window.localStorage.setItem(s,JSON.stringify(result));
            }
        })
    }
    //4、进一步地封装发送请求函数
    function render(s,tabName) {
        if (window.localStorage.getItem(s)) {
            var tabImgTag = template("tabTem-content", {datas: JSON.parse(window.localStorage.getItem(s))});
            $(tabName).html(tabImgTag);
            return;
        }
        else {
        ajaxTab(s, tabName);

        }
    }
    //5、添加点击事件，调用render函数
    $("#homeSend").on("click",render(1,"#home"))
    $("#profileSend").on("click",render(2,"#profile"))
    $("#messagesSend").on("click",render(3,"#messages"))
    $("#settingsSend").on("click",render(4,"#settings"));

    //6、给左边按钮添加点击事件，点击事件发生后，产生动画

    $("#menuJump").on("click", function () {
        $("#shade").animate({"width":"80%","display":"block"},500);
        $("#rightSec").animate({"left":"80%"},500);
        $("#shadeBlack").css("display","block")
    })
    $("#shadeBlack").on("click", function () {
        $("#shade").animate({"width":"0%","display":"none"},500);
        $("#rightSec").animate({"left":"0%"},500);
        $("#shadeBlack").css("display","none");
    })


})