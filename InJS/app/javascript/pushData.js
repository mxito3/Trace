/*
 * @Author: YP
 * @Date:   2018-08-07 08:43:43
 * @Last Modified by:   YP
 * @Last Modified time: 2018-08-07 14:24:55
 */
//用来写数据上链的js

var Push =Push|| {
    addCrab: function addCrab() {
        //获得数据
        var id = $("#addNew input[name='crabId']").val();
        var poolId = $("input[name='poolId']").val();
        var operator = $("#addNew input[name='operator']").val();
        // console.log(id + poolId + operator);
        app.addCrab(id,operator,poolId,Push.callback);
    },
    pushFeed:function () {
        var id =  $("#addFeed input[name='crabId']").val();
        var feedName = $("#addFeed input[name='feedName']").val();
        var operator = $("#addFeed input[name='operator']").val();
        app.pushFeed(id,feedName,operator,Push.callback)
        // console.log(id+feedName+operator);
    },
    pushWaterQuality:function () {
        var id =  $("#addWaterQuality input[name='crabId']").val();
        var  whetherQualified = $("#addWaterQuality input[name='whetherQualified']").val();
        var checkAgent = $("#addWaterQuality input[name='checkAgent']").val();
        var density = $("#addWaterQuality input[name='density']").val();
        var operator = $("#addWaterQuality input[name='operator']").val();
        app.pushWaterQuality(id,whetherQualified,checkAgent,density,operator,Push.callback);
        // app.pushwaterQuality(id,feedName,operator,Push.callback)
    },
    pushTransfer:function(){
         var id =  $("#addTransfer input[name='crabId']").val();
        var from= $("#addTransfer input[name='from']").val();
        var to = $("#addTransfer input[name='to']").val();
        var operator = $("#addTransfer input[name='operator']").val();
        // console.log(id+"  "+from+"  "+to+"  "+operator);
        app.pushTransfer(id,from,to,operator,Push.callback);
    },
    pushStore:function () {
        var id =  $("#addStore input[name='crabId']").val();
        var temperature= $("#addStore input[name='temperature']").val();
        var wetness = $("#addStore input[name='wetness']").val();
        var operator = $("#addStore input[name='operator']").val();
        app.pushStore(id,temperature,wetness,operator,Push.callback);

    },
    callback:function(hash)
    {
    	alert("交易发起成功,hash值是"+hash);
    }
};

$(
    document).ready(function() {
    	//app.addCrab(2, 'lili', '890787');
		//app.pushFeed(1,'超级健康的饲料','yapie');
        //app.pushWaterQuality(1,true,"北京水质检测机构",50,'yapie');
       // app.pushTransfer(1,'天水','海南','yapie');
        //app.pushStore(1,35,30,'yapie');
    $('#addNew div button').click(function() {
        console.log("点击了")
        Push.addCrab();
    });

    $('#addFeed div button').click(function() {
        console.log("点击了")
        Push.pushFeed();
    });

     $('#addWaterQuality div button').click(function() {
        console.log("点击了")
        Push.pushWaterQuality();
    });
     $('#addTransfer div button').click(function() {
        console.log("点击了")
        Push.pushTransfer();
    });
     $('#addStore div button').click(function() {
        console.log("点击了")
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