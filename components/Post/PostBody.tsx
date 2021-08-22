import { Post } from '../../shared/types';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Content, Figure, Meta, Title } from './PostBodyStyle';

type PostBodyProps = {
	post: Post;
};

export const PostBody = ({ post }: PostBodyProps) => {
	return (
		<div>
			<Breadcrumbs post={post} />
			<Title>{post.title}</Title>
			<Figure>
				<img src={post.image} alt={post.title} />
			</Figure>
			<Content dangerouslySetInnerHTML={{ __html: post.content }} />
			<Meta>
				<span>{post.date}</span>
				<span>&middot;</span>
				<a href={post.source}>Source</a>
			</Meta>
		</div>
	);
};
