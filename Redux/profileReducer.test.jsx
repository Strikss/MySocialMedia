import profileReducer, { addPost } from "./profileReducer";
it("profileReducer", () => {
  let action = addPost("hello");
  let state = {
    postData: [
      { id: 1, message: "It's my first post", likesCount: 15 },
      { id: 2, message: "Hey there i like you", likesCount: 20 },
      { id: 3, message: "helpa me bratan", likesCount: 30 },
    ],
  };
  //2.action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.postData.length).toBe(4);
});

it(" message", () => {
  let action = addPost("hello");
  let state = {
    postData: [
      { id: 1, message: "It's my first post", likesCount: 15 },
      { id: 2, message: "Hey there i like you", likesCount: 20 },
      { id: 3, message: "helpa me bratan", likesCount: 30 },
    ],
  };
  //2.action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.postData[3].message).toBe("hello");
});
