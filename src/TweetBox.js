import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName:'Eduardo Calachua',
      username: 'Edu123',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://pbs.twimg.com/profile_images/1420572812193026050/W8boMMDn_normal.jpg'
    })
  }

  return (
    <div className='tweetBox'>
      <form>
        <div  className='tweetBox__input'>
          <Avatar src='https://pbs.twimg.com/profile_images/1420572812193026050/W8boMMDn_normal.jpg'/>
          <input 
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening" 
            type='text'
          />
        </div>
        <input
           onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox__imageInput' 
          placeholder='Optional: Enter image URL' 
          type='text'
        />
        <Button 
        onClick={sendTweet}
        type='submit'
        className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
