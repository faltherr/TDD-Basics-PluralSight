const axiosMock = jest.genMockFromModule('axios');

// Specify what the mock response should be and the data we want to test against
// Should have the same shape as the data that's current.ly inside of the component to test

let mockResponse = {
    data: {
        "shops": [
            {
                "location": "test Location",
                "address": "test Address"
            }
    ]}
}

//Creat a mock implementation of the GET method from axios
axiosMock.get.mockImplementation(req);

function req(){
    return new Promise(function(resolve){
        axiosMock.delayTimer = setTimeout(function(){
            resolve(mockResponse)
        }, 100);
    })
}

module.exports = axiosMock;