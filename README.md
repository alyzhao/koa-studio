
# koa-studio
learn koa

## 2018-1-16

1. linux ubuntu node install

	sudo ln -s /${NODE_PATH}/bin/node /usr/local/bin/node 

	sudo ln -s /${NODE_PATH}/bin/npm /usr/local/bin/npm

	path param config

	- npm can't find global module
		- cd node_path
		- vi /etc/profile
		- add three line codes
```
export NODE_HOME=/opt/node

export PATH=$PATH:$NODE_HOME/bin 

export NODE_PATH=$NODE_HOME/lib/node_modules
```

2. mongodb has'not installed

3. ubuntu翻墙

4. ubuntu 安装 sublime text  [reference link](http://www.linuxidc.com/Linux/2013-04/83127.htm)
	- 官网下载对应版本
	- sudo gedit /etc/environment # 打开环境变量的配置文件
	- 在最后添加 sublime_text 所在的文件夹

5. sublime 不支持中文输入 [sublime-text-imfix](https://github.com/lyfeyaj/sublime-text-imfix)
	- 按照文档操作就ok 

6. sublime 中英文错位 [参考链接](https://segmentfault.com/q/1010000005160272)
	- sudo apt-get install ttf-wqy-microhei  # 安装这个中英文等高字体
	- 在sublime的Preferences->settings配置文件中加入 `"font_face": "WenQuanYi Micro Hei Mono",`

7. ubuntu 安装搜狗拼音
	- sudo dpkg -i sogou_pinyin_linux_1.0.0.0033_amd64.deb
	- sudo apt-get install -f 


## 2018年1月17日

### Schedule Come On baby!!!

1. ubuntu 安装 mongodb 

2. 准备 ES6 的文档

3. 把 data-screen 项目跑起来

### Completed

1. 


## notes

1. 继续熟悉 koa, [参考链接](http://www.ruanyifeng.com/blog/2017/08/koa.html) 看到中间件right



