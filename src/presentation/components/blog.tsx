import React, { useReducer, useState } from "react";
import { Pagination } from "../../app/common/pagination";
import reducer from "../../app/models/reducer";
import { paginate } from "../../app/utils/paginate";
import FormComponent from "./form";



interface IBlogComponentProps {
}

const BlogComponent: React.FunctionComponent<IBlogComponentProps> = (props) => {
    const [posts, dispatch] = useReducer(reducer, [{title:"Hello",message:"World",id:1,date:new Date()}]);
    const [currentPage,setPage]= useState(1);
    const pageSize = 2;
    const paginatedMovies = paginate(posts, currentPage, pageSize);

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

    const map = (post:IPostInterface) => {
      const deletePost = () => dispatch({ type: "delete", post });
      return (
        <div className="post">
          <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.message}</p>
          </div>
          {/* <small>{post.date}</small> */}
          <img src="./imgs/icons8-delete-64.png" className="btn" onClick={deletePost} alt="delete icon"/>
        </div>
      );
    };
  
    return (
      <div className="blog-component">
        <div className="posts-wrapper">
          <div>
          {paginatedMovies.map(map)}
          </div>
          <Pagination
          page={currentPage}
          totalPages={posts.length}
          handlePagination={handlePages}
          pageSize={pageSize}
      />
        </div>
        <div className="add-block">
        <div className="input-block">
          <FormComponent dispatchNewPost={handleAddNew}/>
        </div>
        <div>
        </div>
        </div>


















        {/* <a target="_blank" href="https://icons8.com/icon/UU7eQ1Co0JW6/add">Add</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
      </div>
    );
};

export default BlogComponent;
