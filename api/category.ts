import fetch from 'node-fetch';
import { EntityId, Post } from '../shared/types';
import { config } from './config';

export const fetchPosts = async (categoryId: EntityId): Promise<Post[]> => {
	const res = await fetch(`${config.baseUrl}/categories/${categoryId}`);
	return await res.json();
};
