import { Pagination } from '../app/common/pagination';
import { pageSize } from '../app/utils/config';
import { IReducerAction } from '../app/models/interfaces';
import { blogPost } from '../app/models/types';
import { paginate } from '../app/utils/paginate';

interface BlogContentProps {
	setPage: (param: number) => void;
	dispatch: (param: IReducerAction) => void;
	posts: blogPost[];
	currentPage: number;
}

export const BlogContent = ({ setPage, dispatch, posts, currentPage }: BlogContentProps) => {
	const paginatedPosts = paginate(posts, currentPage, pageSize);

	const handlePages = (page: number) => {
		setPage(page);
	};

	const map = (post: blogPost) => {
		const deletePost = () => {
			dispatch({ type: 'delete', post });
			setPage(1);
		};

		return (
			<div className="post">
				<div className="post-content">
					<h2>{post.title}</h2>
					<p>{post.message}</p>
				</div>
				{/* <small>{post.date}</small> */}
				<div className="action-btn--delete" onClick={deletePost} />
			</div>
		);
	};

	return (
		<div className="blog-component">
			{posts.length > 0 ? (
				<div className="posts-wrapper">
					<Pagination
						page={currentPage}
						totalPages={posts.length}
						handlePagination={handlePages}
						pageSize={pageSize}
					/>
					{paginatedPosts.map(map)}
				</div>
			) : (
				<div className="posts-placeholder">
					<h3>Write your first post!</h3>
				</div>
			)}
		</div>
	);
};
