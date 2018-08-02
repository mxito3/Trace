# -*- coding: utf-8 -*-
# @Author: YP
# @Date:   2018-08-02 11:36:18
# @Last Modified by:   YP
# @Last Modified time: 2018-08-02 11:57:00
from flask import Flask,render_template,request
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/search',methods=['Post'])
def search():
	form=request.form
	crabId=form.get('crabId')
	return crabId

if __name__=='__main__':
	app.run(port=8080,debug=True)