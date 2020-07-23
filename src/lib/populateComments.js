import { formatTimeStamp } from './formatTimeStamp';
import { sortByTimeStamp } from './sortByTimeStamp';
// return a string literal of all the comments in date order with replys nested beneith their parent comment

export const populateComments = (comments) => {
  // filter only the original comments
  const originalComments = comments.filter((item) => item.parentId === 'none');

  // sort the original comments by time
  const sortedOriginalComments = sortByTimeStamp(originalComments);

  // construct an array of all the comments with the correct replys nested within
  const arrayOfComments = sortedOriginalComments.map((comment) => {
    const commentReplys = comments.filter((reply) => reply.parentId === comment.commentID);
    const sortedCommentReplys = sortByTimeStamp(commentReplys);

    const builtReplys = sortedCommentReplys.map((reply) => {
      return `<p class="author">${reply.author}</p><p class="time">${formatTimeStamp(reply.timeStamp)}</p><div class="reply-comment">${reply.comment}</div>`;
    });
    if (builtReplys.length > 0) {
      return `<div class="mb-5"><div><div class="d-flex"><p class="author">${comment.author}</p><p class="time">${formatTimeStamp(
        comment.timeStamp
      )}</p></div><div class="comment">${comment.comment}<h4 class="ml-4">reply</h4></div></div><div class="reply">${builtReplys.join('')}</div></div>`;
    } else {
      return `<div class="mb-5"><div class="d-flex"><p class="author">${comment.author}</p><p class="time">${formatTimeStamp(comment.timeStamp)}</p></div><div class="comment">${
        comment.comment
      }<h4 class="ml-4">reply</h4></div></div>`;
    }
  });

  return arrayOfComments.join('');
};
