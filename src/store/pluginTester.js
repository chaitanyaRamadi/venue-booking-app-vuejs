import app from '../main.js'


export function pluginTest(){
    console.log('from plugin tester function');
    // console.log(this.justName+' from plugin tester');
    // console.log(app.justName+' from plugin tester');
    console.log(app.config.globalProperties.justName);
    console.log(app.config.globalProperties.$justHero);
    app.config.globalProperties.$startTracking();
}