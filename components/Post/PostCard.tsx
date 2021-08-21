import Link from 'next/link';
import { Post as PostType } from '../../shared/types';
import { Card, Figure, Content, Title } from './PostCardStyle';

type PostProps = {
	post: PostType;
};

export const PostCard = ({ post }: PostProps) => {
	return (
		<Link href={`/post/${post.id}`} passHref>
			<Card>
				<Figure>
					<img src={post.image} alt={post.title} />
				</Figure>
				<Title>{post.title}</Title>
				<Content>{post.lead}</Content>
			</Card>
		</Link>
	);
};
