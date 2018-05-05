import { connect } from 'react-redux'
import { addPost } from './actions'
import HeaderComponent from './component'

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch) => ({
  onAddPost(post) {
    // IF YOU'RE READING THIS...

    // I was getting some some error 'X-Frame-Options' to 'sameorigin'
    // from using iframe

    // so what Im doing is grabbing the id of the video and using post
    // working youtube embed url
    if (post.type === 'video') {
      var index = post.body.lastIndexOf('=') // came from browser url
      if (index < 0) {
        index = post.body.lastIndexOf('/') // came from share button url
      }

      var videoId = post.body.substr(index + 1)
      post.body = `https://www.youtube.com/embed/${videoId}`
    }

    dispatch(addPost(post))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
