import { getLoadingState } from "@/rtk/selectors";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "./src/ui-components";
import { VideosPage } from "@/pages/videos-page";
import { Games } from "@/pages/games";
import ContactForm from "@/pages/contact-page/ContactForm";
import { AboutUsPage } from "@/pages/about-us";
import { KidsBlogPage } from "@/pages";

const AppLayout = () => {
  const isLoading = useSelector(getLoadingState);
  return (
    <>
      {isLoading && <Loader />}

      <Routes>
        <Route path="/" element={<Games/>} />
        <Route path="/kids-videos" element={<VideosPage/>} />
        <Route path="/contact-us" element={<ContactForm/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/kids-blog" element={<KidsBlogPage/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppLayout;
