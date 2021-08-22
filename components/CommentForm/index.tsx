import { useState, FormEvent } from 'react';
import { EntityId } from '../../shared/types';
import { Form } from './style';
import { submitComment } from '../../api/comments';

type CommentFormProps = {
	post: EntityId;
};

export const CommentForm = ({ post }: CommentFormProps) => {
	const [loading, setLoading] = useState(false);
	const [value, setValue] = useState('');
	const [name, setName] = useState('');

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const { status } = await submitComment(post, name, value);
		setLoading(false);

		if (status === 201) {
			location.hash = 'comments';
			location.reload();
		}
	};

	return (
		<Form onSubmit={onSubmit}>
			<h3>Your comment</h3>
			<input
				type="text"
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Your name"
				required
			/>
			<textarea
				name="comment"
				value={value}
				placeholder="What do your think?"
				onChange={(e) => setValue(e.target.value)}
				required
			/>
			{loading ? (
				<span>Submitting</span>
			) : (
				<button type="submit">Submit</button>
			)}
		</Form>
	);
};
