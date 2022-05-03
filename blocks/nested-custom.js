


const { RichText, BlockControls, MediaUpload, InspectorControls, PanelBody, InnerBlocks } = wp.editor
const { Component } = wp.element;

const { Button, Toolbar } = wp.components

export default {
    title: 'Custom facts',
    icon: 'universal-access-alt',
    category: 'parts',
    edit: class extends Component {
        constructor() {
            super(...arguments);
            this.props.setAttributes({preview: true});
            this.props.attributes.preview = true;
            // this.onChangeContent = this.onChangeContent.bind(this);
			this.state = {}; 
        }
     selectImage(value) {
            console.log('IMAGE', value)
            props.setAttributes({image: value.url})
        }
        render(props) {
            return (
                <div>
                    <BlockControls>
                        <Toolbar
                            controls={[
                                {
                                    icon: this.props.attributes.preview ? 'edit' : 'visibility',
                                    title: 'Preview',
                                    onClick: (event) => this.props.setAttributes({ preview: !this.props.attributes.preview })
                                }
                            ]}
                        />
                    </BlockControls>
                    { this.props.attributes.preview ? renderSave(this.props) : renderEdit(this.props) }
                </div>
        
            )}
    },
    save: save,
    attributes: {
        image: { type: 'string', default: '/gutenberg/article/img/1.svg' },
        titleContent: { type: 'string' ,default: 'title'},
        bodyContent: { type: 'string' , default: 'content'},
        mobileContent: {type: 'string', default: 'content-mobile'},
        preview: { type: 'boolean', default: false }
    }
}


function renderSave(props) {
    return (

            <div className="feature">
                <div className="feature-icon-border-wrapper">
                    <div class="feature-icon-wrapper">

                    <picture >
                        <source  srcSet={props.attributes.image} type="image/jpeg"/>
                        <img src={props.attributes.image}    />
                    </picture>
                        
                       
                    </div>
                </div>
                <div className="feature-inner mr-0 ml-auto">
                    <h3 className="h3">{props.attributes.titleContent}</h3>
                    <div className="feature-content hidden md:block">{props.attributes.bodyContent}</div>
                    <div className="feature-content-mb block md:hidden">{props.attributes.mobileContent}</div>
                </div>
                            
            </div>


       
               
    )
}

function renderEdit(props) {

function updateTitleContent(text) {
    props.setAttributes({ titleContent: text})
}
function updateBodyContent(text) {
    props.setAttributes({ bodyContent: text})
}
function updateMobileContent(text) {
    props.setAttributes({ mobileContent: text})
}
function selectImage(value) {
    console.log('IMAGE', value)
    props.setAttributes({image: value.url})
}


   

    return (
    <p> 
         <MediaUpload
                onSelect={selectImage}
                allowedTypes={['audio']}
                value={props.attributes.image}
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
            />
        <RichText placeholder='title' tagName='strong'  value={props.attributes.titleContent} onChange={updateTitleContent} />
        <RichText placeholder='content' tagName='p' value={props.attributes.bodyContent} onChange={updateBodyContent} />
        <RichText placeholder='content' tagName='p' value={props.attributes.mobileContent} onChange={updateMobileContent} />
     </p>

    )
}

function save(props) {
    return renderSave(props)
}





