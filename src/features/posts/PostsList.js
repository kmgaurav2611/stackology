import Cards from "../../components/Cards";
import MyCarousel from "../../components/Carousel";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from './postsSlice';

const PostsList = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery('getPosts')

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = posts.ids.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    const CardsData = [
        {id:0,imgSrc:'https://www.clinikally.com/cdn/shop/files/video_consult_1_1_540x.png?v=1685953999', title:"Doctor Consult", details:'Consult India\'s top dermatologists digitally, with a combined clinical experience of treating over 50,000 patients.', buttonText:'Book Now'},
        {id:1,imgSrc:'https://www.clinikally.com/cdn/shop/files/Pediatric_Derm_Care_984c8fd8-0760-4030-9b32-e34a6fef06bd_540x.png?v=1685790232', title:"Pediatric Derm Care", details:'Protect, soothe, and nourish the sensitive skin of your baby with doctor-recommended pediatric care products.', buttonText:'Show Now'},

        {id:2,imgSrc:'https://www.clinikally.com/cdn/shop/files/hair_loss_78ce072e-0ffa-4821-a598-3b062e1bdeb0_540x.png?v=1685790253', title:"Hair Loss", details:'Fix hair thinning or hair loss with personalised plans that work for you. Enjoy thicker & fuller hair like never before', buttonText:'Shop Now'},

        {id:3,imgSrc:'https://www.clinikally.com/cdn/shop/files/Clinikally_-_Banner_800_x_600_px_1_540x.png?v=1685949570', title:"Skincare", details:'For skin that is healthy, glowing, and free from any issues, take your pick from the carefully-curated skin care products.', buttonText:'Shop Now'}

    ]

    return (
        <section>
        <MyCarousel/>
    
        <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-around'}}>
        {CardsData.map(card=>(
            <Cards card={card}/>
        ))}
        </div>
        </section>
    )
}
export default PostsList