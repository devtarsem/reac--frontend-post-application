import './../App.css'
import { Fragment } from 'react'
import Pharmacist from './../pharmacist.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Allposts(){
    const [post, setpost] = useState('')
    useEffect(e=>{
        const allPosts = async()=>{
            const posts = await axios({
                method : 'GET',
                url : "https://devtarsem.github.io/postApp/all-users"
            })
            setpost(posts.data.data.post)
        }
        allPosts()

    }, [])



    return (
        <Fragment>
            <div className='all-post flex flex-dir gap16 pad16'>
                <h2 className='secondary-heading'>All posts</h2>
                <div className='post-details pad16 flex flex-dir gap08'>
                    <p className='id'>47741845485858sdsd41s8s</p>
                    <div className='dpAndName flex flex-2 gap16'>
                        <img className='dp' src={Pharmacist}/>
                        <p className='username'>tarsem singh</p>
                    </div>
                    <p className='title'>title</p>
                    <p className='des'>Lorem epsum asdh sh dh dfdfeef ee ejf efef ejfe e nfks  edekdm deed Lorem epsum asdh sh dh dfdfeef ee ejf efef ejfe e nfks  edekdm deed Lorem epsum asdh sh dh dfdfeef ee ejf efef ejfe e nfks  edekdm deed</p>
                    <div className='btns-container flex flex-3 gap16'>
                        <button className='like'> 0 Like</button>
                        <button className='comment'> 0 comment</button>
                        <button className='comment'>Bookmark</button>
                    </div>
                    <form className='form-container-adding-comment flex flex-dir gap08'>
                        <textarea className='comment-container' id="comment-add" name="comment" rows="4" cols='80'/>
                        <button className='add-comment'>Add comment !</button>
                    </form>

                    <div className='view-all-comments flex flex-dir gap16'>
                        <h3 className='tertiary-heading'>All comments</h3>
                        <div className='comment-con flex flex-dir gap08 pad16'>
                            <p className='username-comment'>tarsem singh</p>
                            <p className='des-comment'>jsdu dedhed eene f efef efefer f rf  fr eef e f e fe e fe f e e fefefefee f efefe f</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Allposts