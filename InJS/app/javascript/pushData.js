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
        var id = $("input[name='crabId']").val();
        var poolId = $("input[name='poolId']").val();
        var addCrabOPerator = $("input[name='addCrabOPerator']").val();
        console.log(id + poolId + addCrabOPerator);
        app.addCrab(id,addCrabOPerator,poolId,Push.callback);
    },
    test:function()
    {
    	console.log("in push");
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
        Push.addCrab();
    });

    //隐藏和显示并改变悬浮的li的背景
    var nowShow = 1;
    $('.operate[index="1"]').show();
    $('#firstSelect').css("background", "#3385ff");
    $('#left-bottom ul li').click(function() {
        console.log($(this).attr("index"));
        index = $(this).attr("index");
        // $('#firstSelect').css("background","#005da0");
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