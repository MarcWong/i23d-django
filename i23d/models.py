# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import uuid

class User(models.Model):
    user_id = models.AutoField(primary_key=True, editable=False, unique=True, verbose_name='用户id')
    user_type_enums = (
        (0,'被封禁用户'),
        (1,'正常用户')
    )

    user_type = models.SmallIntegerField(choices=user_type_enums, default=1, verbose_name='用户类型')
    name = models.CharField(max_length=128, unique=True, verbose_name='用户名')
    phone = models.CharField(max_length=32, unique=True, verbose_name='手机号')
    email = models.EmailField(unique=True, verbose_name='邮箱')
    password = models.CharField(max_length=256, verbose_name='密码')
    school = models.CharField(max_length=256, verbose_name='所在学校')
    create_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['create_time']
        verbose_name = '用户'


class Recon(models.Model):
    recon_id = models.AutoField(primary_key=True, editable=False, verbose_name='重建id')
    user_id = models.UUIDField(primary_key=False, default=uuid.uuid4, editable=False, verbose_name='创建用户id')

    recon_progress = models.FloatField(verbose_name='重建进度')
    image_path = models.CharField(max_length=256, verbose_name='图片路径')
    
    feature_isdone = models.BooleanField(verbose_name='特征提取是否完成')
    feature_starttime = models.DateTimeField(verbose_name='特征提取开始时间')
    feature_endtime = models.DateTimeField(verbose_name='特征提取结束时间')
    feature_number = models.BigIntegerField(verbose_name='特征点数目')
    feature_path = models.CharField(max_length=256, verbose_name='特征点存储路径')
    
    matching_isdone = models.BooleanField(verbose_name='匹配是否完成')
    matching_starttime = models.DateTimeField(verbose_name='匹配开始时间')
    matching_endtime = models.DateTimeField(verbose_name='匹配结束时间')
    matching_number = models.BigIntegerField(verbose_name='匹配数目')
    matching_path = models.CharField(max_length=256, verbose_name='匹配存储路径')
    
    sfm_isdone = models.BooleanField(verbose_name='稀疏重建是否完成')
    sfm_starttime = models.DateTimeField(verbose_name='稀疏重建开始时间')
    sfm_endtime = models.DateTimeField(verbose_name='稀疏重建结束时间')
    sfm_number = models.BigIntegerField(verbose_name='稀疏点数目')
    sfm_path = models.CharField(max_length=256, verbose_name='稀疏重建存储路径')
    
    mvs_isdone = models.BooleanField(verbose_name='稠密重建是否完成')
    mvs_starttime = models.DateTimeField(verbose_name='稠密重建开始时间')
    mvs_endtime = models.DateTimeField(verbose_name='稠密重建结束时间')
    mvs_number = models.BigIntegerField(verbose_name='稠密点数目')
    mvs_path = models.CharField(max_length=256, verbose_name='稠密重建存储路径')
    
    texture_isdone = models.BooleanField(verbose_name='纹理重建是否完成')
    texture_starttime = models.DateTimeField(verbose_name='纹理重建开始时间')
    texture_endtime = models.DateTimeField(verbose_name='纹理重建结束时间')
    texture_number = models.BigIntegerField(verbose_name='纹理重建面片数目')
    texture_path = models.CharField(max_length=256, verbose_name='纹理重建存储路径')
    
    create_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    
    def __str__(self):
        return self.recon_id

    class Meta:
        ordering = ['create_time']
        verbose_name = '重建任务'
    