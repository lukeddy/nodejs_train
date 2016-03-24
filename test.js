/*
模块安装
首先使用npm以全局方式安装mocha模块：
npm install -g mocha
然后进入到项目文件夹中，安装should模块：
npm install should
*/


require("should");
var logger=require('./logger');

var name = "wangwu";

describe("Name", function() {
    it("The name should be wangwu", function() {
        logger.info("This is logger message");
        name.should.eql("wangwu");
    });
});

var Person = function(name) {
    this.name = name;
};
var wangwu = new Person(name);

describe("InstanceOf", function() {
    it("wangwu should be an instance of Person", function() {
        wangwu.should.be.an.instanceof(Person);
    });

    it("wangwu should be an instance of Object", function() {
        wangwu.should.be.an.instanceof(Object);
    });
});
describe("Property", function() {
    it("wangwu should have property name", function() {
        wangwu.should.have.property("name");
    });
});


//run unit test
//>mocha test.js