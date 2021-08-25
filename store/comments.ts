import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { HydrateAction } from './hydrate';
import { Comment } from '../shared/types';

export const UPDATE_COMMENTS_ACTION = 'UPDATE_COMMENTS';

export interface UpdateCommentsAction extends AnyAction {
	type: typeof UPDATE_COMMENTS_ACTION;
	comments: Comment[];
}

export type CommentsState = Comment[];

type CommensAction = HydrateAction | UpdateCommentsAction;

export const comments = (state: CommentsState, action: CommensAction) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload?.comments ?? [];
		case UPDATE_COMMENTS_ACTION:
			return action.comments;
		default:
			return state;
	}
};
