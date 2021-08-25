import { Comment as CommentType, EntityId } from '../../shared/types';
import { Comment } from '../Comment';
import { CommentForm } from '../CommentForm';
import { Container, List, Item } from './style';

type CommentsProps = {
	comments: CommentType[];
	post: EntityId;
};

export const Comments = ({ post, comments }: CommentsProps) => {
	return (
		<Container>
			<List>
				{comments.map((comment) => (
					<Item key={comment.id}>
						<Comment comment={comment} />
					</Item>
				))}
			</List>
			<CommentForm post={post} />
		</Container>
	);
};
