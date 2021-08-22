import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { fetchPosts } from '../../api/category';
import { categoryPaths as paths } from '../../shared/staticPaths';
import { Post } from '../../shared/types';
import { Loader } from '../../components/Loader';
import { Section } from '../../components/Section';

type CategoryProps = {
	posts: Post[];
};

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
	params,
}) => {
	if (typeof params.id !== 'string') throw new Error('unexpected id');
	const posts = await fetchPosts(params.id);
	return { props: { posts } };
};

export async function getStaticPaths() {
	console.log(`paths`, paths);
	return { paths, fallback: true };
}

const Category = ({ posts }: CategoryProps) => {
	const router = useRouter();
	console.log(`posts`, posts);
	if (router.isFallback) return <Loader />;
	return <Section posts={posts} title={String(router.query.id)} />;
};

export default Category;
