class DataView{

    constructor(title, splaner, image){
        this.title = title;
        this.splaner = splaner;
        this.image = image;
    };

    updateView(objTile, objExplainer, objURL){
        
        this.title.textContent = objTile
        this.splaner.textContent = objExplainer
        this.image.innerHTML = `<img src="${objURL}">`

    };
};