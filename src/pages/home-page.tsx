import Header from '@/components/header'
import Banner from '@/components/banner'
import background from 'src/assets/abstract.jpg'
import ImageTextCard from '@/components/image-text-card'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ImageTextCard imageUrl={background} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis diam at sapien laoreet cursus. Pellentesque ullamcorper a lorem in faucibus. Maecenas ullamcorper turpis at nunc scelerisque, sit amet finibus libero faucibus. Nulla pellentesque nunc commodo, sodales elit et, ultrices nisl."></ImageTextCard>
      <ImageTextCard imageOnLeft={false} imageUrl={background} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis diam at sapien laoreet cursus. Pellentesque ullamcorper a lorem in faucibus. Maecenas ullamcorper turpis at nunc scelerisque, sit amet finibus libero faucibus. Nulla pellentesque nunc commodo, sodales elit et, ultrices nisl."></ImageTextCard>
      <ImageTextCard imageUrl={background} title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis diam at sapien laoreet cursus. Pellentesque ullamcorper a lorem in faucibus. Maecenas ullamcorper turpis at nunc scelerisque, sit amet finibus libero faucibus. Nulla pellentesque nunc commodo, sodales elit et, ultrices nisl."></ImageTextCard>
      <Footer />
    </>
  );
};

export default Home;
