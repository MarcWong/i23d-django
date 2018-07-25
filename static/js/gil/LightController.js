/*light Controller*/
function toggleLight(){
    if (isLighted) {
        scene.add(xLight);
        scene.add(yLight);
        scene.add(zLight);

    } else {
        scene.remove(xLight);
        scene.remove(yLight);
        scene.remove(zLight);

    }
    isLighted = !isLighted;
}
/*light Controller END*/