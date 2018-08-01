pragma solidity ^0.4.24;


contract baseInformation
{
    uint time;
    string opratorName;
    function addTimeAndOperator(strign _opratorName) external
    {
        opratorName=_opratorName;
        time=now;
    }
}

contract feed {
      uint name; //基础信息
      baseInformation base;//基础信息  has a的关系
}

contract waterQuality{
    bool whetherQualified;
    string checkAgent;
    uint animalDensity;//蟹苗密度
    baseInformation base;//基础信息  has a的关系
}
contract transfer{
    string from; //出发地
    string to;  //下一站   
    baseInformation base;//基础信息  has a的关系
}
contract store{
    uint temperature;
    uint wetness;
    baseInformation base;//基础信息  has a的关系
}

contract crab
{ 
    uint id;
    baseInformation initCrab;//初始加入时间
    feed[] feed;
    waterQuality[] waterQuality;
    transferInformation[] transferInformation;
    storeInformation[] storeInformation;
    function crab (uint _id) returns(bool res) internal {
        id=_id;
        return true;
    }

}

contract Trace {
    //修改时间
 
    mapping (uint => crab) crabs;
    mapping (uint => bool) exist;

    modifier onlyOwner(address userAddress) { 
        require (msg.sender == userAddress); 
        _; 
    }

    function addcrab (uint _id,string opratorName) returns(bool res) internal {
        //判断是不是存在了
        crabs[_id]=new crab(_id);
        exist[_id]=true;
        crabs[_id].initCrab.addTimeAndOperator(opratorName);
        return true;
    }
    function changeFeed (uint _id,uint feedName,string opratorName) returns(bool res) public 
    {
        if(!exist[_id])
        {
            return false;
        }
        else
        {
            crabs[_id].feed.add(new feed(feedName));
            crabs[_id].feed.addTimeAndOperator(opratorName);
            return true;
        }
    }
    function changeWaterQuality (uint _id,bool _whetherQualified,string _checkAgent,uint _animalDensity,string _opratorName) returns(bool res) public 
    {
        if(!exist[_id])
        {
            return false;
        }
        else
        {
            crabs[_id].changeWaterQuality.add(new waterQuality(_whetherQualified,_checkAgent,_animalDensity));
            addTimeAndOperator(3,_id,opratorName);
            return true;
        }
    }

    

}

