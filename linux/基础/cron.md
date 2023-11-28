所有用户的 cron 列表存放在 /var/spool/cron/crontabs

开机启动
sudo crontab -e

@reboot 命令

sudo systemctl enable cron

## 一分钟执行多次

```shell
* * * * * for i in `seq 120`; do awesome_scripts& sleep 0.5; done
```

按用户执行

crontab -e -u www-data

不重复运行

Flock

运行文件夹

每小时执行/etc/cron.hourly目录内的脚本

42 4 1 * * root run-parts /etc/cron.monthly

## 参考

- https://www.linuxbabe.com/linux-server/how-to-enable-etcrc-local-with-systemd
- https://segmentfault.com/a/1190000021815907
- https://einverne.github.io/post/2017/03/crontab-schedule-task.html
