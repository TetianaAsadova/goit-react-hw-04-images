import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';


const APY_KEY = '34821518-f662f92316867637fb490ee01';


class App extends Component {

  state = {
    value: '',
    images: [],
    largeImageURL: '',
    page: 1,
    alt: '',
    showModal: false,
    loading: false,
  }

  handleInput = event => {
    this.setState({
      value: event.target.value,
      page: 1
    });
    // console.log(`state1`, this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value !== '') {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=${APY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => {
          // console.log(`data`, data);
          this.setState({ images: data.hits, loading: false });
          // console.log(`state2`, this.state);
        })
        .catch(error => {
          console.log(error.message);
          this.setState({ loading: false });
        });
    } else return;
  };

  handleClick = event => {
    event.preventDefault();
    if (this.state.images.length > 0) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page + 1}&key=${APY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            page: prevState.page + 1,
            loading: false,
          }))
        })
        .catch(error => {
          console.log(error.message);
          this.setState({ loading: false });
        });
    } else return;
  }

  handleOpenModal = (largeImageURL, alt) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      alt: alt,
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { loading, images, showModal, largeImageURL, alt } = this.state;

    return (
      <div className="app">
    
        <Searchbar onInput={this.handleInput} onSubmit={this.handleSubmit} />
        
        <Loader loading={loading} />

        <ImageGallery images={images} onImageClick={this.handleOpenModal} />

        {images.length > 0 && <Button onClick={this.handleClick} />}

        <Modal       
          src={largeImageURL}
          alt={alt}
          showModal={showModal}   
          onClose={this.handleCloseModal}
        />
      </div>
    );
  }

  
};

export default App;
