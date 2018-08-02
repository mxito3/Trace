pragma solidity ^0.4.16;

library crabInformation
{
	    struct base 
	{
	    uint  time ;
	    string opratorName;
	}

	struct feed {
	      string name; //基础信息
	      base baseInformation;
	}

	struct waterQuality{
	    bool whetherQualified;
	    string checkAgent;
	    uint animalDensity;//蟹苗密度
	    base baseInformation;
	}
	struct transfer{
	    
	    string from; //出发地
	    string to;  //下一站 
	    base baseInformation;  
	}
	struct store{
	    uint temperature;
	    uint wetness;
	    base baseInformation;
	}

}


contract crab
{ 
    uint id;
    crabInformation.base initCrab;//初始加入时间
    crabInformation.feed[] feedInformation;
    crabInformation.waterQuality[] waterQualityInformation;
    crabInformation.transfer[] transferInformation;
    crabInformation.store[] storeInformation;
    function crab (uint _id,string _opratorName) public  {
        id=_id;
        initCrab.time=now;
        initCrab.opratorName=_opratorName;
    }

}

contract Trace {
    //修改时间
 
    mapping (uint => crab) crabs;
    mapping (uint => bool) exist;
    event addcrab(uint id,string opratorName);
    event changeFeed (uint id,string feedName,string opratorName);
    event changeWaterQuality (uint id,bool whetherQualified,string checkAgent,uint crabDensity,string opratorName);
    event changeTransferInformation (uint id,string from,string to,string opratorName);
    event changeStoreInformation (uint id,uint temperature,uint wetness,string opratorName);
    modifier onlyOwner(address userAddress) { 
        require (msg.sender == userAddress); 
        _; 
    }

    function Trace ()  {
        
    }
    
    function addcrab (uint _id,string _opratorName) public returns(bool res)  
    {
        //判断是不是存在了
        crabs[_id]=new crab(_id,_opratorName);
        emit addcrab(_id,_opratorName);
        return true;
    }

    function changeFeed (uint _id,string _feedName,string _opratorName) public returns(bool res) 
    {
        if(!exist[_id])
        {
            return false;
        }
        else
        {
            
            
            crabs[_id].feedInformation.push(
                crabInformation.feed(
                {
                name:_feedName,
                baseInformation:crabInformation.base
                ({
                    time:now,
                    opratorName:_opratorName
                })
                }
                ));
            emit  changeFeed (_id,_feedName,_opratorName);
            return true;
        }
    }

    function changeWaterQuality (uint _id,bool _whetherQualified,string _checkAgent,uint _animalDensity,string _opratorName) public returns(bool res)  
    {
        if(!exist[_id])
        {
            return false;
        }
        else
        {
            crabs[_id].waterQualityInformation.push(crabInformation.waterQuality(_whetherQualified,_checkAgent,_animalDensity,crabInformation.base(now,_opratorName)));
            emit changeWaterQuality (_id,_whetherQualified,_checkAgent,_animalDensity,_opratorName);
            return true;
        }
    }
    
    function changeTransferInformation (uint _id,string from,string to,string _opratorName) public returns(bool res) 
    {
        if(!exist[_id])
        {
            return false;
        }
        else
        {
            crabs[_id].transferInformation.push(crabInformation.transferInformation(from,to,crabInformation.base(now,_opratorName)));
            emit changeTransferInformation (_id,from,to,_opratorName);
            return true;
        }
    }

    function changeStoreInformation (uint _id,uint temperature,uint wetness,string _opratorName) public returns(bool res)  
    {
        if(!exist[_id])
        {
            return false;
        }
        else
        {
            crabs[_id].storeInformation.push(crabInformation.storeInformation(temperature,wetness,crabInformation.base(now,_opratorName)));
            emit changeStoreInformation (_id,temperature,wetness,_opratorName);
            return true;
        }
    }
}

