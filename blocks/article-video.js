const { RichText } = wp.editor
const { BlockControls, MediaUpload, URLInput } = wp.blockEditor

const { Button, Toolbar } = wp.components


export default {
    title: 'Video',
    icon: 'format-video',
    category: 'article',
    edit: edit,
    save: save,
    attributes: {
        url: { type: 'string',  },
        preview: { type: 'boolean', default: false }
    }
}

function edit(props) {
    return (
        
        <div>
           
            { renderEdit(props) }
        </div>

    )
}

function renderSave(props) {
    return (
        <picture>

<div className="content" dangerouslySetInnerHTML={{__html: props.attributes.url}}></div>
          
        </picture>

    )
}

function renderEdit(props) {
    function selectUrl(value) {
        console.log(value)
       
        props.setAttributes({url: value})
    }

    return (
        <div>
            <label>Video Html: </label>
            <URLInput
                value={props.attributes.url} onChange={selectUrl}
            />
        </div>

    )
}


function save(props) {
    return renderSave(props)
}