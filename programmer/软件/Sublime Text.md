http://www.jeffjade.com/2015/12/15/2015-04-17-toss-sublime-text/?jianshu

##  快捷
缩进: ⌘ + [或]

注释选中行: ⌘ + /

选择相同的匹配 ⌘ + D

所有相同的匹配 CTRL + ⌘ + G

粘贴并保持缩进: ⇧ + ⌘ + V

移除未闭合的容器元素: ⌘ + ’

大写和小写: ⌘ + K then U, ⌘ + K then L

用标签包裹行或选中项: CTRL + ⇧ + W

上移或下移行 CTRL + ⌘ + ↑ 或 ↓

##  插件
- [https://packagecontrol.io/ Package Control]
- php
   - phpfmt
- [http://docs.emmet.io/ Emmet]
  - 标签选择 ⌘+⇧+ K
  - 向上选择 CTRL + D
- 编码格式 EditorConfig
  - 配置

```shell
{
	"update_check": false,
	"font_face": "Monaco",
	"font_size": 12,
	"open_files_in_new_window": false,
}

```


##  安装包管理器
`Ctrl + ``，打开命令行，输入
```python
import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

##  subl 命令 
`ln  -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl`

`subl  -help`
