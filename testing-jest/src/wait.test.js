import wait from "./wait"


// test is global that comes from jest.
// test("wait for promised to be resolved" , async () => {
//   const res = await wait(3)
//   return expect(res).toBe("hurray")
// })

// test("wait for promised to be resolved", done => {
//   // since it a promise so we can use then 
//   wait(3).then(res => {
//     expect(res).toBe("hurray")
//     done()
//   })
// })

test("wait for promised to be resolved",() => {
  // here jest says okey since we are waiting for something tio be 
  // resolved so lets wait for the promise to finished.
  return wait(3).then(res => expect(res).toBe("hurray"))
})