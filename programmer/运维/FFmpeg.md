## FFmpeg Webm 转不了 AAC

```shell
sudo apt install -y autoconf automake build-essential cmake git libtool pkg-config texinfo libass-dev \
libfdk-aac-dev libmp3lame-dev libopus-dev libtheora-dev libvorbis-dev libx264-dev libx265-dev \
libvpx-dev libnuma-dev

# 从 FFmpeg 下载源代码

./configure --enable-gpl --enable-nonfree --enable-libfdk-aac --enable-libmp3lame --enable-libopus --enable-libtheora --enable-libvorbis --enable-libx264 --enable-libx265 --enable-libvpx
# 可选 --prefix=/usr/bin/ffmpeg 
# 如果提示不支持什么，就去掉什么 --disable-x86asm

make -j4
make install

# 验证
ffmpeg -codecs|grep aac
```

安装完后，上传 webm 转 aac 或者 mp3 还是报错。

> Only VP8 or VP9 or AV1 video and Vorbis or Opus audio and WebVTT subtitles are supported for WebM.

