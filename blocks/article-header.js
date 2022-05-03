const { RichText, BlockControls, MediaUpload } = wp.editor
const { Button, Toolbar } = wp.components

export default {
    title: 'Article Head',
    icon: 'universal-access-alt',
    category: 'article',
    edit: edit,
    save: save,
    attributes: {
        content: { type: 'string' },
        image: { type: 'string', default: 'http://placehold.it/500' },
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
            { props.attributes.preview ? save(props) : renderEdit(props) }
        </div>

    )
}



function renderEdit(props) {
 


    function updateContent(text) {
        props.setAttributes({ content: text})
    }

    return (
        <div>
            <RichText tagName='h2' value={props.attributes.content} onChange={updateContent} />
          
        </div>

    )
}

function save(props) {
    return <h2 className="h2 font-700">{props.attributes.content}</h2>;
}
