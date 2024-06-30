import {Header} from "@/components/header";
import {Navbar} from "@/components/navbar";
import {HowItWorks} from "@/components/howItWorks";
import {Block3} from "@/components/block3";
import {Comments} from "@/components/comments";
import {Suspense} from "react";
import {Faq} from "@/components/faq";
import {InfoBlock} from "@/components/infoBlock";
import {Form} from "@/components/form";
import {Footer} from "@/components/footer";
import {PageLoader} from "@/pages/PageLoader";
import {Loader} from "@/components/loader";

export const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HowItWorks />
            <Block3 />
            <Suspense fallback={<PageLoader/>}>
                <Comments />
            </Suspense>
            <Suspense fallback={<PageLoader/>} >
                <Faq />
            </Suspense>
            <InfoBlock />
            <Suspense fallback={<PageLoader/>} >
                <Form />
            </Suspense>
            <Footer />
        </div>
    );
};
