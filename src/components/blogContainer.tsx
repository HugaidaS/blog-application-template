import React from 'react';
import { IReducerAction } from '../app/models/interfaces';
import { blogPost } from '../app/models/types';
import { BlogContent } from './blogContent';

interface BlogContainerProps {
	setPage: (param: number) => void;
	dispatch: (param: IReducerAction) => void;
	posts: blogPost[];
	currentPage: number;
}

export const BlogContainer = ({ setPage, dispatch, posts, currentPage }: BlogContainerProps): JSX.Element => {
	return (
		<div>
			<BlogContent setPage={setPage} dispatch={dispatch} posts={posts} currentPage={currentPage} />
		</div>
	);
};
