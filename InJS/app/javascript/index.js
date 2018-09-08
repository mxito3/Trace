var Web3 = require('web3'); //引包
var Buffer = require('buffer').Buffer;
var Tx = require('ethereumjs-tx');
// $.getScript('./app/javascript/pushData.js');
window.app = {
    contract: {
        traceAbi: [{ "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "temperature", "type": "uint256" }, { "indexed": false, "name": "wetness", "type": "uint256" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushStoreInformation", "type": "event" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_opratorName", "type": "string" }, { "name": "_poolId", "type": "uint256" }], "name": "addcrab", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "from", "type": "string" }, { "indexed": false, "name": "to", "type": "string" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushTransferInformation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "whetherQualified", "type": "bool" }, { "indexed": false, "name": "checkAgent", "type": "string" }, { "indexed": false, "name": "crabDensity", "type": "uint256" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushWaterQualityInformation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "feedName", "type": "string" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "pushFeedInformation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "opratorName", "type": "string" }], "name": "addCrab", "type": "event" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "temperature", "type": "uint256" }, { "name": "wetness", "type": "uint256" }, { "name": "_opratorName", "type": "string" }], "name": "changeStoreInformation", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_feedName", "type": "string" }, { "name": "_opratorName", "type": "string" }], "name": "pushFeed", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "from", "type": "string" }, { "name": "to", "type": "string" }, { "name": "_opratorName", "type": "string" }], "name": "pushTransfer", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_whetherQualified", "type": "bool" }, { "name": "_checkAgent", "type": "string" }, { "name": "_animalDensity", "type": "uint256" }, { "name": "_opratorName", "type": "string" }], "name": "pushWaterQuality", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "crabs", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "exist", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "existSuchCrab", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "feedInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "infoType", "type": "uint256" }], "name": "getLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "storeInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "transferInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }], "name": "waterInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }],
        traceAddress: '0x9351b78ac5ba688375ff822d0ff883b0d2f34ec0',
        crabAbi: [{ "constant": true, "inputs": [{ "name": "infoType", "type": "uint256" }], "name": "getLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "waterQualityInformation", "outputs": [{ "name": "whetherQualified", "type": "bool" }, { "name": "checkAgent", "type": "string" }, { "name": "animalDensity", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "feedInformation", "outputs": [{ "name": "feedName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_feedName", "type": "string" }], "name": "changeFeed", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_whetherQualified", "type": "bool" }, { "name": "_checkAgent", "type": "string" }, { "name": "_animalDensity", "type": "uint256" }], "name": "changeWaterQuality", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getFeedInfo", "outputs": [{ "components": [{ "name": "feedName", "type": "string" }], "name": "", "type": "tuple[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "string" }, { "name": "to", "type": "string" }], "name": "changeTransfer", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "poolId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "initInformation", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "opratorName", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getWaterInfo", "outputs": [{ "components": [{ "name": "whetherQualified", "type": "bool" }, { "name": "checkAgent", "type": "string" }, { "name": "animalDensity", "type": "uint256" }], "name": "", "type": "tuple[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "temperature", "type": "uint256" }, { "name": "wetness", "type": "uint256" }], "name": "changeStore", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "id", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getTransferInfo", "outputs": [{ "components": [{ "name": "from", "type": "string" }, { "name": "to", "type": "string" }], "name": "", "type": "tuple[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getStoreInfo", "outputs": [{ "components": [{ "name": "temperature", "type": "uint256" }, { "name": "wetness", "type": "uint256" }], "name": "", "type": "tuple[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "storeInformation", "outputs": [{ "name": "temperature", "type": "uint256" }, { "name": "wetness", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "transferInformation", "outputs": [{ "name": "from", "type": "string" }, { "name": "to", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_id", "type": "uint256" }, { "name": "_opratorName", "type": "string" }, { "name": "_poolId", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }],
        traceContract: {}
    },
    ourAddress: "0x069abcf74ecd05ea06cb56c4780cd60237082c25", //默认账户地址
    init: function() {
        web3 = new Web3(web3.currentProvider);
        if (web3.isConnected()) {
            app.contract.traceContract = app.getContract(app.contract.traceAbi, app.contract.traceAddress);
            ////console.log(app.traceContract);
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
            //console.log(result);
        } else {
            //console.log(error);
        }
    },
    addCrab: function(_id, _opratorName, _poolId, callback) {
        // var privateKey = '5d31923340309002c7b07c9e2a01cd6e1618b1dff75bdf6b369bc9bb6472d0e1';
        // var data = app.contract.traceContract.addcrab.getData(_id, _opratorName, _poolId);
        // var pk = new Buffer(privateKey, 'hex');
        // //getNonce
        // var ourAddress = "0x9C37fCa258063a6B8F02f332d72210D3cE4EE4dA";
        // var nonce = 0;
        // var contractAddress = '0xe4c95fd3ca448f7e3549234d08da1182ce831409';
        // // use sign transaction
        // function test(error, result) {
        //     if (!error) {
        //         var gasPrice = result;
        //         //console.log(web3.toDecimal(gasPrice));
        //         var gasLimit = 3000000000;
        //         web3.eth.getTransactionCount(ourAddress, function(error, result) {
        //             if (!error) {
        //                 nonce = result;
        //                 var tx = new Tx({
        //                     from: ourAddress,
        //                     nonce: nonce,
        //                     to: contractAddress,
        //                     value: 0,
        //                     data: data,
        //                     gasPrice: web3.toDecimal(gasPrice),
        //                     gasLimit: gasLimit
        //                 });
        //                 tx.sign(pk);
        //                 var serializedTx = '0x' + tx.serialize().toString('hex');
        //                 web3.eth.sendRawTransaction(serializedTx, function(err, hash) {
        //                     if (!err) {
        //                         ////console.log('transaction hash : ', hash);
        //                         callback(hash);
        //                     } else {
        //                         console.error('error is ', err);
        //                     }
        //                 });
        //             } else
        //                 console.log(error);
        //         });

        //     }
        // }
        app.contract.traceContract.addcrab.sendTransaction(_id, _opratorName, _poolId, { from: app.ourAddress }, function(error, result) {
            if (!error) {
                //console.log(result);
                callback(result);
            } else {
                //console.log(error);
            }
        });
    },
    getInformation: function(id, callback) {
        var crabInfo = {};
        var traceInfo = {};
        var temp = 0;
        var traceMes = [];
        var nowOperate = 1; //表示在获取溯源信息
        var receivedCrabInfo = 0;
        var receivedTraceInfo = 0;
        //处理crab
        function resolveCrabInfo(result, resultType) {
            ////console.log("in fun");
            //console.log("in fun          " + resultType);
            if (resultType == 1) {
                crabInfo.poolId = result;
            } else if (resultType == 2) {
                crabInfo.initInfo = result;
            } else if (resultType == 3) {
                //console.log("饲料信息");
                crabInfo.feedInfo = result;
            } else if (resultType == 4) {
                //console.log("水质信息");
                crabInfo.waterInfo = result;
            } else if (resultType == 5) {
                //console.log("转运信息");
               //console.log(result);
                crabInfo.transferInfo = result;
            } else if (resultType == 6) {
                //console.log("存储信息");
                crabInfo.storeInfo = result;
            }
            //console.log(result);
            receivedCrabInfo++;
            if (receivedCrabInfo == 6) {
                //判断trace的收到没有
                checkFinish = setInterval(checkAllFinish, 10);
                console.log("received all crab info");
            }

            function checkAllFinish() {
                if (receivedTraceInfo == 4) {
                    clearInterval(checkFinish);
                    callback([crabInfo, traceInfo]);
                }

            }
        }

        function resolveTrace(result, resultType) {
            //console.log(result+'       '+resultType);
            if (resultType == 1) {
                traceInfo.feedInfo = result;
            } else if (resultType == 2) {
                traceInfo.waterInfo = result;
            } else if (resultType == 3) {
                traceInfo.transferInfo = result;
            } else if (resultType == 4) {
                traceInfo.storeInfo = result;
            }
            receivedTraceInfo++;
            if (receivedTraceInfo == 4) {
                console.log("received all trace info");
            }
        }

        ///get trace info
        for (let i = 1; i <= 4; i++) {
            app.getTraceInfo(id, i, resolveTrace);
        }

        ///get crab info
        for (let i = 1; i <= 6; i++) {
            app.getCrabInfo(id, i, resolveCrabInfo);
        }
        // // crabInformation.feed[] public feedInformation;
        // crabInformation.waterQuality[] public waterQualityInformation;
        // crabInformation.transfer[] public transferInformation;
        // crabInformation.store[] public storeInformation;
    },
    getCrabInfo: function(id, type, fun) {

        //xian获得crab的地址
        crabContract = null;
        var dat = [];
        var haveGet = 0; //用来存已经获得的数据的条数
        function getData(index, datalength, callback) {
            if (crabContract) {
                if (type == 3) //feed信息
                {
                    crabContract.feedInformation.call(index, callback0);
                } else if (type == 4) {
                    crabContract.waterQualityInformation.call(index, callback0);
                } else if (type == 5) {
                    crabContract.transferInformation.call(index, callback0);
                } else if (type == 6) {
                    crabContract.storeInformation.call(index, callback0);
                }

            }

            function callback0(error, data) {
                if (!error) {
                    callback(data, index, datalength);
                }
            }
        }


        var p1 = new Promise(
            function(resolve, reject) {
                app.contract.traceContract.crabs.call(id, function(error, result) {
                    if (!error) {
                        resolve(result);
                    }
                });
            });
        p1.then(address => {
            var contract = app.getContract(app.contract.crabAbi, address);
            return contract;
        }).then(contract => {
            crabContract = contract;
            if (type == 1) //获取poolId
            {

                crabContract.poolId.call(callback);
            } else if (type == 2) //init信息
            {

                crabContract.initInformation.call(callback);
            } else if (type >= 3 && type <= 6) //feed信息
            {
                //获得feed的长度
                crabContract.getLength.call(type - 2, function(error, data) {
                    if (!error) {
                        length = web3.toDecimal(data);

                        for (let i = 0; i < length; i++) {
                            getData(i, length, resolveData);
                        }
                    }
                });
                //crabContract.getFeedInfo.call(callback);
            }

            function callback(error, result) {
                if (!error) {
                    fun(result, type);
                } else {
                    //console.log("met an error is");
                    //console.log(error);
                }
            }

            function resolveData(data, index, datalength) {
                //index是数据的索引
                haveGet++;
                dat[index]=data;
                //console.log("index是"+index+"数据是"+data);
                if (haveGet == datalength) {
                    ////console.log("调用完成，数据是"+data);
                    fun(dat, type);

                }
            }
        });

    },
    getTraceInfo: function(id, type, fun) {
        var Data = [];
        var haveGet = 0; //用来存已经获得的数据的条数
        function getData(index, length) //index是第几条数据的意思
        {
            if (type == 1) {
                contract.feedInfo.call(id, index, callback);
            } else if (type == 2) {
                contract.waterInfo.call(id, index, callback);
            } else if (type == 3) {
                contract.transferInfo.call(id, index, callback);
            } else if (type == 4) {
                contract.storeInfo.call(id, index, callback);
            }

            function callback(error, result) {
                if (!error) {
                    Data[index]=result;
                    haveGet++;
                    if (haveGet == length) {
                        fun(Data, type);
                    }

                } else {
                    //resolve(error);
                    //console.log("is error");

                }
            }
        }
        var contract = app.contract.traceContract;
        var existOrNot = new Promise(function(resolve, reject) {
            contract.exist.call(id, function(error, result) {
                if (!error) {
                    //console.log("存在");
                    resolve(type);
                } else {
                    reject();
                }
            });
        }).then(
            function getDetailInformation(type) {
                //console.log("in get type is " + type);

                //先获得长度
                var length = 0;
                contract.getLength.call(id, type, function(error, data) {
                    if (!error) {
                        length = data;
                        //console.log(web3.toDecimal(length));
                        if (length == 0) {

                            return;
                        }
                        for (let i = 0; i < length; i++) {
                            getData(i, length);
                        }
                    }
                });
            },
            function reject() {
                return false;
            }
        );


    },


    test: function() {
        var p1 = new Promise(function(resolve, reject) {
            var test = 1;
            resolve(test);
        });
        p1.then(
            function(test) {
                //console.log(test);
                test++;
                return test;
            }).then(
            function(test) {
                //console.log(test);
                return [1, 2, 3];
            }).then(function(result) {
            //console.log(result);
        });
    },
    pushFeed: function(id, feedName, operatorName,callback) {
        app.contract.traceContract.pushFeed(id, feedName, operatorName, { from: app.ourAddress },function(error, result) {
            if (!error) {
                //console.log(result);
                callback(result);
            } else {
                //console.log(error);
            }
        });
    },
    pushWaterQuality: function(id, whetherQualified, checkAgent, animalDensity, opratorName,callback) {
        app.contract.traceContract.pushWaterQuality.sendTransaction(id, whetherQualified, checkAgent, animalDensity, opratorName, { from: app.ourAddress }, function(error, result) {
            if (!error) {
                //console.log(result);
                callback(result);
            } else {
                //console.log(error);
            }
        });
    },
    pushTransfer: function(id, from, to, opratorName,callback) {
        app.contract.traceContract.pushTransfer.sendTransaction(id, from, to, opratorName, { from: app.ourAddress }, function(error, result) {
            if (!error) {
                //console.log(result);
                callback(result);
            } else {
                //console.log(error);
            }
        });
    },
    pushStore: function(id, temperature, wetness, opratorName,callback) {
        app.contract.traceContract.changeStoreInformation.sendTransaction(id, temperature, wetness, opratorName, { from: app.ourAddress }, function(error, result) {
            if (!error) {
                //console.log(result);
                callback(result);
            } else {
                //console.log(error);
            }
        });
    }

};


//控制代码

$(document).ready(
    function() {
        ////console.log("要执行了");
        ////console.log(pushData.test());
        // var ourAddress = "0x9C37fCa258063a6B8F02f332d72210D3cE4EE4dA"; //账户地址
        // var ourPassword = 'domore0325';
        if (app.init()) {
            console.log("连接成功");
        } else {
            alert("连接失败");
        }
        
        //Push.test();
        //app.unlockAccountAndExetract(ourAddress,ourPassword,app.fun);
        //app.getData();
        //app.addCrab(2, 'lili', '890787');
        //app.getInformation(1);
        //app.pushFeed(1,'超级健康的饲料','yapie');
        //app.pushWaterQuality(1,true,"北京水质检测机构",50,'yapie');
        // app.pushTransfer(1,'天水','海南','yapie');
        //app.pushStore(1,35,30,'yapie');
        ////console.log(app.contract.traceContract);
        //app.existSuchCrab(1);
        //监听提交按钮
        ////console.log(app.isValidId(1,app.callback));
        //app.test();
        //app.getCrabInfo(1,1);
        // abi=[{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getArray","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}];
        // address='0xb1784fc623903b238b4a6ad0d993b0515ff7b7d3';
        // contract=app.getContract(abi,address);
        // contract.getArray.call(app.callback);
        
    }
);