pragma solidity ^0.4.16;
library crabInformation
{
    
  struct base 
    {
        uint  time ;
        string opratorName;
        
    }
    struct feed 
    {
        string feedName; //基础信息
    }

    struct waterQuality{
        bool whetherQualified;
        string checkAgent;
        uint animalDensity;//蟹苗密度
    }
    struct transfer{
        
        string from; //出发地
        string to;  //下一站 
    }
    struct store{
        uint temperature;
        uint wetness;
    }

}


contract crab
{ 
    uint public id;
    uint public poolId;
    crabInformation.base public initInformation;
    crabInformation.feed[] public feedInformation;
    crabInformation.waterQuality[] public waterQualityInformation;
    crabInformation.transfer[] public transferInformation;
    crabInformation.store[] public storeInformation;
    function crab (uint _id,string _opratorName,uint _poolId) public  {
        id=_id;
        initInformation.time=now;
        initInformation.opratorName=_opratorName;
        poolId=_poolId;
    }
    function changeFeed (string _feedName) public returns(bool res) 
    {
        feedInformation.push(crabInformation.feed(_feedName));
        return true;

    }
    function changeWaterQuality (bool _whetherQualified,string _checkAgent,uint _animalDensity) public returns(bool res)  
    {
      
        waterQualityInformation.push(crabInformation.waterQuality(_whetherQualified,_checkAgent,_animalDensity));
        return true;
    }
    function changeTransfer(string from,string to) public returns(bool res) 
    {
        transferInformation.push(crabInformation.transfer(from,to));
        return true;
    }
    function changeStore (uint temperature,uint wetness) public returns(bool res)
    {
        storeInformation.push(crabInformation.store(temperature,wetness));
        return true;
    }

}

contract Trace {
    //修改时间
    
    mapping (uint => crab) public crabs;
    mapping (uint => bool) public exist;
    event addCrab(uint id,string opratorName);
    event pushFeedInformation (uint id,string feedName,string opratorName);
    event pushWaterQualityInformation (uint id,bool whetherQualified,string checkAgent,uint crabDensity,string opratorName);
    event pushTransferInformation (uint id,string from,string to,string opratorName);
    event pushStoreInformation (uint id,uint temperature,uint wetness,string opratorName);
    crabInformation.base[] public feedInfo;
    crabInformation.base[] public waterInfo;
    crabInformation.base[] public transferInfo;
    crabInformation.base[] public storeInfo;
    
    function Trace () public {
        
    }
    
    function addcrab (uint _id,string _opratorName,uint _poolId) public returns(bool res)  
    {
        //判断是不是存在了
        crabs[_id]=new crab(_id,_opratorName,_poolId);
        emit addCrab(_id,_opratorName);
        return true;
    }
    
    function pushFeed(uint _id,string _feedName,string _opratorName) public returns(bool res)
    {
        if(!existSuchCrab(_id))
        {
            return false;
        }
        else
        {
            crabs[_id].changeFeed(_feedName);
            feedInfo.push(crabInformation.base(now,_opratorName));
            emit pushFeedInformation(_id,_feedName,_opratorName);
            return true;
        }
    }
    
    
    

    function pushWaterQuality (uint _id,bool _whetherQualified,string _checkAgent,uint _animalDensity,string _opratorName) public returns(bool res)  
    {
        if(!existSuchCrab(_id))
        {
            return false;
        }
        else
        {
            crabs[_id].changeWaterQuality(_whetherQualified,_checkAgent,_animalDensity);
            waterInfo.push(crabInformation.base(now,_opratorName));
            emit pushWaterQualityInformation(_id,_whetherQualified,_checkAgent,_animalDensity,_opratorName);
            return true;
        }
    }
    
    function pushTransfer (uint _id,string from,string to,string _opratorName) public returns(bool res) 
    {
        if(!existSuchCrab(_id))
        {
            return false;
        }
        else
        {
            crabs[_id].changeTransfer(from,to);
            transferInfo.push(crabInformation.base(now,_opratorName));
            emit pushTransferInformation(_id,from,to,_opratorName);
            return true;
        }
    }

    function changeStoreInformation (uint _id,uint temperature,uint wetness,string _opratorName) public returns(bool res)  
    {
        if(!existSuchCrab(_id))
        {
            return false;
        }
        else
        {
            crabs[_id].changeStore(temperature,wetness);
            emit pushStoreInformation (_id,temperature,wetness,_opratorName);
            storeInfo.push(crabInformation.base(now,_opratorName));
            return true;
        }
    }

    function existSuchCrab(uint id) public view returns(bool res)
    {
        if(exist[id]==true)
        {
            return true;
        }
        else
        {
            return false;
        }
        
    }
}

