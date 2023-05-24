//load and parse data file
//provide ability to:
//-read all entries
//-read single antry by ID
//-add new entry
//*get matching entries by search criteria


const productService = require('../services/product');
const accessoryService = require('../services/accessory');



/* модел:
"asdf1234": {
        "Name": "string",
        "Description": "string",
        "Image URL": "string",
        "DIfficulty": "Level"
    }
    */

async function init() { 
    
    return (req,res,next) => {
        const storage = Object.assign({},productService,accessoryService);
        req.storage = storage;
        next(); 
    }   
}

    
    module.exports = init;
    