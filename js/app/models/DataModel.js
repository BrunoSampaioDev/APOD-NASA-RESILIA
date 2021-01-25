class DataModel {

    constructor(data) {
        this.dataModel = data;
        this.control = new DataController();
        this.xhr = new XMLHttpRequest();
    }

    novoXHR() {

        this.xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=mBumZNaa8dD44NvyNYydeU1DQ6FlWT6Ke1raCr2n&date=${this.dataModel}`);

        this.xhr.addEventListener('load', () => {

            let apodSring = this.xhr.responseText;

            let apodObj = JSON.parse(apodSring);

            this.control.receberOBJ(apodObj.title, apodObj.explanation, apodObj.url)
            
        });
        
        this.xhr.send();
    };
    
};