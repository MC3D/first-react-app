import React, { Component } from 'react';
import './../css/App.css';

import ImageBoard from './ImageBoard';
import ImageForm from './ImageForm';

let images = [
  {
    id: 1,
    actor: 'Bill Murray',
    url: 'https://www.unilad.co.uk/wp-content/uploads/2016/09/006-bill-murray-theredlist-5-times-bill-murray-won-at-life-the-only-way-bill-murray-can-1197x800.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 2,
    actor: 'Bill Murray',
    url: 'https://flavorwire.files.wordpress.com/2015/09/o-bill-facebook.jpg?w=1920',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 3,
    actor: 'Bill Murray',
    url: 'https://www.maxim.com/.image/t_share/MTU1MDE2MzgxNDcxOTI1NjEy/bill-murray-caddyshack-promo.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 4,
    actor: 'Bill Murray',
    url: 'https://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/snl_300x300/public/images/2018/01/22/billmurray-stevebannon-450x450-ko.jpg?itok=O2f7_lFp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 5,
    actor: 'Bill Murray',
    url: 'http://s.newsweek.com/sites/www.newsweek.com/files/styles/feature/public/2016/09/16/bill-murray.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 6,
    actor: 'Bill Murray',
    url: 'http://lwlcdn.lwlies.com/wp-content/uploads/2016/11/bill-murray-1984-1108x0-c-default.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 7,
    actor: 'Bill Murray',
    url: 'https://media.npr.org/assets/img/2017/04/20/murray-8d38c7d72a96cd7ef599b0b81bdf854703dd1a97-s900-c85.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 8,
    actor: 'Bill Murray',
    url: 'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/images/72216.jpg?itok=aUKSCTDk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 9,
    actor: 'Bill Murray',
    url: 'https://pbs.twimg.com/profile_images/650100474226458625/-nngF2Y1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }, {
    id: 10,
    actor: 'Bill Murray',
    url: 'https://s20352.pcdn.co/wp-content/uploads/2018/02/GettyImages-918571680-1024x692.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla provident aperiam minus obcaecati assumenda ipsum neque, veniam culpa dolor debitis, sit itaque totam ratione ea, unde ut sapiente illo?'
  }
];

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      images: images
    }

    this._removeImage = this._removeImage.bind(this);
    this._addImage = this._addImage.bind(this);
  }

  _removeImage(image) {
    let images = this.state.images;
    images.splice(images.indexOf(image), 1);
    this.setState({images});
  }

  _addImage(image){
    let images = this.state.images;
    images.push(image);
    this.setState({images});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ImageForm addImage={this._addImage}/>
        </div>
        <div className="row">
          <ImageBoard images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;
