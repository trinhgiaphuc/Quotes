import { useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import { useParams } from 'react-router';

import classes from './NewCommentForm.module.css';

const NewCommentForm = props => {
  const commentTextRef = useRef();
  const { quoteId } = useParams();

  const { sendRequest, error } = useHttp(addComment);

  const submitFormHandler = async event => {
    event.preventDefault();
    const commentData = commentTextRef.current.value;
    await sendRequest({ quoteId, commentData });
  };

  if (error) return <div className="centered focused">{error}</div>;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
