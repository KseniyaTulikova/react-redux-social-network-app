
import profileReducer, { addPostActionCreator } from './profile-reducer';


let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ],
    profile: null,
    status: 'Hello World!',
};



it('length of posts should be incremented', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<BrowserRouter>
//       <Provider store={store}>
//           <App/>
//       </Provider>
//   </BrowserRouter>, div);
//     ReactDOM.unmountComponentAtNode(div);

// 1. Test Data 
let action = addPostActionCreator('it-kamasutra');

// 2. Action
let newState = profileReducer(state, action);

// 3. Expectation
expect(newState.posts.length).toBe(5);
  });