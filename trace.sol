pragma solidity ^0.4.24;

struct feed  //饲料
{    
    uint name;
    //string[] ingredent;//成分 
}

struct waterQuality  //水质
{
    bool whetherQualified;
    string checkAgent;
    uint animalDensity;//蟹苗密度
}


struct  transferInformation 
{
    string from; //出发地
    string to;  //下一站       
}

struct storeInformation
{
    uint temperature;
    uint wetness;
}
struct changeTimeAndOperator
{
    uint time;
    string opratorName;
}

contract crab
{
     
    uint id;
    feed[] feed;
    waterQuality[] waterQuality;
    transferInformation[] transferInformation;
    storeInformation[] storeInformation;
    changeTimeAndOperator addcrab;
    changeTimeAndOperator[] changeFeed;  //饲料信息  
    changeTimeAndOperator[] changeWaterQuality;  //水质信息
    changeTimeAndOperator[] changeProtein;  //蛋白质信息
    changeTimeAndOperator[] changeTransfer;     //转运信息
    changeTimeAndOperator[] changeStore;    //存储信息
    function crab (uint _id) returns(bool res) internal {
        id=_id;
        return true;
    }
    
}

contract Trace {
    //修改时间
 
    mapping (uint => crab) crabs;
    mapping (uint => bool) exist;
    
    function addcrab (uint _id,string opratorName) returns(bool res) internal {
        //判断是不是存在了
        crabs[_id]=new crab(_id);
        addTimeAndOperator(1,_id,opratorName);
        exist[_id]=true;
        return true;
    }
    function changeFeed (uint _id,uint name,string opratorName) returns(bool res) internal {
        if(!exist[_id])
        {
            return false;
        }
        else
        {
            crabs[_id].changeFeed.add(new feed(name));
            addTimeAndOperator(2,_id,opratorName);
        }
    }
    
    function Trace () {
        
    }

    modifier onlyOwner(address userAddress) { 
        require (msg.sender == userAddress); 
        _; 
    }
    
    function addAnimal () returns(bool res) public onlyOwner {
        
    }
    
    function  () returns(bool res) internal {
         
     }
    
    function addTimeAndOperator (uint id,uint type,string opratorName) returns(bool res) internal 
    {

        //冗余度过高，明天优化
        if(type ==1 )//add crab
        {
            crabs[id].addcrab.time = now;
            crabs[id].addcrab.opratorName=opratorName;
        }
        else if( type==2 )//change or add feed message
        {
            crabs[id].changeFeed.time=now;
            crabs[id].changeFeed.opratorName=opratorName;
        }
    }
    

}

