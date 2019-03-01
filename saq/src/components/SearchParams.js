import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import BottleCard from './BottleCard'

const drawerWidth = 240;

export class SearchParams extends Component {
    state = {
      mainQuery: ''
    };

    handleChange = event => {
      console.log('Searching for: ' + event.target.value)
      this.setState({ mainQuery: event.target.value });
    };

    render() {
      const { classes, cards } = this.props
      return (
        <div className={classes.root}>
            <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{backgroundColor: '#7a233c'}}>
            <Typography variant="h6" color="inherit">
              SAQ
            </Typography>
            <div className={classes.headerInput}>
              <Input
                style={{ margin: 8, color: 'white' }}
                placeholder="Let's get lit"
                fullWidth
                onChange={this.handleChange.bind(this)}
                classes={{ underline: classes.underline }}
                endAdornment={
                  <InputAdornment position="end">
                      <SearchIcon/>
                  </InputAdornment>
                }
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.rowContent}>
            <Grid container spacing={8}>
            {
              cards.length > 0 ?
              cards.map(card => (
                <BottleCard key={card.title} {...card} />
              )) : null
            }
            </Grid>
          </div>
        </main>
    </div>
      )
    }
}

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    headerInput: {
      marginLeft: '10%',
      width: '80%'
    },
    mainInput: {
      color: 'white'
    },
    underline: {
      color: theme.palette.common.white,
      borderBottom: theme.palette.common.white,
      '&:after': {
        borderBottom: `2px solid ${theme.palette.common.white}`,
      },
      '&:focused::after': {
        borderBottom: `2px solid ${theme.palette.common.white}`,
      },
      '&:before': {
        borderBottom: `1px solid ${theme.palette.common.white}`,
      },
      '&:hover:before': {
        borderBottom: `2px solid ${theme.palette.common.white}`,
      }
    },
    rowContent:{
      whiteSpace: 'nowrap'
    },
    toolbar: theme.mixins.toolbar,
});
  
export default withStyles(styles)(SearchParams);