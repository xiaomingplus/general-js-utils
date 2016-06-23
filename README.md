# js通用方法

平时写js的时候老用到的一些常用的函数，封装起来。

## 如何使用：

### 安装:

    npm i general-js-utils

### 可以这样使用:

    var utils = require('general-js-utils');
    var rand = utils.random(1,10);

### 也可以这样使用：

    var {random} = require('general-js-utils');
    var rand = random(1,10)

### es6中也可以这样使用：

    import {random} from 'general-js-utils';
    const random = random(1,10);

## 所有方法列表:

### time()

输出当前的unix时间戳，以s为单位

### random(min=0,max=10)

生成随机数

### randomNumber(len=4)

生成len位数的随机数字，默认是4位数字

### isObject(obj)

判断是否是对象类型

### isObjectEmpty(obj)

判断对象是否为空，如果传入不是对象返回```false```

### uniqueArray(arr)

将数组unique化，比如输入```[1,1,1,2,2,2,3,3,3]```，返回的是```[1,2,3]```


//todo 待补充
