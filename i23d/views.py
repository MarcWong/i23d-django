# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,redirect

import forms,models
# Create your views here.


def index(request):
    return render(request, "index.html")

def login(request):
    if request.session.get('is_login',None):
        return redirect("/index/")
    if request.method == "POST":
        login_form = forms.UserForm(request.POST)
        message = "请检查填写的内容！"
        if login_form.is_valid():
            username = login_form.cleaned_data['username']
            password = login_form.cleaned_data['password']
            try:
                user = models.User.objects.get(name=username)
                if user.password == password:
                    request.session['is_login'] = True
                    request.session['user_id'] = user.user_id
                    request.session['user_name'] = user.name
                    return redirect('/index/')
                else:
                    message = "您输入的密码不正确"
            except Exception, e:
                message = "此用户不存在"
        return render(request, 'login/login.html', locals())

    login_form = forms.UserForm()
    return render(request, 'login/login.html', locals())

def register(request):
    pass
    return render(request, 'login/register.html')

def logout(request):
    if not request.session.get('is_login', None):
        # 如果本来就未登录，也就没有登出一说
        return redirect("/index/")
    request.session.flush()
    # 或者使用下面的方法
    # del request.session['is_login']
    # del request.session['user_id']
    # del request.session['user_name']
    return redirect("/index/")
def obj(request):
    return render(request, "obj.html")

def ply(request):
    return render(request, "ply.html")