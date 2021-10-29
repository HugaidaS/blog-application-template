import React, { useState } from 'react';
import { IReducerAction } from '../app/models/interfaces';
import { blogPost } from '../app/models/types';
import FormComponent from './formContent';

interface FormContainerProps {
	setPage: (param: number) => void;
	dispatch: (param: IReducerAction) => void;
}

export const FormContainer = ({ setPage, dispatch }: FormContainerProps): JSX.Element => {
	const [ visibility, setVisibility ] = useState(false);

	const handleAddNew = (newPost: blogPost) => {
		if (!newPost) {
			alert("The message can't be empy!");
		} else {
			setPage(1);
			dispatch({ type: 'add', post: newPost });
		}
	};

	const switchVisivility = () => {
		setVisibility(!visibility);
	};

	return (
		<div className="add-block">
			<div className="input-block">
				{visibility ? (
					<FormComponent dispatchNewPost={handleAddNew} closeAction={switchVisivility} />
				) : (
					<button className="action-btn" onClick={switchVisivility}>
						Create new post
					</button>
				)}
			</div>
			<div />
		</div>
	);
};
