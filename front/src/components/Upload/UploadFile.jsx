import React, { Component } from "react";
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectFileImages: null,
            loaded: false
        };
    }

    onChangeHandler = event => {
        this.setState({
            selectFileImages: event.target.files[0],
            loaded: false
        });
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append("file", this.state.selectFileImages);
        console.log(this.state.selectFileImages)
        fetch( SERVER_ADDRESS + '/uploadFile', {
            method: 'Post',
            mode: "cors",
            credentials:"same-origin",
            redirect: "follow",
            referrer: "no-referrer",
            body: data
        }).then(res => {
            console.log(res.statusText);
            this.setState({loaded: true})
        });
        const content = {
            'name':this.state.selectFileImages.name,
            'desciption': "",
            'liens_logo': 'http://localhost:3001/recrutement/' + this.state.selectFileImages.name 
        }
        fetch( SERVER_ADDRESS + '/images',
        {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(content)
        })
        .then(
            res => res.json()
        )
        .then(
            (res) => console.log(res)
        )
    };

    render() {
        return (
            <div>
                <input type="file" 
                       name="file"
                       onChange={this.onChangeHandler}
                />
                <button type="button"
                         className="btn btn-success btn-block"
                         onClick={this.onClickHandler}>
                             Send !
                </button>
                {this.state.loaded &&
                    <embed src={SERVER_ADDRESS + '/images/' + this.state.selectFileImages.name} />
                    }
            </div>
        )
    }
}

export default UploadFile;
