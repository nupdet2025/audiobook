gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.localVariables = [];
gdjs.Untitled_32scene2Code.GDNewVideoObjects1= [];
gdjs.Untitled_32scene2Code.GDNewVideoObjects2= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDGreenButtonObjects1= [];
gdjs.Untitled_32scene2Code.GDGreenButtonObjects2= [];


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32scene2Code.GDGreenButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDGreenButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Untitled_32scene2Code.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene2Code.GDNewVideoObjects1[k] = gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32scene2Code.GDGreenButtonObjects1);
/* Reuse gdjs.Untitled_32scene2Code.GDNewVideoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDGreenButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GDNewVideoObjects1[i].pause();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32scene2Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene2Code.GDGreenButtonObjects1[k] = gdjs.Untitled_32scene2Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewVideoObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDGreenButtonObjects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene2Code.GDNewVideoObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewVideoObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDGreenButtonObjects2.length = 0;


return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
