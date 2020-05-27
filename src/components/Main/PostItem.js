import React from 'react';

function PostProfile({ author, date }) {
  return (
    <div className="post__profile">
      <a href="#"><img src={author.avatar} alt="foto de perfil"/></a>
      <div className="profile__details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>    
    </div>
  );
}

function PostContent({ content }) {
  return (
    <div className="post__content">
      <p>{content}</p>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="comments">
      {comments.map(comment => ( 
        <div key={comment.id} className="comment">
          <div className="comment__profile">
            <a href="#"><img src={comment.author.avatar} alt="foto de perfil"/></a>
            <div className="comment__details">
              <p>
                <span>{comment.author.name}</span>
                {comment.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments  }) {
  return (
    <div className="post">
      <PostProfile author={author} date={date}/>
      <PostContent content={content}/>
      <div className="whitespace"></div>
      <PostComments comments={comments}/>
    </div>
  );
}

export default PostItem;