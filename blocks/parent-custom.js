
import { divide } from "lodash"

const { RichText, BlockControls, MediaUpload, InspectorControls, PanelBody, InnerBlocks } = wp.editor
const { Button, Toolbar } = wp.components
const ALLOWED_BLOCKS = ['parts/nested-custom']

export default {
    title: 'Nested Custom',
    icon: 'universal-access-alt',
    category: 'article',
    edit: edit,
    save: save,
    attributes: {
        titleContent: { type: 'string' },
        bodyContent: { type: 'string' },
        
        
    }
}

function edit(props) {

    function updateTitleContent(text) {
        props.setAttributes({ titleContent: text})
    }
    function updateBodyContent(text) {
        props.setAttributes({ bodyContent: text})
    }


    return (
        
        <div className="custom-features-list">

        <InnerBlocks 
            allowedBlocks={ALLOWED_BLOCKS}
        />

            {/* <p> 
                    <img scr="/article_assets/img/checkmark.svg"  alt="" srcset="" className="checkmark"  />
                    <RichText placeholder='title' tagName='strong'  value={props.attributes.titleContent} onChange={updateTitleContent} />
                    <RichText placeholder='content' tagName='p' value={props.attributes.bodyContent} onChange={updateBodyContent} />
                </p> */}
       
        </div>

   
    
       
    )
}



function save(props) {
    return (

        <div className="custom-features-list"><InnerBlocks.Content /></div>
      
    )
}



