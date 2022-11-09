function extractFile (input) {


    let fileName = '';
    let fileExtension = '';
    let textArr = input.split('\\');

    for(let word of textArr) {
        if(word.includes('.')){
            let result = word.split('.');

            fileName = result[0];
            fileExtension = result[1];
        }
    }


console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`)
}

extractFile ('C:\\Projects\\Data-Structures\\LinkedList.cs')