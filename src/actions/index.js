import { NEW_POST_CREATED } from './types'

export const newPostCreated = (image, description) => {
  return {
    type: NEW_POST_CREATED,
    payload: {
      image,
      description
    }
  };
};
