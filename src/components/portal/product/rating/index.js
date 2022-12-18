import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { RiChatQuoteFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'justify',
    boxShadow: 'none',
    '@media (max-width: 800px)': {
      flexDirection: 'column'
    }
  },
  card: {
    backgroundColor: '#fff',
    margin: '50px 0px 160px 145px',
    padding: '20px',
    border: '0.5px solid #ccc',
    '@media (max-width: 1150px)': {
      margin: '70px 150px 100px 150px'
    },
    '@media (max-width: 600px)': {
      margin: '30px auto'
    }
  },
  title: {
    fontSize: 16,
    color: '#473F57'
  },
  notFound: {
    margin: '50px 0px 160px 145px'
  },
  text: {
    marginBottom: 12
  }
})

const Rating = (props) => {
  const { rating } = props.data
  const classes = useStyles()

  return (
    <>
      {rating?.length ? (
        <Card className={classes.root}>
          {rating?.map((data) => (
            <div className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <RiChatQuoteFill />
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  {data.name}
                </Typography>
                <Typography className={classes.text} color="textSecondary">
                  {data.text}
                </Typography>
                <Typography className={classes.text} color="textSecondary">
                  <span>
                    {[...Array(data.score).keys()].map((data, i) => (
                      <AiFillStar key={i} color="#FAAF00" />
                    ))}
                  </span>
                </Typography>
              </CardContent>
            </div>
          ))}
        </Card>
      ) : (
        <Typography className={classes.notFound} color="textSecondary">
          Nenhuma avaliação
        </Typography>
      )}
    </>
  )
}
export default Rating
