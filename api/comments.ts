import { EntityId, Comment, Person } from '../shared/types';
import { config } from './config';

export const fetchComments = async (postId: EntityId): Promise<Comment[]> => {
	const res = await fetch(`${config.baseUrl}/comments/${postId}`);
	return await res.json();
};

export const submitComment = (
	postId: EntityId,
	name: Person,
	comment: string
): Promise<Response> => {
	return fetch(`${config.baseUrl}/posts/${postId}/comments`, {
		method: 'POST',
		body: JSON.stringify({ name, comment }),
	});
};
