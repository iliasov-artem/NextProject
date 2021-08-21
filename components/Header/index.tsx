import Link from 'next/link';
import { Center } from '../Center';
import { Logo, Container } from './style';

export const Header = () => {
	return (
		<Container>
			<Center>
				<Logo>
					<Link href="/">
						<div>What`s next</div>
					</Link>
				</Logo>
			</Center>
		</Container>
	);
};
