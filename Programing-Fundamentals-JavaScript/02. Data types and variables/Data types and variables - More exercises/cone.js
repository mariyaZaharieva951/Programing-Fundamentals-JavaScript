function cone (radius, height) {

    let j = radius * radius + height * height;
    let l = Math.sqrt(j);
    let S = Math.PI * radius * l;
    let B = Math.PI * radius * radius;

    let volume = 1/3 * Math.PI * radius * radius * height;
    let surface = S + B;


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surface.toFixed(4)}`);

}

cone (3, 5)