import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromFavouriteAction } from '../redux/actions';

const Favourites = () => {
	const favourites = useSelector((state) => state.favourite.list);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	return (
		<Container>
			<Row>
				<Col xs={10} className='d-flex align-items-center mx-auto my-3'>
					<h1 className='display-4 me-auto'>Favourites</h1>
					<Button variant='outline-primary' onClick={() => navigate('/')}>
						go to Home
					</Button>
				</Col>
				<Col xs={10} className='mx-auto my-3'>
					<ListGroup>
						{favourites.length > 0 ? (
							favourites.map((fav, i) => (
								<ListGroup.Item key={i}>
									<Trash
										color='red'
										className='me-2'
										onClick={() => dispatch(removeFromFavouriteAction(fav))}
									/>
									<Link to={'/' + fav}>{fav}</Link>
								</ListGroup.Item>
							))
						) : (
							<ListGroup.Item>
								No favourites yet, go <Link to='/'>back to Homepage</Link> to select
								some
							</ListGroup.Item>
						)}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default Favourites;
