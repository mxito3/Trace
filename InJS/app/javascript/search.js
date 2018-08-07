/*
 * @Author: YP
 * @Date:   2018-08-07 14:28:34
 * @Last Modified by:   YP
 * @Last Modified time: 2018-08-07 20:44:35
 */

function search(id) {
    //获得id
    app.getInformation(id, resolveData);

    //回调函数
    function resolveData(data) {
    	//console.log("id是"+id);
        var crabInfo = data[0];
        var traceInfo = data[1];
       
       //写基础信息
        var initInfo = crabInfo.initInfo;
        var poolId = web3.toDecimal(crabInfo.poolId);
        $('#crabId').html(id);
        $('#poolId').html(poolId);
        var addTime=web3.toDecimal(initInfo[0]);
        $('#addtime').html(addTime);
        var addOprator=initInfo[1];
        $('#addPerson').html(addOprator);

        //写入饲料信息
        var feedInfo = crabInfo.feedInfo;
        var traceFeed = traceInfo.feedInfo;
        var feedHtml='饲料名:<span id="feedName"></span><br>'+'更换时间:<span id='+'"time"></span><br>'+'数据上链人:<span id="operator"></span>';
        var feedLength=feedInfo.length;
        var feedInsertPositon='#feedInfo .details';
        insertHtml(feedInsertPositon,feedHtml,feedLength);
        //console.log(feedInfo);
        //console.log(traceFeed);
        for (let i = 0; i < feedInfo.length; i++) 
        {
        	//console.log(feedInfo[i]);
        	$('#feedInfo #detail'+i+' #feedName').html(feedInfo[i]);
        	$('#feedInfo #detail'+i+' #time').html(web3.toDecimal(traceFeed[i][0]));
        	$('#feedInfo #detail'+i+' #operator').html(traceFeed[i][1]);
            //console.log(traceFeed[i]);
        }
        


        console.log("水质");
        var tracewater = traceInfo.waterInfo;
        var waterInfo = crabInfo.waterInfo;
        for (let i = 0; i < waterInfo.length; i++) 
        {
            console.log(tracewater[i]);
            console.log(waterInfo[i]);
        }
        for (let i = 0; i < tracewater.length; i++) {


            //console.log(tracewater[i]);
        }

        //console.log("存储");
        var storeInfo = crabInfo.storeInfo;
        var tracestore = traceInfo.storeInfo;
        for (let i = 0; i < storeInfo.length; i++) {

            //console.log(storeInfo[i]);
        }
        for (let i = 0; i < tracestore.length; i++) {

            //console.log(tracestore[i]);
        }

        //console.log("转运");
        var transferInfo = crabInfo.transferInfo;
        var tracetransfer = traceInfo.transferInfo;
        for (let i = 0; i < transferInfo.length; i++) {

            //console.log(transferInfo[i]);
        }
        for (let i = 0; i < tracetransfer.length; i++) {

            //console.log(tracetransfer[i]);
        }





        //溯源信息

    }
}

function insertHtml(insertPosition,insertContent,insertQuatity)
{
	//console.log("in");
	//console.log(insertPosition);
	//console.log(insertContent);
	//console.log(insertQuatity);
	var haveInserted=0;
	for(let i=0;i<insertQuatity;i++)
	{
		
		if(i==0)
		{
			$(''+insertPosition).html("<div id=detail"+i+"></div>");//插入挂载点
			//$(''+insertPosition).html(insertContent);
			
		}
		else
		{
			//console.log("i是"+i+"havaInsert is "+haveInserted);
			var position=i-1; 
			$('#detail'+position).after("<div id=detail"+haveInserted+"></div>");
		}
		haveInserted++;
		$('#detail'+i).html(insertContent);
		//添加新的挂载点
		//$('#detail'+i).html(insertContent+"<div id=datail"+haveInserted+"></div>");
	}
}

$(document).ready(function() {
		//console.log(window.needsearchId);
		 var id=$.cookie('needsearchCrabId');
		 ///console.log(id);
		 search(id);
});