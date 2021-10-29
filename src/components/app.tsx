import { useReducer, useState } from 'react';
import reducer from '../app/models/reducer';
import { BlogContainer } from './blogContainer';
import { FormContainer } from './formContainer';

const App = (): JSX.Element => {
	const [ posts, dispatch ] = useReducer(reducer, []);
	const [ currentPage, setPage ] = useState(1);

	return (
		<div>
			<BlogContainer setPage={setPage} dispatch={dispatch} currentPage={currentPage} posts={posts} />
			<FormContainer setPage={setPage} dispatch={dispatch} />
		</div>
	);
};

export default App;
