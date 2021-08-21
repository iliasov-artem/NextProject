import React from 'react';
import Head from 'next/head';
import { Feed } from '../components/Feed';
import { Category, Post } from '../shared/types';
import { fetchCategories, fetchPosts } from '../api/summary';

type FrontProps = {
	posts: Post[];
	categories: Category[];
};

export async function getStaticProps() {
	const posts = await fetchPosts();
	const categories = await fetchCategories();
	return { props: { posts, categories } };
}

const Front = ({ posts, categories }: FrontProps) => {
	return (
		<>
			<Head>
				<title>Front Page of the Internet</title>
			</Head>
			<main>
				<Feed posts={posts} categories={categories} />
			</main>
		</>
	);
};

export default Front;
