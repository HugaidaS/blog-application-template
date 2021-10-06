import React from 'react';

interface Props {
    dispatchNewPost:any;
    closeAction:()=>void;
}

const FormComponent = (props: Props) => {
    let {dispatchNewPost} = props;
    let {closeAction} = props;

    let [title,setTitle] = React.useState("");
    let [message,setMessage] = React.useState("");
    let [post,setPost] = React.useState({});
    const [targetTitle,setTargetTitle] = React.useState({value:""});
    const [targetBody,setTargetBody] = React.useState({value:""})
    


    const handleMessageChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
      if(event.target!=null){
            setMessage(event.target.value);
            setTargetBody(event.target)
      }
    };

    const handleTitleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      if(event.target!=null){
            setTitle(event.target.value);
            setTargetTitle(event.target)
      }
    };

    React.useEffect(() => {
        setPost({
            title,
            message,
            id:1,
            date: new Date()
        })
    }, [title,message])

    function handleSubmit(e:any) {
        e.preventDefault();

        targetTitle.value ="";
        targetBody.value =""

        if(title.length>0&&message.length>0){
            dispatchNewPost(post);
            setTitle("");
            setMessage("");
        }else{
            dispatchNewPost(null);
        }
      }

    return (
        <div>
        <div className="blog__form">
          <ul className="form__list">
            <li className="form__list__element">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="blog__form__input" onChange={handleTitleChange}/>
              <span>Enter your title</span>
            </li>
            <li className="form__list__element">
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={5} className="blog__form__input" onChange={handleMessageChange}></textarea>
              <span>Write your message</span>
            </li>
            <li className="form__list__element">
              <input type="submit" value="Post" className="action-btn" onClick={(e)=>handleSubmit(e)}/>
              <input type="button" value="Close" className="action-btn" onClick={closeAction}/>
            </li>
          </ul>
          </div>
        </div>
    )
}

export default FormComponent;