import './../App.css'

function AllPostsUser(){
    return (
        <div className='user-posts pad16 flex flex-dir gap16'>
            <h3 className='tertiary-heading'>Your Posts</h3>
            <div className='Allpost-content flex flex-dir gap08 pad08'>
                <p className='post-identifier'>444d5sd58d8sd88d8</p>
                <p className='post-title'>edhibfds dfdshfds bdsb fedf</p>
                <p className='post-des'>Lorem epsum lodad sdsf  sd ww s wwdsdsd dfedsfd d dfd  rtaerfe</p>
                <div className='brn-con flex flex-3 gap16'>
                    <button className='update'>update</button>
                    <button className='delete'>delete</button>
                </div>
            </div>

            
        </div>
    )
}
export default AllPostsUser