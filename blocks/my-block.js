const { RichText } = wp.editor
const { BlockControls, MediaUpload } = wp.blockEditor

const { Button, Toolbar } = wp.components

export default {
    title: 'MyBlock',
    icon: 'universal-access-alt',
    category: 'article',
    edit: edit,
    save: save,
    attributes: {
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
            { props.attributes.preview ? renderSave(props) : renderEdit(props) }
        </div>

    )
}

function renderSave(props) {
    return (
        <a href="/">
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
                allowedTypes={['audio']}
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