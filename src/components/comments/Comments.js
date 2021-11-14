import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './Comments.module.css';

import CommentsList from '../../components/comments/CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const { quoteId } = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, status, data: comments } = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const renderedComments = () => {
    if (status === 'pending') {
      return (
        <div className="centered">
          <LoadingSpinner />
        </div>
      );
    }

    if (status === 'completed' && comments) {
      return <CommentsList comments={comments} />;
    }

    if (status === 'completed' && comments.length === 0) {
      return <p>No comments added yet</p>;
    }
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddComment={addCommentHandler} />
      )}
      {renderedComments()}
    </section>
  );
};

export default Comments;
