const { expect } = require("chai");
const { rgbToHexColor } = require('./rgbToHexColor');

describe('RGB to next Color', () => {
    it(`t1: converts black`, () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it(`t2: converts white`, () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it(`t3: converts to some blue #234465`, () => {
        expect(rgbToHexColor(35,68,101)).to.equal('#234465');
    });

    it(`t4: return indefined for missing params`, () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

    it(`t5: return indefined for missing params`, () => {
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });

    it(`t6: return indefined for missing params`, () => {
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });

    it(`t7: return indefined for floats`, () => {
        expect(rgbToHexColor(1.1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,1.1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,1.1)).to.be.undefined;
    });

    it(`t8: return indefined for floats`, () => {
        expect(rgbToHexColor('1',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'1',0)).to.be.undefined;
        expect(rgbToHexColor(0,0,'1')).to.be.undefined;
    });

    it(`t9: converts 15,15,15 to #0F0F0F`, () => {
        expect(rgbToHexColor(15,15,15)).to.equal('#0F0F0F');
    });
})