/*
 * @Author: YP
 * @Date:   2018-08-07 08:43:43
 * @Last Modified by:   YP
 * @Last Modified time: 2018-08-07 14:24:55
 */
//用来写数据上链的js

var Push =Push|| {
    checkConnect:function ()
    {
        if(!app.checkAddress())
        {
            alert("请解锁matamask并切换到rinkeby之后刷新本页面");
            return false;
        }
        else
        {
            return true;
        }
    },
    addCrab: function () {
        //获得数据
        var id = $("#addNew input[name='crabId']").val();
        var poolId = $("input[name='poolId']").val();
        var operator = $("#addNew input[name='operator']").val();
        // console.log(id + poolId + operator);
        app.checkExist(id,function(result){
            if(result)
            {
                alert("已经存在id为 "+id+"  的闸蟹")
            }
            else
            {
                app.addCrab(id,operator,poolId,Push.callback);
            }
         })
        
    },
    pushFeed:function () {
        var id =  $("#addFeed input[name='crabId']").val();
        var feedName = $("#addFeed input[name='feedName']").val();
        var operator = $("#addFeed input[name='operator']").val();
        
         app.checkExist(id,function(result){
            if(result)
            {
                app.pushFeed(id,feedName,operator,Push.callback)
            }
            else
            {
                alert("不存在id为 "+id+"  的闸蟹")
            }
         })
        // console.log(id+feedName+operator);
    },
    pushWaterQuality:function () {
        var id =  $("#addWaterQuality input[name='crabId']").val();
        var  whetherQualified = $('input:radio:checked').val();
        var checkAgent = $("#addWaterQuality input[name='checkAgent']").val();
        var density = $("#addWaterQuality input[name='density']").val();
        var operator = $("#addWaterQuality input[name='operator']").val();
        app.checkExist(id,function(result){
            if(result)
            {
                 app.pushWaterQuality(id,whetherQualified,checkAgent,density,operator,Push.callback);
            }
            else
            {
                alert("不存在id为 "+id+"  的闸蟹")
            }
         })
       
        // app.pushwaterQuality(id,feedName,operator,Push.callback)
    },
    pushTransfer:function(){
        var id =  $("#addTransfer input[name='crabId']").val();
        var from= $("#addTransfer input[name='from']").val();
        var to = $("#addTransfer input[name='to']").val();
        var operator = $("#addTransfer input[name='operator']").val();
        // console.log(id+"  "+from+"  "+to+"  "+operator);
        
        app.checkExist(id,function(result){
            if(result)
            {
                app.pushTransfer(id,from,to,operator,Push.callback);
            }
            else
            {
                alert("不存在id为 "+id+"  的闸蟹")
            }
         })
    },
    pushStore:function () {
        var id =  $("#addStore input[name='crabId']").val();
        var temperature= $("#addStore input[name='temperature']").val();
        var wetness = $("#addStore input[name='wetness']").val();
        var operator = $("#addStore input[name='operator']").val();
        app.checkExist(id,function(result){
            if(result)
            {
                 app.pushStore(id,temperature,wetness,operator,Push.callback);
            }
            else
            {
                alert("不存在id为 "+id+"  的闸蟹")
            }
         })
    },
    callback:function(hash)
    {
    	alert("交易发起成功,hash值是"+hash);
    }
};

$(
    document).ready(function() {
    $('#addNew div button').click(function() {
        // console.log("点击了")
        if(Push.checkConnect())
        {
            Push.addCrab();
        }
        
    });

    $('#addFeed div button').click(function() {
        // console.log("点击了")
        if(!Push.checkConnect())
        {
            return;
        }

        Push.pushFeed();
    });

     $('#addWaterQuality div button').click(function() {
        if(!Push.checkConnect())
        {
            return;
        }
        Push.pushWaterQuality();
    });
     $('#addTransfer div button').click(function() {
        if(!Push.checkConnect())
        {
            return;
        }
        Push.pushTransfer();
    });
     $('#addStore div button').click(function() {
        if(!Push.checkConnect())
        {
            return;
        }
        Push.pushStore();
    });
    //隐藏和显示并改变悬浮的li的背景
    var nowShow = 1;
    $('.operate[index="1"]').show();
    $('#firstSelect').css("background", "#3385ff");
    $('#left-bottom ul li').click(function() {
        console.log($(this).attr("index"));
        index = $(this).attr("index");
        $('.operate[index=' + nowShow + ']').hide();
        $('.operate[index=' + index + ']').show();
        nowShow = index;
    });
    $('#left-bottom ul li').hover(function() {
        index = $(this).attr("index");
        if (index != 1) {
            $('#firstSelect').css("background", "#005da0");
        } else {
            $('#firstSelect').css("background", "#3385ff");
        }

    });
    //给第一个添加显示的属性

});