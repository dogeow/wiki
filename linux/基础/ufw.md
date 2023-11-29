## 基础

1.  ufw default
    deny，如果没有先输入这个的话，就相当于全部允许了。要重新来，请ufw
    reset
2.  ufw allow ssh
3.  ufw allow http
4.  ufw allow https
5.  ufw logging on
6.  ufw enable

服务端口可以看/etc/services

## 命令[^1][^2]

1.  ufw status
2.  ufw \[\--dry-run\] enable\|disable\|reload
3.  \[\--dry-run\]选项，仅显示运行结果而不实际运行
4.  ufw delete allow 22
5.  ufw allow 22/tcp
6.  ufw allow from 4.4.4.4，允许某个ip
7.  sudo ufw deny from 4.4.4.4 to any
8.  sudo ufw deny from 4.4.4.4 to any port 80

## 参考

<http://wiki.ubuntu.org.cn/Ufw%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97>

<https://help.ubuntu.com/community/UFW>
