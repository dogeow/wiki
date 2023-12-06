## 安装

```
# macOS
brew install git-filter-repo
# 通用
pip3 install git-filter-repo
```

## 替换某个邮箱

```
git-filter-repo --email-callback 'return email.replace(b"alibaba-inc.com", b"example.com")' --force  --refs master
```

## 替换某个邮箱及其用户名

```
git filter-branch --env-filter '
  OLD_EMAIL="old@email.com"
  NEW_EMAIL="new@email.com"
  NEW_NAME="John Doe"

  if test "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL"
  then
    GIT_AUTHOR_EMAIL=$NEW_EMAIL
    GIT_AUTHOR_NAME=$NEW_NAME
  fi

  if test "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL"
  then
    GIT_COMMITTER_EMAIL=$NEW_EMAIL
    GIT_COMMITTER_NAME=$NEW_NAME
  fi
' -- --all
```

> https://www.codeconcisely.com/posts/change-author-data-for-all-existing-commits/

## 替换全部

适合不重要的仓库，比如自己的仓库

```
git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Newname'
    GIT_AUTHOR_EMAIL='new@email'
    GIT_COMMITTER_NAME='Newname'
    GIT_COMMITTER_EMAIL='new@email'
  " HEAD
```

> http://stackoverflow.com/a/750191

## 其他信息

https://github.com/newren/git-filter-repo.git
