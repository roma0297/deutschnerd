import React from "react";
import ReactQuill from "react-quill";

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}

const Editor = props => {
    return (
        <ReactQuill value={props.value} onChange={props.onChange} modules={modules}/>
    );
}

export default Editor;