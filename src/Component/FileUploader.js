import React,{Component} from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);


class FileUploader extends Component{

    render(){
        return(
            <div>
                <FilePond/>

            </div>
    )
    }
}

export default FileUploader;