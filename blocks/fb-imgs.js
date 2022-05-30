const { RichText } = wp.editor
const { BlockControls, MediaUpload } = wp.blockEditor
const { Component } = wp.element;


const { Button, Toolbar } = wp.components


export default {
    title: 'FB testimonials',
    icon: 'facebook',
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
        image1: { type: 'string', default: '/gutenberg/article/img/345x650.png' },
        image2: { type: 'string', default: '/gutenberg/article/img/345x650.png' },
        image3: { type: 'string', default: '/gutenberg/article/img/345x650.png' },
        image4: { type: 'string', default: '/gutenberg/article/img/345x650.png' },
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
 

        <div>





          <div className='fb-testimonials flex flex-col a_md:flex-row items-start mx-0 md:-mx-10px -mb-12px'>
                            <div className="flex flex-col w-full md:w-1/2 justify-start mx-0 md:mx-10px">
                                <a href={props.attributes.cta}>
                                    <figure >
                                        <picture>
                                        <img src={props.attributes.image1}  className="w-full mx-auto lazyload"  />    
                                        </picture>
                                    </figure>
                                </a>
                                <a href={props.attributes.cta}>
                                    <figure >
                                        <picture>
                                        <img src={props.attributes.image2}  className="w-full mx-auto lazyload"  />
                                        </picture>
                                    </figure>
                                </a>
                            </div>

                            <div className="flex flex-col w-full md:w-1/2 justify-start mx-0 md:mx-10px">
                            <a href={props.attributes.cta}>    
                                <figure >
                                    <picture>        
                                    <img src={props.attributes.image3}  className="w-full mx-auto lazyload"  />
                                    </picture>
                                </figure>
                            </a>
                            <a href={props.attributes.cta}>
                                <figure >
                                    <picture>
                                    <img src={props.attributes.image4}  className="w-full mx-auto lazyload"  />
                                        
                                    </picture>
                                </figure>
                            </a>
                            </div>
                        </div>
            
        </div>

  
    )
}

function renderEdit(props) {
    
        function selectImage1(value) {
            console.log('IMAGE', value)
            props.setAttributes({image1: value.url})
        }
        function selectImage2(value) {
            console.log('IMAGE', value)
            props.setAttributes({image2: value.url})
        }
        function selectImage3(value) {
            console.log('IMAGE', value)
            props.setAttributes({image3: value.url})
        }
        function selectImage4(value) {
            console.log('IMAGE', value)
            props.setAttributes({image4: value.url})
        }
    return (
        <div>

            <MediaUpload
                onSelect={selectImage1}
              
                value={ props.attributes.image1 }
                allowedTypes={['image']}
                
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
            />
             <MediaUpload
                onSelect={selectImage2}
              
                value={ props.attributes.image }
                allowedTypes={['image']}
                
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
            />
             <MediaUpload
                onSelect={selectImage3}
              
                value={ props.attributes.image3 }
                allowedTypes={['image']}
                
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
            />
             <MediaUpload
                onSelect={selectImage4}
              
                value={ props.attributes.image4 }
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