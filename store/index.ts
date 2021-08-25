import { createStore, combineReducers } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { comments, CommentsState } from './comments';
import { post, PostState } from './post';

export type State = {
	comments: CommentsState;
	post: PostState;
};

const combinedReducer = combineReducers({ post, comments });
const makeStore: MakeStore<State> = () => createStore(combineReducers);

export const store = createWrapper<State>(makeStore, {
	debug: true,
});
