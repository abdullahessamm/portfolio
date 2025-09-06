import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IntoVid from "@/assets/intro.mp4";
import IntroVidMob from "@/assets/intro-mobile.mp4";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [vidLoading, setVidLoading] = useState<boolean>(false);
  const [vidBlob, setVidBlob] = useState<Blob>();
  const [vidEnded, setVidEnded] = useState<boolean>(false);

  useEffect(() => {
    // set is mobile
    setIsMobile(window.innerWidth < 768);
  }, [])

  if (!vidBlob && !vidLoading) {
    setVidLoading(true);
    fetch(isMobile ? IntroVidMob : IntoVid)
      .then((res) => {
        res.blob().then((blob) => {
          setVidBlob(blob);
        });
      })
      .finally(() => {
        setVidLoading(false);
      });
  }

  return (
    <div className="app">
      {vidLoading ? <div>
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <span className="w-8 h-8 animate-ping rounded-full bg-sky-400"></span>
        </div>
      </div> : <></>}
      {vidBlob && !vidLoading && !vidEnded ? (
        <video
          src={window.URL.createObjectURL(vidBlob)}
          onCanPlay={() => setVidLoading(false)}
          onEnded={() => setVidEnded(true)}
          autoPlay
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></video>
      ) : (
        <></>
      )}

      {vidEnded ? (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
