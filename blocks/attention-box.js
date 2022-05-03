const { RichText } = wp.editor
const { BlockControls, MediaUpload } = wp.blockEditor

const { Button, Toolbar } = wp.components
const { Component } = wp.element;


export default {
    title: 'Attention Box',
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
        <div className="update-section animated-background">
            <p> 
            <img src={props.attributes.image}  className="flag-img inline mr-10px"/>  
                <strong><span className="date" data-ago="0"></span> update: </strong>{props.attributes.content}</p>
        </div>
    )
}

function renderEdit(props) {
    function updateContent(text) {
        props.setAttributes({ content: text})
    }
    function selectImage(value) {
        console.log('IMAGE', value)
        props.setAttributes({image: value.url})
    }

    return (
      
        <div>
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
                 <RichText tagName='div' value={props.attributes.content} onChange={updateContent} />
        </div>
            
           
          
       

    )
}

function save(props) {
    return renderSave(props)
}