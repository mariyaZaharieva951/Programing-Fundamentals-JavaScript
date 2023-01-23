function attachEventsListeners() {

    let button = document.getElementById('convert');
    

    button.addEventListener('click', convert);

    let infoMetrics = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function convert(event){
        let input = event.target.parentElement.children[1];
        let inputUnits = event.target.parentElement.children[2];
        let toConvert = document.getElementById('outputUnits').value;

        let inMeters = Number(input.value) * infoMetrics[inputUnits.value];
        let result = inMeters / infoMetrics[toConvert]
        
        let output = document.getElementById('outputDistance');
        output.value = result;
    }
}