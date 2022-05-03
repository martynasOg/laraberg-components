const { RichText } = wp.editor
const { BlockControls, MediaUpload, URLInput } = wp.blockEditor

const { Button, Toolbar } = wp.components


export default {
    title: 'Video',
    icon: 'universal-access-alt',
    category: 'article',
    edit: edit,
    save: save,
    attributes: {
        url: { type: 'string',  },
        preview: { type: 'boolean', default: false }
    }
}

function edit(props) {
    return (
        <div>
           
            { renderEdit(props) }
        </div>

    )
}

function renderSave(props) {
    return (
        <picture>
            <div style="position: relative; padding-top: 56.25%; margin-bottom: 18px;"><iframe src={props.attributes.url} style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" className="lazyload" allowfullscreen="true"></iframe></div>
        </picture>

    )
}

function renderEdit(props) {
    function selectUrl(value) {
        console.log(value)
       
        props.setAttributes({url: value})
    }

    return (
        <div>
            <label>Video url: </label>
            <URLInput
                value={props.attributes.url} onChange={selectUrl}
            />
        </div>

    )
}

function save(props) {
    return renderSave(props)
}