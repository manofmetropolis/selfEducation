//In this lesson we will learn to stop the default action of a form in order to facilitate doing...other stuff.

//Collect the form
const commentForm = document.querySelector("#commentForm");

//Collect the area where the comments will be displayed
const commentList = document.querySelector("#commentList");

//Add the comments to the comments list upon submission of the form.
commentForm.addEventListener('submit', function (e) {
    //prevent default action
    e.preventDefault();

    //collect username and comment VALUES
    const usernameInput = this.username.value;
    const comment = this.comment.value;

    addComment(usernameInput, comment);
    this.username.value = '';
    this.comment.value = '';
});

const addComment = (newUsername, userComment) => {
    //add username and comment as list items within the commentList
    const newComment = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(newUsername);
    newComment.append(boldTag);
    newComment.append(` - ${userComment}`);
    commentList.append(newComment);
}
