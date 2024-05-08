- http://www.cyberciti.biz/faq/noninteractive-shell-script-ssh-password-provider/
- http://wxl24life.iteye.com/blog/2128401

##  安装

```shell
wget https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb
brew install sshpass.rb
```

##  使用

* sshpass -p '你的密码' ssh 用户名@服务器ip地址
* /usr/local/bin/sshpass -f /Users/dogeow/.ssh/dogeow ssh -p22 root@php.sx
* 选项
  ** -o StrictHostKeychecking=no
* sshpass -p password scp -o StrictHostKeychecking=no -r username@host:~/test ~

## 参考

https://gist.github.com/arunoda/7790979
