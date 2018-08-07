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
            location.href = 'showData.html';
            //alert("正在为id为 "+id+" 的闸蟹进行溯源，请稍后");
        });
});