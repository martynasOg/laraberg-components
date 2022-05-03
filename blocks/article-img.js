const { RichText } = wp.editor
const { BlockControls, MediaUpload } = wp.blockEditor
const { Component } = wp.element;


const { Button, Toolbar } = wp.components


export default {
    title: 'Image',
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
    componentDidMount() {
        this.props.setAttributes({preview: true})
    },
    
    attributes: {
        image: { type: 'string', default: '/gutenberg/article/img/1.svg' },
        cta: {type:'string', default:'https://go.redireci.com/click'},
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
        <a href={props.attributes.cta}>
        <picture >
            <source  srcSet={props.attributes.image} type="image/jpeg"/>
            <img src={props.attributes.image}  className="w-full mx-auto lazyload"  />
        </picture>
    </a>
    )
}

function renderEdit(props) {
    function selectImage(value) {
        console.log('IMAGE', value)
        props.setAttributes({image: value.url})
    }
    return (
        <div>

            <MediaUpload
                onSelect={selectImage}
              
                value={ props.attributes.image }
                allowedTypes={['image']}
                
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
            />
        </div>

    )
}

function save(props) {
    return renderSave(props)
}