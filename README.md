# i23dWeb

**Our WebGL 3D Model Viewer!**
Visit [PKUGIL i23d homepage](http://162.105.86.237/obj) for more information.

## 1.Specification

* Frontend libraries are taken from the [three.js](https://github.com/mrdoob/three.js/) and [stats.js](https://github.com/mrdoob/stats.js/) repository.
* Frontend work is based on [Lorti/webgl-3d-model-viewer-using-three.js](https://github.com/Lorti/webgl-3d-model-viewer-using-three.js/).
* Backend work is based on [Django](https://github.com/django/django).
* Our reconstruction algorithm is based on [openMVG](https://github.com/openMVG/openMVG) and [openMVS](https://github.com/cdcseacave/openMVS), see the leaderboard on [tanksandtemples](https://www.tanksandtemples.org/leaderboard/).

## 2.Launching

**usage of launch.sh:**

`./launch.sh [gil-237 | gil-116(undeployed)] [pull]`

this will login gil-server and pull the code from master branch.