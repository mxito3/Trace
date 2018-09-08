/*
 * @Author: YP
 * @Date:   2018-08-07 14:28:34
 * @Last Modified by:   YP
 * @Last Modified time: 2018-08-07 20:44:35
 */

function search(id) {
    //获得id对应的数据
    app.getInformation(id, resolveData);

    //回调函数
    function resolveData(data) {
    	//console.log("id是"+id);
        console.log("在resolve")
        var crabInfo = data[0];
        var traceInfo = data[1];
       
       //往页面写基础信息
        var initInfo = crabInfo.initInfo;
        var poolId = web3.toDecimal(crabInfo.poolId);
        $('#crabId').html(id);
        $('#poolId').html(poolId);
        var addTime=resolveTime(web3.toDecimal(initInfo[0]));
        $('#addtime').html(addTime);
        var addOprator=initInfo[1];
        $('#addPerson').html(addOprator);


        //往页面写入饲料信息
        var feedInfo = crabInfo.feedInfo;   //获得饲料信息
        var traceFeed = traceInfo.feedInfo;  //上链时间和上链人
        //需要插入的html
        var feedHtml='饲料名:<span id="feedName"></span><br>'+'更换时间:<span id='+'"time"></span><br>'+'数据上链人:<span id="operator"></span>';
        var feedLength=feedInfo.length;   //数据个数，表示插入代码段的个数
        var feedInsertPositon='#feedInfo .details';  //插入地点
        insertHtml(feedInsertPositon,feedHtml,feedLength,1);
        //console.log(feedInfo);
        //console.log(traceFeed);
        for (let i = 0; i < feedInfo.length; i++) 
        {
        	console.log(feedInfo[i]);
        	$('#feedInfo #detail'+i+' #feedName').html(feedInfo[i]);
        	$('#feedInfo #detail'+i+' #time').html(resolveTime(web3.toDecimal(traceFeed[i][0])));
        	$('#feedInfo #detail'+i+' #operator').html(traceFeed[i][1]);
            console.log(traceFeed[i]);
        }
        

        //往页面写水质信息
        console.log("水质");
        var tracewater = traceInfo.waterInfo;
        var waterInfo = crabInfo.waterInfo;
        var waterQualityHtml = '<div class="details"></div> 检测部门:<span id="checkAgent"></span><br> '+'是否达标:<span id="whetherQualify"></span><br>'+'蟹苗密度:<span id="demisty"></span><br>'+'上链时间:<span id="time"></span><br>上链人:'+'<span id="operator"></span><br>'
        var waterQualitylength = waterInfo.length
        var waterQualityInsertPosition = '#waterInfo .details';  //插入地点
        insertHtml(waterQualityInsertPosition,waterQualityHtml,waterQualitylength,2);
        // for (let i = 0; i < waterInfo.length; i++) 
        // {
        //     console.log(tracewater[i]);
        //     console.log(waterInfo[i]);
        // }
        for (let i = 0; i < tracewater.length; i++) {

            $('#waterInfo #detail'+i+' #whetherQualify').html(waterInfo[i][0]);
            $('#waterInfo #detail'+i+' #checkAgent').html(waterInfo[i][1]);
            $('#waterInfo #detail'+i+' #demisty').html(web3.toDecimal(waterInfo[i][2]));
            $('#waterInfo #detail'+i+' #time').html(resolveTime(web3.toDecimal(tracewater[i][0])));
            resolveTime(web3.toDecimal(tracewater[i][0]));
            $('#waterInfo #detail'+i+' #operator').html(tracewater[i][1]);
        }





       

        //console.log("转运");
        var transferInfo = crabInfo.transferInfo;
        var tracetransfer = traceInfo.transferInfo;
        var transferInsertHtml = '上一站:<span id="from"></span><br>'+'下一站:<span id="to"></span><br>'+'上链时间:<span id="time"></span><br>'+'上链人:<span id="operator"></span><br>';
        var transferinsertLength = transferInfo.length;
        var trasferInsertPosition = '#transferInfo .details';  //插入地点
        insertHtml(trasferInsertPosition,transferInsertHtml,transferinsertLength,3);
        for (let i = 0; i < transferInfo.length; i++) {

            $('#transferInfo #detail'+i+' #from').html(transferInfo[i][0]);
            $('#transferInfo #detail'+i+' #to').html(transferInfo[i][1]);
            $('#transferInfo #detail'+i+' #time').html(resolveTime(web3.toDecimal(tracetransfer[i][0])));
            $('#transferInfo #detail'+i+' #operator').html(tracetransfer[i][1]);
        }
        for (let i = 0; i < tracetransfer.length; i++) {

          // console.log(transferInfo[i])
          // console.log(tracetransfer[i])
        }


         //console.log("存储");
        var storeInfo = crabInfo.storeInfo;
        var tracestore = traceInfo.storeInfo;
        var storeInsertHtml = '温度:<span id="temperature"></span><br>'+'相对湿度:<span id="wet"></span><br>'+'上链时间:<span id="time"></span><br>'+'上链人:<span id="operator"></span><br>'
        var storeInsertlength = storeInfo.length;
        var storeinsertposition = '#storeInfo .details';  //插入地点
        insertHtml(storeinsertposition,storeInsertHtml,storeInsertlength,4)
        for (let i = 0; i < storeInfo.length; i++) {

            $('#storeInfo #detail'+i+' #temperature').html((web3.toDecimal(storeInfo[i][0]).toString()+" ℃"));
            $('#storeInfo #detail'+i+' #wet').html(web3.toDecimal(storeInfo[i][1]).toString()+" %");
            $('#storeInfo #detail'+i+' #time').html(resolveTime(web3.toDecimal(tracestore[i][0])));
            $('#storeInfo #detail'+i+' #operator').html(tracestore[i][1]);
        }
        for (let i = 0; i < tracestore.length; i++) {
            console.log(storeInfo[i]);
            console.log(tracestore[i]);
        }


        //溯源信息

    }
}

function resolveTime(unixTime)
{
    var result = new Date(unixTime * 1000);
    return result;
}
function insertHtml(insertPosition,insertContent,insertQuatity,type)
{
    var css= 'style="border-bottom:solid 1px blue;"'	
	var haveInserted=0;
    var insertAfter='';//需要插入地点的父节点

    //根据插入类型确定插入地点的父节点
    if(type==1)
    {
        insertAfter='feedInfo'
    }
    else if(type==2)
    {
        insertAfter='waterInfo'
    }
    else if(type==3)
    {
        insertAfter='transferInfo'
    }
    else if(type==4)
    {
        insertAfter='storeInfo'
    }

	for(let i=0;i<insertQuatity;i++)
	{
		
		if(i==0)
		{
			$(''+insertPosition).html("<div id=detail"+i+"  "+css+"></div>");//插入挂载点
			//$(''+insertPosition).html(insertContent);
			
		}
		else
		{
			//console.log("i是"+i+"havaInsert is "+haveInserted);
			var position=i-1; 
			$('#'+insertAfter+' #detail'+position).after("<div id=detail"+haveInserted+"  "+css+"></div>");
		}
		haveInserted++;
		$('#'+insertAfter+' #detail'+i).html(insertContent);
		//添加新的挂载点
		//$('#detail'+i).html(insertContent+"<div id=datail"+haveInserted+"></div>");
	}
}

$(document).ready(function() {
		//console.log(window.needsearchId);
		 var id=$.cookie('needsearchCrabId');
		 console.log(id);
		 search(id);
});
