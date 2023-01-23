function aresAndVolumeCalculator(area, vol, input) {

    let object = JSON.parse(input)
    

        function calculator(obj) {
            let calcArea = area.call(obj);
            let calcVolume = vol.call(obj);

            let result = {area: calcArea, volume: calcVolume}

            return result

        }
return object.map(calculator)
}

function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};

aresAndVolumeCalculator(area, vol,`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]` )

