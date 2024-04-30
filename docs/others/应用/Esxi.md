## 三种升级方法
* ISO刻盘安装（全新安装或者覆盖）
* SSH登录，ESXCLI命令行
* Update Manager
  这边用第二种方法
1. 下载ISO，http://pan.baidu.com/share/link?shareid=1306901344&uk=1361748632#dir
2. 下载VMware-ESXi-5.5.0-1331820-depot.zip，上传到硬盘中，比如datastore（笔者有两块硬盘datastore1，datastore2）
3. 进入维护模式 
   1. 登陆SSH，输入命令
   2. sxcli software profile update -d /vmfs/volumes/datastore/VMware-ESXi-5.5.0-1331820-depot.zip -p ESXi-5.5.0-1331820-standard 
   3. 退出维护模式，重新引导

备注：
* 5.5版本的新功能需要安装vSphere Web Client 进行管理
* VMware vSphere Hypervisor 5 License序列号：5H092-8208Q-K8Y49-02CRP-15EJ1

## 花生壳DDNS
添加902端口映射

## Debug-升级ESXi
U盘安装ESXi5.5 update1遇到了Lonading /lsi_mr3.v00

开始准备安装ESXi5.5 update1到服务器，但是手头仅一个U盘，于是只好用U盘启动安装。

步骤：
1. 准备U盘，下载Esxi5.5的iso镜像文件；
2. 下载 UltraISO 并安装；
3. 使用UltraISO打开镜像文件，选择"启动"=》"写入到硬盘镜像"
4. 选择写入格式为USB-HDD+后，点击写入按钮开始制作U盘启动盘。
5. u盘制作完成后，插入服务器开始启动。
6. Loading时问题出现。

问题描述：
* 在读取基本文件的时候一直停留在这里：Lonading /lsi_mr3.v00
* 不会报错，也没有任何提示，一直卡在这儿不动。

解决方案：
* ESXi在采用U盘安装的时候，不能采用HD USB模式，而需要改用EFI模式的U盘启动安装
* 于是下载了Efi模式启动盘制作工具rufus。

1. 打开refus工具，如下面截图所示；
2. 选择文件系统为FAT32（图片标红）；
3. 点击"格式化选项"里面的光驱的小图标（图片标红），选择镜像文件。
4. 点击"开始"按钮制作启动盘，重新启动服务器后成功Lonading /lsi_mr3.v00，问题解决。
