

const { RichText } = wp.editor
const { BlockControls, MediaUpload } = wp.blockEditor

const { Button, Toolbar } = wp.components

export default {
    title: 'Numbers text',
    icon: 'universal-access-alt',
    category: 'parts',
    edit: edit,
    save: save,
    attributes: {
        titleContent: { type: 'string' },
        bodyContent: { type: 'string' },
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

// function renderSave(props) {
//     return (
//     <p> 
//         <img src="/article_assets/img/checkmark.svg"  alt="" srcset="" className="checkmark"  />
//         <strong class="capitalize">{props.attributes.titleContent}</strong> - {props.attributes.bodyContent}
//     </p>
//     )
// }

function renderSave(props) {
    return (
            <p className="flex flex-row items-start justify-start">
                <span className="capitalize number">{props.attributes.titleContent}</span>{props.attributes.bodyContent}
            </p>   
    )
}

function renderEdit(props) {

function updateTitleContent(text) {
    props.setAttributes({ titleContent: text})
}
function updateBodyContent(text) {
    props.setAttributes({ bodyContent: text})
}


   

    return (
    <p> 
        
        <RichText placeholder='title' tagName='strong'  value={props.attributes.titleContent} onChange={updateTitleContent} />
        <RichText placeholder='content' tagName='p' value={props.attributes.bodyContent} onChange={updateBodyContent} />
     </p>

    )
}

function save(props) {
    return renderSave(props)
}





