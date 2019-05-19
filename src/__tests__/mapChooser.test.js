import mapChooser from '../mapChooser'

describe("mapChooser", function(){
    //This is the spec
    it("returns image when location name is passed into it", function(){
        // Define assertions
        // Define expected output
        let expected = "portland.jpg"
        // Call the function you want to test
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    })
    it("returns a default map when no location is passed in", function(){
        // Define assertions
        let expected = "default.jpg"
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    })
})