


const { RichText, BlockControls, MediaUpload, InspectorControls, PanelBody, InnerBlocks } = wp.editor
const { Component } = wp.element;

const { Button, Toolbar } = wp.components

export default {
    title: 'Verified Customer',
    icon: 'universal-access-alt',
    category: 'article',
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
        titleContent: { type: 'string' ,default: 'name'},
        preview: { type: 'boolean', default: false }
    }
}


function renderSave(props) {
    return (



            <div className="author-row flex flex-row items-center justify-start">
                <img src={props.attributes.image}   className="h-70px" />
                <p className="personName font-600">{props.attributes.titleContent}</p>
                <div className="verified flex items-center">
                    <img src='/gutenberg/article/img/verified.svg'   className="mr-3px rounded-full" />  
                    <span className="mb-0">Verified Customer</span>
                </div>
                <img src='/gutenberg/article/img/5.svg'   className="star-img mr-0 ml-auto" />
               
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
        <RichText placeholder='name' tagName='strong'  value={props.attributes.titleContent} onChange={updateTitleContent} />
      
     </p>

    )
}

function save(props) {
    return renderSave(props)
}





