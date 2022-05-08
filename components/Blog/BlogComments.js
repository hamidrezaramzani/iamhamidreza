import moment from 'moment';
import React from 'react'
import EmptyData from '../EmptyData';
import BlogCommentForm from './BlogCommentForm';
import { blog_comments, blog_comments_items, blog_comments_item , empty_comments} from "./styles.module.css";
const BlogComments = ({ id, comments }) => {

    const renderComments = () => {
        if(comments.length === 0)
            return <div className={empty_comments}>
                <EmptyData />
            </div>
        return comments.map((comment) => (
            <div className={blog_comments_item} key={comment._id}>
                <div>
                    <img src={`https://ui-avatars.com/api/?name=${comment.fullname}`} alt="User Profle" width="50px" />
                </div>
                <div>
                    <h4>{comment.fullname} <span>{moment.unix(comment.date).format("MMMM Do YYYY, h:mm a")}</span></h4>
                    <p>
                        {comment.text}
                    </p>
                </div>
            </div>
        ))
    }
    return (
        <div className={blog_comments}>
            <div className={blog_comments_items}>
                <h3>{comments.length} Comments</h3>
                {renderComments()}
            </div>
            <BlogCommentForm id={id} />
        </div>
    )
}

export default BlogComments