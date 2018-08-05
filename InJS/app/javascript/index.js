var Web3 = require('web3'); //引包
var Buffer = require('buffer').Buffer;
var Tx = require('ethereumjs-tx');
var app = app || {
    contract: {
        traceAbi: [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "storeInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "feedInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "existSuchCrab", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "from", "type": "string" }, { "name": "to", "type": "string" }, { "name": "_opratorName", "type": "string" }], "name": "pushTransfer", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "exist", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_whetherQualified", "type": "bool" }, { "name": "_checkAgent", "type": "string" }, { "name": "_animalDensity", "type": "uint256" }, { "name": "_opratorName", "type": "string" }], "name": "pushWaterQuality", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "waterInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "transferInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "crabs", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_opratorName", "type": "string" }, { "name": "_poolId", "type": "uint256" }], "name": "addcrab", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "temperature", "type": "uint256" }, { "name": "wetness", "type": "uint256" }, { "name": "_opratorName", "type": "string" }], "name": "changeStoreInformation", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_feedName", "type": "string" }, { "name": "_opratorName", "type": "string" }], "name": "pushFeed", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "addCrab", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "feedName", "type": "string" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushFeedInformation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "whetherQualified", "type": "bool" }, { "indexed": false, "name": "checkAgent", "type": "string" }, { "indexed": false, "name": "crabDensity", "type": "uint256" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushWaterQualityInformation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "from", "type": "string" }, { "indexed": false, "name": "to", "type": "string" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushTransferInformation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "temperature", "type": "uint256" }, { "indexed": false, "name": "wetness", "type": "uint256" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushStoreInformation", "type": "event" }],
        traceAddress: '0xdee6b36fab0075a33a6a3d25ee4a4e0e4c179cf2',
        crabAbi: [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "waterQualityInformation", "outputs": [{ "name": "whetherQualified", "type": "bool" }, { "name": "checkAgent", "type": "string" }, { "name": "animalDensity", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "feedInformation", "outputs": [{ "name": "feedName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_feedName", "type": "string" }], "name": "changeFeed", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_whetherQualified", "type": "bool" }, { "name": "_checkAgent", "type": "string" }, { "name": "_animalDensity", "type": "uint256" }], "name": "changeWaterQuality", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "string" }, { "name": "to", "type": "string" }], "name": "changeTransfer", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "poolId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "initInformation", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "temperature", "type": "uint256" }, { "name": "wetness", "type": "uint256" }], "name": "changeStore", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "id", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "storeInformation", "outputs": [{ "name": "temperature", "type": "uint256" }, { "name": "wetness", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "transferInformation", "outputs": [{ "name": "from", "type": "string" }, { "name": "to", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_opratorName", "type": "string" }, { "name": "_poolId", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }],
        traceContract: {}
    },
    init: function() {
        web3 = new Web3(web3.currentProvider);
        if (web3.isConnected()) {
            app.contract.traceContract = app.getContract(app.contract.traceAbi, app.contract.traceAddress);
            //console.log(app.traceContract);
            return true;
        } else {
            return false;
        }
    },
    getContract: function(abi, address) {
        var contract = web3.eth.contract(abi).at(address);
        return contract;
    },
    isAddress: function(address) {
        if (web3.isAddress(address)) {
            return true;
        } else {
            return false;
        }
    },
    callback: function(error, result) {
        if (!error) {
            console.log(result);
        } else {
            console.log(error);
        }
    },
    addCrab: function(_id, _opratorName, _poolId) {
        var privateKey = '5d31923340309002c7b07c9e2a01cd6e1618b1dff75bdf6b369bc9bb6472d0e1';
        var data = app.getContract().addcrab.getData(_id, _opratorName, _poolId);
        var pk = new Buffer(privateKey, 'hex');
        //getNonce
        var ourAddress = "0x9C37fCa258063a6B8F02f332d72210D3cE4EE4dA";
        var nonce = 0;
        var contractAddress = '0xe4c95fd3ca448f7e3549234d08da1182ce831409';
        // use sign transaction
        function test(error, result) {
            if (!error) {
                var gasPrice = result;
                console.log(web3.toDecimal(gasPrice));
                var gasLimit = 3000000000;
                web3.eth.getTransactionCount(ourAddress, function(error, result) {
                    if (!error) {
                        nonce = result;
                        var tx = new Tx({
                            from: ourAddress,
                            nonce: nonce,
                            to: contractAddress,
                            value: 0,
                            data: data,
                            gasPrice: web3.toDecimal(gasPrice),
                            gasLimit: gasLimit
                        });
                        tx.sign(pk);
                        var serializedTx = '0x' + tx.serialize().toString('hex');
                        web3.eth.sendRawTransaction(serializedTx, function(err, hash) {
                            if (!err) {
                                console.log('transaction hash : ', hash);
                            } else {
                                console.error('error is ', err);
                            }
                        });
                    } else
                        console.log(error);
                });

            }
        }

        // web3.personal.unlockAccount(address,addressPassword,function(error,result)
        //     {
        //         if(!error)
        //         {

        //         }
        //     });
        app.getContract().addcrab.sendTransaction(_id, _opratorName, _poolId, { from: ourAddress }, function(error, result) {
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }
        });
    },
    unlockAccountAndExetract: function(address, addressPassword, fun) {
        // web3.eth.getAccounts(function(err, accounts) {
        //     console.log(accounts[0]);
        //     fun;
        // })
        // web3.personal.unlockAccount(address,addressPassword,100,function(error,result)
        //     {
        //         if(!error)
        //         {
        //             fun();
        //         }
        //         else
        //         {
        //             console.log('解锁错误');
        //             console.log(error);
        //         }
        //     });
        // //console.log(web3.eth);
        //fun();
    },
    fun: function() {
        console.log("now is in fun");
    },
    getInformation: function(id) {
        var temp = 0;
        var traceMes = [];

        function fun(result) {
             traceMes.push(result);
             temp++;
             if(temp==4)
                console.log(traceMes);
        }
        for (var i = 1; i <= 4; i++) {
            app.getTraceInfo(id, i, fun);
        }


        // var test=info.then(function(result)
        //     {
        //         console.log("in test result is"+result);
        //     });
        // function getDetailInformation(result,haveGot)
        // {
        //     console.log("in");
        //     console.log(result);
        //     console.log(haveGot);
        //      var p1 = new Promise(
        //             function(resolve, reject) {
        //                 if (haveGot == 0) {
        //                     console.log("in get feed");
        //                     contract.feedInfo.call(id, callback);
        //                 }

        //                 function callback(error, result) {
        //                     if (!error) {
        //                         console.log("in callback");
        //                         resolve(result);
        //                     } else {
        //                         resolve(error);
        //                     }
        //                 }

        //             });

        //         p1.then(
        //             function(result) {
        //                 console.log("in then" + result);
        //             },
        //             function(error) {
        //                 console.log(error);
        //             });
        //         //
        //         //contract.waterInfo.call(id,app.callback);
        // }







        // if(!app.existSuchCrab(id))
        // {
        //     console.log("错误的id");
        // }
        // else
        // {
        //     app.traceContract.feedInfo.call(id,app.callback);
        // }

        // app.traceContract.crabs.call(id,function(error,result)
        //     {
        //         if(!error)
        //         {
        //             var information={};
        //             var p1=new Promise(function(){
        //                 app.traceContract.feedInfo.call();
        //             });
        //             p1.then(function(error,result){
        //                 if(!error)
        //                 {
        //                     console.log(result);
        //                 }
        //             });


        // function callback(error,result)
        // {
        //     if(!)
        //     if(type==1)
        //     {

        //     }
        // }


        //  }
        //});
        // crabInformation.feed[] public feedInformation;
        // crabInformation.waterQuality[] public waterQualityInformation;
        // crabInformation.transfer[] public transferInformation;
        // crabInformation.store[] public storeInformation;
    },
    getCrabInfo:function(){},
    getTraceInfo: function(id, type, fun) {
        var contract = app.contract.traceContract;
        var haveGot = 0;

        var existOrNot = new Promise(function(resolve, reject) {
            contract.exist.call(id, function(error, result) {
                if (!error) {
                    resolve(type);
                } else {
                    reject();
                }
            });
        }).then(
            function getDetailInformation(type) {
                if (type == 1)
                    contract.feedInfo.call(id, callback);
                else if (type == 2)
                    contract.waterInfo.call(id, callback);
                else if (type == 3)
                    contract.transferInfo.call(id, callback);
                else if (type == 4)
                    contract.storeInfo.call(id, callback);
            }
        );

        function callback(error, result) {
            if (!error) {
                console.log("in callback result is" + result);
                fun(result);
            } else {
                //resolve(error);
                console.log("is error");

            }
        }
    },
    existSuchCrab: function(id) {
        if (web3.isConnected())
            app.contract.traceContract.exist.call(id, app.callback);
        else
            console.log("mei");
    }

};


//控制代码

$(document).ready(
    function() {
        var ourAddress = "0x9C37fCa258063a6B8F02f332d72210D3cE4EE4dA"; //账户地址
        var ourPassword = 'domore0325';
        if (app.init()) {
            console.log("连接成功");
        } else {
            alert("连接失败");
        }
        //app.unlockAccountAndExetract(ourAddress,ourPassword,app.fun);
        //app.getData();
        ///app.addCrab(1, 'yapie', '890787');
        app.getInformation(1);
        //console.log(app.contract.traceContract);
        //app.existSuchCrab(1);
        //监听提交按钮
        //console.log(app.isValidId(1,app.callback));
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