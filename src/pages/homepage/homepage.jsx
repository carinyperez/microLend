import video from '../../assets/micro.mp4'; 
import './homepage.styles.scss'; 

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='video'>
                <video 
                class='microloans' 
                src={video}
                autoplay 
                loop 
                muted
                ></video>
            </div>
            <div className='content'>
                <h1> Fund a cause,
                    <br/> 
                    <span class='change'>change a life</span></h1>
                <p> With microLend, you can lend as little as $25
                    and make a big change in someone's life
                </p>
                <button>Find a cause</button>
            </div>
            <div className='causes'> 
                <h1>Support casues you care about</h1>
            </div>
        </div>
    )
}

export default HomePage; 