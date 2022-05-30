const { RichText } = wp.editor
const { BlockControls, MediaUpload } = wp.blockEditor

const { Button, Toolbar } = wp.components


export default {
    title: 'Summary',
    icon: 'editor-quote',
    category: 'article',
    edit: edit,
    save: save,
    attributes: {
       
        content: { type: 'string' },
        preview: { type: 'boolean', default: false }
    }
}

function edit(props) {
    return (
        <div>
            <BlockControls>
                <Toolbar
                    controls={[
                        {
                            icon: props.attributes.preview ? 'edit' : 'visibility',
                            title: 'Preview',
                            onClick: (event) => props.setAttributes({ preview: !props.attributes.preview })
                        }
                    ]}
                />
            </BlockControls>
            { props.attributes.preview ? renderSave(props) : renderEdit(props) }
        </div>

    )
}

function renderSave(props) {
    return (
        <blockquote className="border">
        <p className="text">
            <em>{props.attributes.content}</em>
            </p>
    </blockquote>
    )
}

function renderEdit(props) {
    function updateContent(text) {
        props.setAttributes({ content: text})
    }

    return (
      
        <blockquote className="border">
            <p className="text">
                <RichText tagName='em' value={props.attributes.content} onChange={updateContent} />
            </p>
        </blockquote>

    )
}

function save(props) {
    return renderSave(props)
}