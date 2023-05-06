import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import "./blog.scss";

const Blog = () => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [dummyText, setDummyText] = useState('');
    const [tags, setTags] = useState([]);
    const [tagText, setTagText] = useState('');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (title.length === 0 || imageUrl.length === 0 || dummyText.length === 0 || tags.length === 0){
            return alert('All fields are required!');
        }
        const result = {
            title, 
            imageUrl,
            dummyText, 
            tags
        };
        console.log(result);

        let getList = window.localStorage.getItem('myblog');
       
    
        let list = [result];
        if (getList !== 'undefined' && getList !== null){
            getList = JSON.parse(getList);
            list = [...getList, result];
        }
        window.localStorage.setItem("myblog",JSON.stringify(list));

        history.push('/');

        // localStorage.clear();
        setTitle('');
        setImageUrl('');
        setDummyText('');
        setTags('');
        setTagText('');
        setTags([]);
    }

    const handleAddTag = ()=>{
        if (tagText.length === 0)
        return ;
        setTags([...tags, tagText]);
        setTagText('');
    }

  return (
    <div className="create-blog">
        <form onSubmit={handleSubmit}>
            <div className="input-box">
                <label>Title</label>
                <br/>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="input-box">
                <label>Image Link</label>
                <br/>
                <input type="text" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} />
            </div>
            <textarea 
                placeholder='Write Something about your blog....' 
                name="blog" 
                id="blog" 
                cols="30" 
                rows="10"
                value={dummyText}
                onChange={(e)=>setDummyText(e.target.value)}
            >
            </textarea>
            <div className="tags-list">
                <input placeholder='Write here...' type="text" value={tagText} onChange={(e)=>setTagText(e.target.value)} />
                <button onClick={handleAddTag} type="button">Add Tag</button>
            </div>
            <div className="tagPrint">
                {
                    tags.map((item)=>{
                        return <span className='tags'>{item}</span>
                    })
                }
            </div>
            <button type="submit" className='add-btn'>Add the Post</button>
        </form>
    </div>
  )
}

export default Blog
