import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeaderRaw from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {withStyles} from '@material-ui/core/styles'
import AvatarRaw from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: 'white',
  },
})
const CardHeader = withStyles(cardStyles)(CardHeaderRaw)

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: 'white',
  },
})
const Avatar = withStyles(avatarStyles)(AvatarRaw)

const styles = {
  card: {
    margin: '5% 25%',
  },
}

const NowWhat = props => {
  const {classes} = props
  return (
    <Card className={classes.card}>
      <CardHeader title="OK, Naveen, you're all setup. Now What?" />
      <CardContent>
        <List>
          <ListItem>
            <Avatar>1</Avatar>
            <ListItemText primary="Connect to the Drone API" />
          </ListItem>
          <ListItem>
            <Avatar>2</Avatar>
            <ListItemText primary="Create your Visualization" />

            <CardActions>
              <Button size="small" color="primary">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button size="small" color="primary">
                <Link to="/chart">Chart</Link>
              </Button>
            </CardActions>
          </ListItem>
          <ListItem>
            <Avatar>3</Avatar>
            <ListItemText primary="Poll the API" />
          </ListItem>
          <ListItem>
            <Avatar>4</Avatar>
            <ListItemText primary="Submit Your App" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(NowWhat)
