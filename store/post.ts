import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { HydrateAction } from './hydrate';
import { Optional, Post } from '../shared/types';

export const UPDATE_POST_ACTION = 'UPDATE_POST';
export type PostState = Optional<Post>;

export interface UpdatePostAction extends AnyAction {
	type: typeof UPDATE_POST_ACTION;
	post: Post;
}

export type CommentsState = Comment[];

type PostAction = HydrateAction | UpdatePostAction;

export const post = (state: PostState = null, action: PostAction) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload?.post ?? null;
		case UPDATE_POST_ACTION:
			return action.post;
		default:
			return state;
	}
};
