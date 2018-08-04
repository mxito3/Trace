var Web3 = require('web3'); //引包
var app = app || {
    contract: {},
    init: function() {
        web3 = web3.currentProvider;
        if (web3.isConnected()) {
            return true;
        } else {
            return false;
        }
    },
    getContract: function() {
        var abi = [{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"temperature","type":"uint256"},{"indexed":false,"name":"wetness","type":"uint256"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushStoreInformation","type":"event"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_opratorName","type":"string"},{"name":"_poolId","type":"uint256"}],"name":"addcrab","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"temperature","type":"uint256"},{"name":"wetness","type":"uint256"},{"name":"_opratorName","type":"string"}],"name":"changeStoreInformation","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_feedName","type":"string"},{"name":"_opratorName","type":"string"}],"name":"pushFeed","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"feedName","type":"string"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushFeedInformation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"addCrab","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"whetherQualified","type":"bool"},{"indexed":false,"name":"checkAgent","type":"string"},{"indexed":false,"name":"crabDensity","type":"uint256"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushWaterQualityInformation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"from","type":"string"},{"indexed":false,"name":"to","type":"string"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushTransferInformation","type":"event"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"from","type":"string"},{"name":"to","type":"string"},{"name":"_opratorName","type":"string"}],"name":"pushTransfer","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_whetherQualified","type":"bool"},{"name":"_checkAgent","type":"string"},{"name":"_animalDensity","type":"uint256"},{"name":"_opratorName","type":"string"}],"name":"pushWaterQuality","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crabs","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"exist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"existSuchCrab","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"feedInfo","outputs":[{"name":"time","type":"uint256"},{"name":"opratorName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeInfo","outputs":[{"name":"time","type":"uint256"},{"name":"opratorName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transferInfo","outputs":[{"name":"time","type":"uint256"},{"name":"opratorName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"waterInfo","outputs":[{"name":"time","type":"uint256"},{"name":"opratorName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
        //console.log(JSON.stringify(abi));
        var contract = web3.eth.contract(abi).at('0xe4c95fd3ca448f7e3549234d08da1182ce831409');
        return contract;
    },
    transfer: function(from, to, _value, fromPassword) {
        web3.personal.unlockAccount(from, fromPassword, function(error, result) {
            if (!error) {
                app.getContract().transfer.sendTransaction(to, _value, { from: from }, function(error, data) {
                    if (!error) {
                        alert("交易发起成功，hash值是"+data);
                        app.lockAccount(from);
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                })
            } else {
                return false;
            }
        });
    },
    lockAccount: function(account) {
        if (!app.isAddress(account)) {
            return;
        } else {
            web3.personal.lockAccount(account, function(error, data) {
                if (!error) {
                    console.log("锁定" + account + "成功");
                } else {
                    console.log("锁定" + account + "失败,原因是" + error);
                }
            })
        }
    },
    isAddress: function(address) {
        if (web3.isAddress(address)) {
            return true;
        } else {
            return false;
        }
    }
};


//控制代码

$(document).ready(
    function() {
        var from = "0x18f3a6fbdd28a0488230925c3d4390f8450b7ce5"; //账户地址
        var fromPassword = 'test';
        if (app.init()) {
            alert("连接成功");
        } else {
            alert("连接失败");
        }

        //监听提交按钮
        $('#button').click(function() {
            var to = $('#address').val();
            //判断to是不是合法地址
            if (!app.isAddress(to)) {
                alert("无效地址")
            } else {
                var amount = $('#amount').val();
                app.transfer(from, to, amount, fromPassword);
                //查询到交易成功之后调用这个方法查询余额
                console.log("收款账户余额是" + app.getBalance(to));
            }

            
        });
    }
);