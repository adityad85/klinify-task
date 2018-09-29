import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'

import saveImage from '../helpers/saveImage';
import Picture from '../Components/Picture';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      crop: {
        x: 10,
        y: 10,
        width: 80,
        height: 80,
      },
      value: '',
      previewURL: '',
    }
  }

  onSelectFile = (e) => {
    if(e.target.files && e.target.files.length > 0) {
      this.setState({
        value: e.target.value,
      });
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => this.setState({
          src: reader.result,
        }),
        false
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  onCropChange = crop => {
    this.setState({ crop });
  }
  
  onSave = async (imageFile) => {
    const croppedFile = await saveImage(imageFile);
    this.onClear();
    this.setState(() => ({
      previewURL: croppedFile,
    }));
  }


  onClear = () => {
    this.setState(() => ({
      value: '',
      src: '',
      previewURL: '',
    }))
  }

  render() {
    return (
      <div className="root-container">
        <div>
          <input type="file" value={this.state.value} onChange={this.onSelectFile} />
        </div>
        {this.state.src && (
          <ReactCrop
            src={this.state.src}
            crop={this.state.crop}
            onChange={this.onCropChange}
          />
        )}
         <button onClick={this.onClear}>
            clear
          </button>
          <button onClick={() => this.onSave(this.state.crop)}>
            Save
          </button>
          {this.state.previewURL &&
          (<Picture previewURL={this.state.previewURL} />)
          }
      </div>
    );
  }
}

export default App;
