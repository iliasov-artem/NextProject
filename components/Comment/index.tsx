import { Comment as CommentType } from '../../shared/types';
import { Container, Author, Body, Meta } from './style';

type CommentProps = {
	comment: CommentType;
};

export const Comment = ({
	comment: { author, content, time },
}: CommentProps) => {
	return (
		<Container>
			<Author>{author}</Author>
			<Body>{content}</Body>
			<Meta>{time}</Meta>
		</Container>
	);
};
