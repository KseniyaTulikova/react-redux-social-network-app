import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls';
import { required, maxLengthAC } from '../../../utils/validators/validators';
const maxLength = maxLengthAC(10);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostsReduxForm onSubmit = {onAddPost} /> 
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

export const MyPostsForm = (props) => {
    
    return (
        <form onSubmit ={props.handleSubmit}>
            <div>
                <Field component = { Textarea } validate = {[required, maxLength]} name = 'newPostText' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

export const MyPostsReduxForm = reduxForm({form: 'myPostsForm'})(MyPostsForm);