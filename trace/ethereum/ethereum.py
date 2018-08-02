# -*- coding: utf-8 -*-
# @Author: YP
# @Date:   2018-08-02 12:06:54
# @Last Modified by:   YP
# @Last Modified time: 2018-08-02 18:39:23
from web3 import Web3, HTTPProvider
from web3.middleware import geth_poa_middleware


class ethereum(object):
    def connectNode(self, ip):
        self.web3 = Web3(HTTPProvider(ip))
        self.web3.middleware_stack.inject(geth_poa_middleware, layer=0)
        if self.isConnect:
            return True
        else:
            return False

    def getContract(self,address,abi):
        self.contract = self.web3.eth.contract(abi=abi, address=self.web3.toChecksumAddress(address))
        return self.contract

    def getCrabInformation(self, _id):
        if not self.isConnected:
            return False
        else:
            crabs = self.contract.crabs().call()
            return crabs

    def isConnect(self):
        return self.web3.isConnected()


if __name__ == '__main__':
    ethereum = ethereum()
    _abi='[{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"existSuchCrab","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"from","type":"string"},{"name":"to","type":"string"},{"name":"_opratorName","type":"string"}],"name":"pushTransfer","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_whetherQualified","type":"bool"},{"name":"_checkAgent","type":"string"},{"name":"_animalDensity","type":"uint256"},{"name":"_opratorName","type":"string"}],"name":"pushWaterQuality","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_opratorName","type":"string"},{"name":"_poolId","type":"uint256"}],"name":"addcrab","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"temperature","type":"uint256"},{"name":"wetness","type":"uint256"},{"name":"_opratorName","type":"string"}],"name":"changeStoreInformation","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_feedName","type":"string"},{"name":"_opratorName","type":"string"}],"name":"pushFeed","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"addCrab","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"feedName","type":"string"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushFeedInformation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"whetherQualified","type":"bool"},{"indexed":false,"name":"checkAgent","type":"string"},{"indexed":false,"name":"crabDensity","type":"uint256"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushWaterQualityInformation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"from","type":"string"},{"indexed":false,"name":"to","type":"string"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushTransferInformation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"temperature","type":"uint256"},{"indexed":false,"name":"wetness","type":"uint256"},{"indexed":false,"name":"opratorName","type":"string"}],"name":"pushStoreInformation","type":"event"}]';
    _address = '0x8f23df3f95eacc8a967f1e0020f3a130065c1471'
    if ethereum.connectNode("http://localhost:8545"):
        print("连接成功")
    contract=ethereum.getContract(address=_address,abi=_abi)
    print(contract)

