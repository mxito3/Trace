/*
* @Author: YP
* @Date:   2018-08-07 17:26:44
* @Last Modified by:   YP
* @Last Modified time: 2018-08-07 17:32:25
*/
$(document).ready(function(){
	$('#submitButton').click(function() {
            window.needsearchId = $('#searchBar').val();
            console.log(needsearchId);
            $.cookie('needsearchCrabId',needsearchId);
            app.checkExist(needsearchId,function(result){
            if(result)
            {
                location.href = 'showData.html';
            }
            else
            {
                alert("不存在id为 "+needsearchId+"  的闸蟹")
            }
         })
            
            //alert("正在为id为 "+id+" 的闸蟹进行溯源，请稍后");
        });
});