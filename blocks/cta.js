const { RichText } = wp.editor
const { BlockControls, MediaUpload } = wp.blockEditor

const { Button, Toolbar } = wp.components


export default {
    title: 'Main Cta Button',
    icon: 'warning',
    category: 'article',
    edit: edit,
    save: save,
    attributes: {
        cta: {type:'string', default:'https://go.redireci.com/click'},
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
        <a href={props.attributes.cta} id="maincta" className="button text-center">{props.attributes.content}&nbsp;&nbsp;
    
            <img src='/article_assets/img/chevron.svg' width='20px'  className="inline" />  
        
        </a>
    )
}

function renderEdit(props) {
    function updateContent(text) {
        props.setAttributes({ content: text})
    }

    return (
      
        
            
                <RichText tagName='div' value={props.attributes.content} onChange={updateContent} />
          
       

    )
}

function save(props) {
    return renderSave(props)
}