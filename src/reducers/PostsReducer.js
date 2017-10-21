import { NEW_POST_CREATED } from '../actions/types'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST_CREATED:
      let newPost = {
        image: action.payload.image,
        description: action.payload.description
      }
      let posts = state.posts;
      posts.push(newPost)
      return {
        ...state,
        posts
      }
      break;
    default:
      return state;
  }
};
