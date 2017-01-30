'use strict';
let lastId;

class Storage {

  static initializeId () {
    lastId = JSON.parse(localStorage.getItem( 'lastId' ));
    if ( lastId == null ) {
      // location.reload(true);
      // localStorage.setItem( 'lastId',0 );
      console.log('last id unknow')
    }
  }

  static addPost (postText) {
    this.initializeId ();
    lastId = JSON.parse(localStorage.getItem( 'lastId' ));
    let existingPosts = JSON.parse(localStorage.getItem('posts'));
    if (existingPosts === null) existingPosts = [];

    const uniqueId = lastId + 1,
      datePublished = new Date(),
      postObject = {
        postText: postText,
        id: uniqueId,
        datePublished: datePublished,
        upVotes: 0
      };

    existingPosts.push(postObject);
    localStorage.setItem('posts', JSON.stringify(existingPosts));
    localStorage.setItem('lastId', JSON.stringify(uniqueId))
  }

  static getPosts() {
    const posts = JSON.parse(localStorage.getItem ("posts"));
    return posts;
}

  static upVote(upvotedMessageId) {
    const posts = this.getPosts();
    const searchedIndex = posts.map(function(post) { return post.id; }).indexOf(upvotedMessageId);
    const currentUpvotesCount = posts[searchedIndex].upVotes;
    posts[searchedIndex].upVotes = currentUpvotesCount + 1;
    localStorage.setItem('posts', JSON.stringify(posts));
    }

  static getVotesNumber(MessageId) {
    const posts = this.getPosts();
    const searchedIndex = posts.map(function(post) { return post.id; }).indexOf(MessageId);
    const votesNumber = posts[searchedIndex].upVotes;
    return votesNumber;
  }
}

module.exports = Storage;
