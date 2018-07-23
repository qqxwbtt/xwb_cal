#!/usr/bin/env node

try{
    var argv = process.argv;
    argv.shift();
    eval(`console.log(${argv[1]})`);
} catch(err) {
    console.log("输入格式错误");
}
