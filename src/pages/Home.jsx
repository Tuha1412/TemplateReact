import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-slider';
import Section, {SectionTitle, SectionBody} from '../components/Section';
import policy from '../assets/fake-data/policy';
import PolicyCart from '../components/PolicyCart';
import Grid from '../components/Grid';
import { Link } from 'react-router-dom';
import productData from '../assets/fake-data/products';
import ProductCard from '../components/ProductCard';
import banner from '../assets/images/banner.png';

const Home = () => {

    return (
        <Helmet title="Trang chủ">
            {/* hero slider */}
            <HeroSlider data={heroSliderData} control={true} auto={false} />
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >    
                        {
                            policy.map((item, index) => <Link to="/policy" key={index}>
                                <PolicyCart
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>   
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>       
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                >
                    {
                        productData.getProducts(4).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))
                    }
                </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
                <Section>       
                    <SectionTitle>
                        Sản phẩm mới
                    </SectionTitle>
                    <SectionBody>
                    <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                >
                                    
                                </ProductCard>
                            ))
                        }
                    </Grid>
                    </SectionBody>
                </Section>
            {/* end new arrival section */}

            {/* banner */}
                <Section>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>       
                    <SectionTitle>
                        Sản phẩm phổ biến
                    </SectionTitle>
                    <SectionBody>
                    <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                >
                                    
                                </ProductCard>
                            ))
                        }
                    </Grid>
                    </SectionBody>
                </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home;
