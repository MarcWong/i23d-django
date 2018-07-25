# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "index.html")


def obj(request):
    return render(request, "obj.html")


def ply(request):
    return render(request, "ply.html")