import Layout from './components/Layout';
import MasterHero from './components/MasterHero';
import TransitionSection from './components/TransitionSection';
import MainHero from './components/MainHero';
import Hero from './components/Hero';
import FeatureSections from './components/FeatureSections';
import Categories from './components/Categories';
import PopularCourses from './components/PopularCourses';
import CompanyGallery from './components/CompanyGallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Partners from './components/Partners';
import TransitionSection2 from './components/TransitionSection2'

export default function App() {
  return (
    <Layout>
      <MasterHero />
      <TransitionSection />
      <MainHero />
      <TransitionSection2 />
      <Hero />
      <FeatureSections />
      <Categories />
      <PopularCourses />
      <CompanyGallery />
      <Stats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Partners />
    </Layout>
  );
}
