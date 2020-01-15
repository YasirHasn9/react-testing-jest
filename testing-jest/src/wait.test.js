// get the the file that we wish to be tested
// require method is a pure js .
const help = require("./wait");
// when we use require with inside the () the path of wanted file

describe("Mocks function", () => {
  it("test isItEven", () => {
    const spy = jest.fn();
    // spy is another way of mock that allows us spy on the behavior of a function
    // that is called by other code , this so powerful way because imagine if
    // we have a function that give a random outputs every times been called
    help.isItEven(2, spy);
    expect(spy).toBeCalledWith(2);
  });
});
