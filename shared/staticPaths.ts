import { Category, EntityId } from './types';

type PostStaticParams = {
	id: EntityId;
};

type PostStaticPath = {
	params: PostStaticParams;
};

const staticPostsIdList = [1, 2, 3, 4, 5];

export const postPaths: PostStaticPath[] = staticPostsIdList.map((id) => ({
	params: { id: String(id) },
}));

type CategoryStaticPath = {
	params: PostStaticParams;
};

const categoriesToPreRender: Category[] = ['Science', 'Technology', 'Arts'];

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
	(id) => ({ params: { id } })
);
