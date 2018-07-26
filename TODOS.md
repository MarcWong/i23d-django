# i23dWeb任务一览

## **1. 前端**

- [x] 实验室导航栏、素材引入 (0716)
- [x] stat.js库引入 (0717)
- [x] 升级至最新版本*three.js*(r0.76->r0.94)　(0724)
- [x] 引导界面(仿*altizure*操作提示) (0724)

## 1.1 浏览操作(OrbitController)

- [x] **平移**：(鼠标右键、Ctrl+鼠标左键) (0716)
- [x] **旋转**：(鼠标左键、菜单按钮) (0716)
- [x] **放缩**：(鼠标滚轮、鼠标双击、菜单按钮) (0716)
- [x] **正视图**：(菜单按钮) (0716)
- [x] 自动旋转  (0717)
- [x] 捕捉到鼠标动作时**停止自动旋转**(0720)
- [x] **俯仰**：(菜单按钮) (0724)
- [ ] **FOV变化**：Shift+滚轮

## 1.2 模型显示方式

- [x] 加载进度条　(0724)
- [ ] 模型**中心点矫正**

### * 模型 *.obj + *.mtl (OBJLoader,MTLLoader)

- [x] **texture**的显示 (0713)
- [x] **surface**的显示 (0718)
- [x] **wireframe**的显示 (0718)
- [ ] texture\surface\wireframe切换时的**性能优化**
- [ ] **步进式渲染**(LOD)

### * 点云*.ply

- [x] **点云**的显示　(0724)
- [ ] **相机矩阵**可视化
- [ ] **点的尺度变化**：Alt+鼠标滚轮

## 1.3 度量工具(借助ray caster)

- [x] 屏幕、相机、全局坐标系的坐标转换　(0724)
- [ ] 鼠标选点，返回此模型点的三维坐标，及可视化
- [ ] 两点间距离度量

## 1.4 进阶功能

- [ ] 登录注册页面
    - [ ] 注册
    - [ ] 登录
    - [ ] 密码重置
- [ ] 首页引导页面
    - [ ] 查看用户重建任务历史
    - [ ] 正在进行的任务：运算进度条可视化
    - [ ] 选取正在进行的任务，查看项目信息及中间结果
    - [ ] 选取已结束任务，加载相应模型
- [ ] 重建任务创建页面
    - [ ] 图片批量上传
    - [ ] 指定服务器目录
    - [ ] 可选重建方式：全自动/手动
    - [ ] 如手动，则由前端指令控制开始执行：特征点提取、特征点匹配、稀疏重建、稠密重建、纹理重建

---

## **2. 后端**

## ２.1 框架

- [x] django框架配置　(0725 migration from i23dWeb)
- [x] 前端内容迁移　(0725 migration from i23dWeb)
- [x] gil-237服务器部署 (0725　migration from i23dWeb)
- [ ] 二三维系统接口调试
- [ ] 注册登录
- [ ] 重建任务

## 2.2 数据库

- [x] 表的创建(用户、重建任务) (0726 init model)

- 用户　USER

|属性|说明|数据类型|
|---|---|---|
|user_id|主键|uuid|
|user_type|用户类型(0被封禁用户,1正常用户)|int|
|name|姓名|string|
|phone|手机号|string|
|email|邮箱|email|
|passwd|密码|string|
|school|学校|string|

- 重建任务 RECON

|属性|说明|数据类型|
|---|---|---|
|recon_id|主键|uuid|
|user_id|创建者id|uuid|
|recon_progress|重建进度(0->1)|float|
|image_path|图片路径|string|
|feature_isdone|特征提取是否完成|boolean|
|feature_starttime|特征提取开始时间|timestamp|
|feature_endtime|特征提取结束时间|timestamp|
|feature_number|特征点数目|int|
|feature_path|特征点存储路径|string|
|matching_isdone|匹配是否完成|boolean|
|matching_starttime|匹配开始时间|timestamp|
|matching_endtime|匹配结束时间|timestamp|
|matching_number|匹配数目|int|
|matching_path|匹配存储路径|string|
|sfm_isdone|稀疏重建是否完成|boolean|
|sfm_starttime|稀疏重建开始时间|timestamp|
|sfm_endtime|稀疏重建结束时间|timestamp|
|sfm_number|稀疏点数目|int|
|sfm_path|稀疏重建存储路径|string|
|mvs_isdone|稠密重建是否完成|boolean|
|mvs_starttime|稠密重建开始时间|timestamp|
|mvs_endtime|稠密重建结束时间|timestamp|
|mvs_number|稠密点数目|int|
|mvs_path|稠密重建存储路径|string|
|texture_isdone|纹理重建是否完成|boolean|
|texture_starttime|纹理重建开始时间|timestamp|
|texture_endtime|纹理重建结束时间|timestamp|
|texture_number|纹理重建面片数目|int|
|texture_path|纹理重建存储路径|string|

## 2.３ 前后端通讯接口

- [ ] 路由重构，将静态页面改为动态

### 用户相关

- [ ] 创建
- [ ] 登录
- [ ] 登出
- [ ] 密码重置
- [ ] 个人上传记录查看
- [ ] 个人信息更新

### 重建相关

- [ ] 上传图片并创建重建任务，记录到用户的上传记录中
- [ ] 开始重建任务(进行哪个步骤)
- [ ] 终止重建任务
- [ ] 根据recon_id返回点云/模型
- [ ] 根据recon_id返回重建任务信息

## 2.４ 后端与i23d系统通讯接口

- [ ] 开始运行脚本
- [ ] 获取脚本运行信息
- [ ] 终止脚本