import React from 'react';

interface Props {
    dispatchNewPost:any;
}

const FormComponent = (props: Props) => {
    let {dispatchNewPost} = props;

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
        <div className="form-style">
          <ul>
            <li>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" onChange={handleTitleChange}/>
              <span>Enter your title</span>
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={5} onChange={handleMessageChange}></textarea>
              <span>Write your message</span>
            </li>
            <li>
              <input type="submit" value="Post" onClick={(e)=>handleSubmit(e)}/>
            </li>
          </ul>
          </div>
        </div>
    )
}

export default FormComponent;