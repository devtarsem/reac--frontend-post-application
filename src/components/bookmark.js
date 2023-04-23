import { Fragment } from 'react'
import './../App.css'

function Bookmarks(){
    return (
        <Fragment>
            <div className='book-mark-post-container bookmark pad16 flex flex-dir gap16'>
                <h3 className='tertiary-heading'>All bookmarks</h3>
                <div className='bookmark-post flex flex-dir gap08 pad08'>
                    <p className='bookmark-username'>manish sharma</p>
                    <p className='bookmark-title'>Lorem epsum lodad sdsf  sd ww s wwdsdsd</p>
                </div>
                
            </div>
        </Fragment>
    )
}

export default Bookmarks