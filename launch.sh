#!/usr/bin/env bash

echo -e "\033[32m"
echo "##############################################"
echo "#      gil-web Auto-Launch System v1.0       #"
echo "##############################################"
echo "#请注意查看屏幕回显，确保上线完成            #"
echo "#目前支持的服务器：gil-237, gil-116          #"
echo "#pull方式：服务器端拉取master分支代码        #"
echo "##############################################"
echo -e "\033[0m"

if [ $# = 2 ];then
    if [ $1 = "gil-237" ];then
        echo "当前上线服务器：gil-server-237"
        addr="gil@162.105.86.237"
        path="/xdata/i23dServer/"
    elif [ $1 = "gil-116" ];then
	    echo "当前上线服务器：gil-server-116"
        addr="bs-u@162.105.86.116"
        path="/usr/share/nginx/html/"
    else
        echo "Usage: $0 [gil-237 | gil-116] [pull]"
        echo "You provided $1 as parameter 1."
    fi
    if [ $2 = "pull" ];then
        ssh -tt "$addr" "cd $path && git stash && git pull --rebase && git stash pop && git log -n 1 -p"
    else
        echo "Usage: $0 [gil-237 | gil-116] [pull]"
        echo "You provided $2 as parameter 2"
    fi
else
    echo "Usage: $0 [gil-237 | gil-116] [pull]"
    echo "You provided $# parameters, but 2 is required."
fi
