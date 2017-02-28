import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from '../css/components/episode';
import Video from '../components/Video';
import FacebookProvider  from 'react-facebook';
import Comments from '../components/Comments';
import Login from '../components/Login';
import Like from '../components/Like';
import Dislike from '../components/Dislike';
import CommentsCount from '../components/CommentsCount';
import {ButtonToolbar, Button, ButtonGroup, Panel, DropdownButton, MenuItem, Row, Col, Grid, Accordion, Modal} from 'react-bootstrap'
import { incrementCount,
  decrementCount } from '../actions/vote';



const cx = classNames.bind(styles);

class Episode extends Component {

   constructor(props) {
    super(props);
    this.state = {
     episodeNum: 1
    };

  }



   episodeSelector() {
    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return(
      <div className={cx('selectors')}>
        <ButtonGroup>
        <DropdownButton bsStyle="default" title="Episodes" noCaret id="dropdown-no-caret" bsSize="large">
          <MenuItem eventKey="1" onSelect={ ()=> this.setState({ episodeNum: 1 })}>Episode 1</MenuItem>
          <MenuItem eventKey="2" onSelect={ ()=> this.setState({ episodeNum: 2 })}>Episode 2</MenuItem>
        </DropdownButton>
          <Button
            className={cx('next')}
            bsStyle="warning"
            bsSize="large"
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum +1  })}>Next Episode
          </Button>
        </ButtonGroup>
      </div>
      )
    }
    if (this.state.episodeNum === 4) {
      return(
      <div className={cx('selectors')}>
        <ButtonGroup>
          <Button
            className={cx('prev')}
            bsStyle="warning"
            bsSize="large"
            onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum -1  })}>Prev Episode
          </Button>
          <DropdownButton bsStyle="default" title="Episodes" noCaret id="dropdown-no-caret" bsSize="large">
            <MenuItem eventKey="1" onSelect={ ()=> this.setState({ episodeNum: 1 })}>Episode 1</MenuItem>
            <MenuItem eventKey="2" onSelect={ ()=> this.setState({ episodeNum: 2 })}>Episode 2</MenuItem>
          </DropdownButton>
        </ButtonGroup>
      </div>
      )
    }
    else {
      return(
        <div className={cx('selectors')}>
            <ButtonGroup>
                <Button
                  className={cx('prev')}
                  bsStyle="warning"
                  bsSize="large"
                  onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum -1  })}>Prev Episode
                </Button>
                <DropdownButton bsStyle="default" title="Episodes" noCaret id="dropdown-no-caret" bsSize="large">
                  <MenuItem eventKey="1" onSelect={ ()=> this.setState({ episodeNum: 1 })}>Episode 1</MenuItem>
                  <MenuItem eventKey="2" onSelect={ ()=> this.setState({ episodeNum: 2 })}>Episode 2</MenuItem>
                </DropdownButton>
                <Button
                  className={cx('next')}
                  bsStyle="warning"
                  bsSize="large"
                  onClick={ ()=> this.setState({ episodeNum: this.state.episodeNum +1  })}>Next Episode
              </Button>
            </ButtonGroup>
        </div>
      )
    }
  }


 like() {
    const {likes1, likes2, likes3, likes4, dislikes1, dislikes2, dislikes3, dislikes4} = this.props;

    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return (
          <Like
          likes={likes1}
          dislikes={dislikes1}
          key= "5"
          />
      )
    }
    if (this.state.episodeNum === 2) {
      return (
          <Like
          likes={likes2}
          dislikes={dislikes2}
          key= "6"
          />
      )
    }
    if (this.state.episodeNum === 3) {
      return (
          <Like
          likes={likes3}
          dislikes={dislikes3}
          key= "7"
          />
      )
    }
    if (this.state.episodeNum === 4) {
      return (
          <Like
          likes={likes4}
          dislikes={dislikes4}
          key= "8"
          />
      )
    }
  }

dislike() {
    const {likes1, likes2, likes3, likes4, dislikes1, dislikes2, dislikes3, dislikes4} = this.props;

    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return (
          <Dislike
          likes={likes1}
          dislikes={dislikes1}
          key= "9"
          />
      )
    }
    if (this.state.episodeNum === 2) {
      return (
          <Dislike
          likes={likes2}
          dislikes={dislikes2}
          key= "10"
          />
      )
    }
    if (this.state.episodeNum === 3) {
      return (
          <Dislike
          likes={likes3}
          dislikes={dislikes3}
          key= "11"
          />
      )
    }
    if (this.state.episodeNum === 4) {
      return (
          <Dislike
          likes={likes4}
          dislikes={dislikes4}
          key= "12"
          />
      )
    }
  }


  commentSection () {
    const {comments1, comments2, comments3, comments4} = this.props;

    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return (
          <Comments
          epComments={comments1}
          key={this.state.episodeNum}
          />
      )
    }
    if (this.state.episodeNum === 2) {
      return (
          <Comments
          epComments={comments2}
          key={this.state.episodeNum}
          />
      )
    }
    if (this.state.episodeNum === 3) {
      return (
          <Comments
          epComments={comments3}
          key={this.state.episodeNum}
          />
      )
    }
    if (this.state.episodeNum === 4) {
      return (
          <Comments
          epComments={comments4}
          key={this.state.episodeNum}
          />
      )
    }
  }


  episodeData() {
    const {episode} = this.props;
    if (this.state.episodeNum === 1 || this.state.episodeNum === 0) {
      return (episode.episode1)
    }
    if (this.state.episodeNum === 2) {
      return (episode.episode2)
    }
    if (this.state.episodeNum === 3) {
      return (episode.episode3)
    }
    if (this.state.episodeNum === 4) {
      return (episode.episode4)
    }
  }

  logo() {
    return (

          <img className={cx('logo')} src={require('../images/Logo.png')} />

      )
  }



  render() {
    const {episode, episodeSelector, episodeData, buttonsInstance, onIncrement, logo, about } = this.props;
    return (
      <Grid>
        <div className='video'>
        {this.logo()}
          <Video
            episode={this.episodeData().url}
          />
          <div className={cx('header')}>
          <h3>{this.episodeData().header}</h3>
          </div>
          <Row className="show-grid">
          <Col xs={12} md={12} lg={12}>
            <ButtonGroup vertical block>
              <Button bsStyle="warning" bsSize="large" className={cx('vote')} onClick={ ()=> this.setState({ vote: !this.state.vote })}>
              VOTE!
              </Button>
              <Panel collapsible expanded={this.state.vote}>
                <div className={cx('poll')}>
                    <script type="text/javascript" charset="utf-8" src="http://static.polldaddy.com/p/9676226.js"></script>
                </div>
              </Panel>
            </ButtonGroup>
          </Col>
          </Row>
          <ButtonGroup vertical block>
            <Button bsStyle="primary" bsSize="large" className={cx('commentButton')} onClick={ ()=> this.setState({ open: !this.state.open })}>
            COMMENTS
            </Button>
            <Panel collapsible expanded={this.state.open}>
              {this.commentSection()}
            </Panel>
          </ButtonGroup>
          <Col xs={12} md={12} lg={12}>
            {this.episodeSelector()}
          </Col>
        </div>
      </Grid>

    )
  }


}


function mapStateToProps(state) {
  return {
    episode: state.episode,
    comments1: state.episode.episode1.comments,
    comments2: state.episode.episode2.comments,
    comments3: state.episode.episode3.comments,
    comments4: state.episode.episode4.comments,
    likes1: state.episode.episode1.likes,
    likes2: state.episode.episode2.likes,
    likes3: state.episode.episode3.likes,
    likes4: state.episode.episode4.likes,
    dislikes1: state.episode.episode1.dislikes,
    dislikes2: state.episode.episode2.dislikes,
    dislikes3: state.episode.episode3.dislikes,
    dislikes4: state.episode.episode4.dislikes
  };
}

export default connect(mapStateToProps, { incrementCount, decrementCount })(Episode);