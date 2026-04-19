import { Routes, Route } from 'react-router-dom';
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
import Partners from './components/Partners';
import TransitionSection2 from './components/TransitionSection2';
import CursosCatalogPage from './pages/CursosCatalogPage';
import CursosPage from './pages/CursosPage';
import UbicacionPage from './pages/UbicacionPage';
import AboutPage from './pages/AboutPage';
import ReclamosPage from './pages/ReclamosPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <MasterHero />
              <Hero />
              <TransitionSection />
              <MainHero />
              <TransitionSection2 />
              <FeatureSections />
              <CompanyGallery />
              <Stats />
              <Testimonials />
            </>
          } 
        />
        <Route path="/cursos" element={<CursosCatalogPage />} />
        <Route path="/cursos/:courseId" element={<CursosPage />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/reclamos" element={<ReclamosPage />} />
      </Routes>
    </Layout>
  );
}
