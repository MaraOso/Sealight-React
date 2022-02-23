import React from "react";

export default class SealightIMG extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            id: props.id,
        };
    };

    render(){
        //const imagePreviewRegion = this.myRef.current;


        // open file selector when clicked on the drop region
        var fakeInput = document.createElement("input");
        fakeInput.type = "file";
        fakeInput.accept = "image/*";
        fakeInput.multiple = true;

        fakeInput.addEventListener("change", function() {
            var files = fakeInput.files;
            handleFiles(files);
        });

        const dropRegionClick = () => {
            fakeInput.click();
        };


        function preventDefault(e) {
            e.preventDefault();
            e.stopPropagation();
        }



        function handleDrop(e) {
            var dt = e.dataTransfer,
                files = dt.files;

            handleFiles(files)		
        }



        function handleFiles(files) {
            for (var i = 0, len = files.length; i < len; i++) {
                if (validateImage(files[i]))
                    previewAnduploadImage(files[i]);
            }
        }

        function validateImage(image) {
            // check the type
            var validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (validTypes.indexOf( image.type ) === -1) {
                alert("Invalid File Type");
                return false;
            }

            // check the size
            var maxSizeInBytes = 10e6; // 10MB
            if (image.size > maxSizeInBytes) {
                alert("File too large");
                return false;
            }

            return true;

        }

        const previewAnduploadImage = (image) => {

            // container
            var imgView = document.createElement("div");
            imgView.className = "image-view";
            //imagePreviewRegion.appendChild(imgView);
            this.myRef.current.appendChild(imgView);

            // previewing image
            var img = document.createElement("img");
            imgView.appendChild(img);

            // progress overlay
            var overlay = document.createElement("div");
            overlay.className = "overlay";
            imgView.appendChild(overlay);


            // read the image...
            var reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
            }
            reader.readAsDataURL(image);

            // create FormData
            var formData = new FormData();
            formData.append('image', image);

            // upload the image
            var uploadLocation = 'localhost:3001/design';
            // formData.append('key', 'bb63bee9d9846c8d5b7947bcdb4b3573');

            var ajax = new XMLHttpRequest();
            ajax.open("POST", uploadLocation, true);

            ajax.onreadystatechange = function(e) {
                if (ajax.readyState === 4) {
                    if (ajax.status === 200) {
                        // done!
                    } else {
                        // error!
                    }
                }
            }

            ajax.upload.onprogress = function(e) {

                // change progress
                // (reduce the width of overlay)

                var perc = (e.loaded / e.total * 100) || 100,
                    width = 100 - perc;

                overlay.style.width = width;
            }

            ajax.send(formData);

        }
        return (
            <div
                id={`${this.state.id}Child`} 
                style={{
                    position: 'Absolute',

                    borderLeft: '0px',
                    borderRight: '0px',
                    borderTop: '0px',
                    borderBottom: '0px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(240, 248, 255)', 
                    borderRadius: '0%',

                    height:'100px', 
                    width: '100px', 

                    fontFamily: 'inherit',
                    fontSize: '10px',
                    textAlign: 'center',
                    letterSpacing: '1px',
                    color: 'rgb(0,0,0)',

                    opacity: 1,
                    zIndex: 1,
                    backgroundColor: 'rgb(250, 235, 215)', 
                    left: '0px', 
                    top: '0px'}}
            >
                <div id="drop-region" onClick={dropRegionClick} onDragEnter={preventDefault} onDragLeave={preventDefault} onDragOver={preventDefault} onDrop={handleDrop}>
                    <div className="drop-message">
                        <i className='fa fa-image'/>
                    </div>
                    <div ref={this.myRef}></div>
                </div>
                <section id={`${this.state.id}ChildTEXT`}></section>
            </div>
        );
    };
};