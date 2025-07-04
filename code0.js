gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewVideoObjects1= [];
gdjs.Untitled_32sceneCode.GDNewVideoObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32sceneCode.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32sceneCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewVideoObjects1[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32sceneCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewVideoObjects1[k] = gdjs.Untitled_32sceneCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32sceneCode.GDGreenButtonObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDNewVideoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewVideoObjects1[i].pause();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32sceneCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewVideoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewVideoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewVideoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
