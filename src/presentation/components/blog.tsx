import React, { useReducer, useState } from "react";
import { Pagination } from "../../app/common/pagination";
import reducer from "../../app/models/reducer";
import { paginate } from "../../app/utils/paginate";
import FormComponent from "./form";



interface IBlogComponentProps {
}

const BlogComponent: React.FunctionComponent<IBlogComponentProps> = (props) => {
    const [posts, dispatch] = useReducer(reducer, []);
    const [currentPage,setPage]= useState(1);
    const [visibility,setVisibility] = useState(false);
    const pageSize = 2;
    const paginatedPosts = paginate(posts, currentPage, pageSize);


    const handlePages = (page:number) =>{
      setPage(page)
    }

    interface IPostInterface{
      title:string,
      message:string;
      id:number,
      date:Date
    }

    const handleAddNew = (newPost:any) =>{
      if(!newPost){
          alert("Сообщение не может быть пустым!")
      }else{
        setPage(1);
        dispatch({ type: "add", post: newPost })
      }
    }

    const switchVisivility = () => {setVisibility(!visibility)};

    const map = (post:IPostInterface) => {
      const deletePost = () => {
        dispatch({ type: "delete", post });
        setPage(1);
      };
      return (
        <div className="post">
          <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.message}</p>
          </div>
          {/* <small>{post.date}</small> */}
          <div className="action-btn--delete" onClick={deletePost}></div>
        </div>
      );
    };
  
    return (
      <div className="blog-component">
        {posts.length>0?
                <div className="posts-wrapper">
                  <Pagination
                      page={currentPage}
                      totalPages={posts.length}
                      handlePagination={handlePages}
                      pageSize={pageSize}
                  />
                  {paginatedPosts.map(map)}
              </div>
              :
              <div className="posts-placeholder">
                <h3>Write your first post!</h3>  
              </div>
      }


        <div className="add-block">
        <div className="input-block">
          {visibility?<FormComponent dispatchNewPost={handleAddNew} closeAction={switchVisivility}/>:<button className="action-btn" onClick={switchVisivility}>Create new post</button>}
        </div>
        <div>
        </div>
        </div>
      </div>
    );
};

export default BlogComponent;
