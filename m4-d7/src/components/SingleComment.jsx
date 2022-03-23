import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + asin,
      {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjA3YTRlYTdiMTAwMTVkMDY3YWIiLCJpYXQiOjE2NDgwNjcwMzksImV4cCI6MTY0OTI3NjYzOX0.sBKkw7wQQ_5fkciKFIJTia-jJYnPmm39eRgUh7lSF24',
        },
      },
    )
    if (response.ok) {
      alert('comment deleted!')
    } else {
      alert('comment NOT deleted!')
    }
  } catch (error) {
    alert('comment NOT deleted!')
  }
}

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      D
    </Button>
  </ListGroup.Item>
)

export default SingleComment
