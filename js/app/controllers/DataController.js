class DataController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this.inputData = $('[data-date]');
        this.inputEnviar = $('[data-enviar]');
        this.title = $('[data-title]');
        this.splaner = $('[data-splaner]');
        this.image = $('[data-image]');
    };


    enviarData(event) {
        event.preventDefault()
        this.previousNextDate(this.inputData.value)
    };



    receberOBJ(objTile, objExplainer, objURL) {
        let view = new DataView(this.title, this.splaner, this.image);
        view.updateView(objTile, objExplainer, objURL);
    };



    nextDate() {
        let dataAtual = this.dataSplit();
        let sum = parseInt(dataAtual[2]) + 1;
        dataAtual[2] = sum
        this.previousNextDate(dataAtual.join('-'));
    };


    previousDate() {
        let dataAtual = this.dataSplit();
        let sub = parseInt(dataAtual[2]) - 1;
        dataAtual[2] = sub;
        this.previousNextDate(dataAtual.join('-'));
    };


    previousNextDate(atualDate){
        let nextData = new DataModel(atualDate);
        nextData.novoXHR();
        this.inputData.value = atualDate;
    };
    

    dataSplit(){
        let dataAtual = this.inputData.value.split('-');
        return dataAtual;
    };

};
