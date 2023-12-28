##  简单使用
`docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag`

##  容器之间连接
`docker run --name some-app --link some-mysql:mysql -d application-that-uses-mysql`

示例

`docker run --name php --link mysql -d php`

##  连接MySQL CLI
`docker run -it --link some-mysql:mysql --rm mysql sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'`

示例

`docker run -it --link mysql --rm mysql sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'`

###  或者直接进入bash
`docker exec -it some-mysql bash`

##  非root账号
docker run --name mysqlwp -e MYSQL_ROOT_PASSWORD=wordpressdocker \ -e MYSQL_DATABASE=wordpress \ -e MYSQL_USER=wordpress \ -e MYSQL_PASSWORD=wordpresspwd \ -d mysql

##  导出
`docker exec some-mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /some/path/on/your/host/all-databases.sql`

示例

`docker exec mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /var/www/all-databases.sql`

##  使用自定义的配置文件

##  参数
`docker run -it --rm mysql:tag --verbose --help`

##  运行
`docker run --name mysql -v /data/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=数据库密码 -d mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci`
