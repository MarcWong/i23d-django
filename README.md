# i23dWeb

**Our WebGL 3D Model Viewer!**
Visit [PKUGIL i23d homepage](http://162.105.86.237/) for more information.

## 1.Specification

* Frontend libraries are taken from the [three.js](https://github.com/mrdoob/three.js/) and [stats.js](https://github.com/mrdoob/stats.js/) repository.
* Frontend work is based on [Lorti/webgl-3d-model-viewer-using-three.js](https://github.com/Lorti/webgl-3d-model-viewer-using-three.js/).
* Backend work is based on [Django](https://github.com/django/django).
* Our reconstruction algorithm is based on [openMVG](https://github.com/openMVG/openMVG) and [openMVS](https://github.com/cdcseacave/openMVS), see the leaderboard on [tanksandtemples](https://www.tanksandtemples.org/leaderboard/).

## 2.开发环境

python manage.py runserver

## ３.生产环境部署

### 3.1 使用launch.sh脚本同步本地和服务器文件

`./launch.sh [gil-237 | gil-116(undeployed)] [pull]`

this will login gil-server and pull the code from master branch.

### 3.2 nginx部署

[参考教程](http://www.liujiangblog.com/course/django/181)

``` shell
# install nginx:
sudo apt-get install nginx
# make a conf file
sudo vim /etc/nginx/conf.d/i23d.conf
```

将以下内容粘贴（可能要修改各种路径）：

``` ini
server {
    # the port your site will be served on
    listen      80;
    # the domain name it will serve for
    server_name localhost; # substitute your machine's IP addressor FQDN
    charset     utf-8;

    access_log /data/log/access_log;
    error_log  /data/log/error_log;

    # max upload size
    client_max_body_size 75M;   # adjust to taste

    # Django media
    #location /media  {
    #    alias /to/your/mysite/media;  # your Django project's media files - amend as required
    #}

    location /static {

            alias /data/i23dServer/static; # your Django project's static files - amend as required
    }

    # Finally, send all non-media requests to the Django server.
    location / {

            uwsgi_pass 127.0.0.1:3000;
            include    /etc/nginx/uwsgi_params; # the uwsgi_params file you installed

    }
}
```

``` shell
# 一些nginx指令
service nginx start  #启动
service nginx restart  #重启
nginx -s  reload
```

### 3.3 uwsgi部署

Make a file called uwsgi.ini in root directory:

将以下内容粘贴（可能要修改各种路径）：

``` ini
# mysite_uwsgi.ini file
[uwsgi]

socket = 127.0.0.1:3000
# Django-related settings
# the django project directory (full path)
chdir = /data/i23dServer
# Django's wsgi file
module = i23dServer.wsgi

# process-related settings
# master
master = true
# maximum number of worker processes
processes = 5

threads = 10
enable-threads = True
max-requests = 6000

# ... with appropriate permissions - may be needed
chmod-socket = 664
# clear environment on exit
vacuum  = true
daemonize=/data/log/uwsgi.log
```

then run `uwsgi uwsgi.ini`