module.exports = class Template {
    constructor(htmlClass, data, toElement) {
        // data moet een object zijn
        // function templateEngine(htmlClass, data, toElement){
            //adjecenthtml / of .innertext ///// geen innerhtml!!
        // select the place to put the new content
        
        console.log('the templating data = ' + data)
        this.htmlClass = document.querySelector("#handleBarsTest");
        this.template = Handlebars.compile(this.htmlClass);
        this.context = data;
        //console.log(this.htmlClass);
        //define context
        // compile template
        
        //console.log(this.template);
        // console.log(template);
        this.newHandlebar = document.createElement("P");
        //href
        this.newHandlebar.innerText = this.template(this.context);
        //debugger;
        // console.log(this.newHandlebar.innerText);
        document.querySelector(toElement).appendChild(this.newHandlebar);
        logTemplate();
        function logTemplate(){
            let i = 0; i++;
            console.log('templating of ' + toElement + '  Element' + ' succeeded!')
        };
    };
};

