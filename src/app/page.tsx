'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectDetails from '@/components/ProjectDetails';
import FloorPlans from '@/components/FloorPlans';
import GalleryAmenities from '@/components/GalleryAmenities';
import Footer from '@/components/Footer';
import LeadPopup from '@/components/LeadPopup';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Capture UTM parameters on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utms = ['source', 'medium', 'campaign', 'term', 'content'];
      
      utms.forEach(utm => {
        const value = urlParams.get(`utm_${utm}`);
        if (value) {
          localStorage.setItem(`utm_${utm}`, value);
          console.log(`Captured UTM ${utm}: ${value}`);
        }
      });
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
      </Script>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>

      {/* Meta Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'XXXXXXX');
        fbq('track', 'PageView');`}
      </Script>

      <main>
        <Header onOpenModal={openModal} />
        <Hero onOpenModal={openModal} />
        <ProjectDetails />
        <FloorPlans onOpenModal={openModal} />
        <GalleryAmenities onOpenModal={openModal} />
        <Footer />
        
        <LeadPopup isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </>
  );
}
