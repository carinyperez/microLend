import Cards from '../../components/cards/cards.component';
import './mentors.styles.scss';
import head1 from '../../assets/head1.jpeg'; 
import head2 from '../../assets/head2.jpeg'; 
import head3 from '../../assets/head3.jpeg'; 
import head4 from '../../assets/head4.jpeg'; 

const Mentors  = () => {
    return (
        <div> 
        <h1>Mentors</h1>
        <div className='mentors'>
            <Cards title='James Richardson' image={head2} button='View profile'
            desc='How I can help'
            category='Employee Training, Staffing and Recruiting, Market Research, Marketing Strategy'
            />
            <Cards title='Matt Gerber' image={head3} button='View profile'
            desc='How I can help' category='Work-Life Balance, Planning and Goal Setting, Legal Structure,Getting Started'/>
            <Cards title='Adam Chang' image={head4} button='View profile'
            desc='How I can help' category='Managing Technology, Technology and Internet, Product Development'/>
               <Cards title='Lucy Lui' image={head1} button='View profile'
            desc='How I can help' category='Board Development, Business Strategy, Business Planning, Market Research, Marketing'/>
        </div>
        </div>
    )
}

export default Mentors; 