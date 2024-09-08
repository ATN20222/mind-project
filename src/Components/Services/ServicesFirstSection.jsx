import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MediaProduction from '../../Assets/Images/Media Production.png';
import OnlineSolutions from '../../Assets/Images/Online Solutions.png';
import MarketingServices from '../../Assets/Images/Marketing Services.png';
import PublicRelationsServices from '../../Assets/Images/Public Relations Services.png';
import DubbingSubtitling from '../../Assets/Images/Dubbing Subtitling.png';
import Subtitling from '../../Assets/Images/Sub.png';
import ServicesNewCard from "./ServicesNewCard";
import SubServiceCard from "./SubServiceCard";


// Marketing images
import dDesign from '../../Assets/Images/MarketingService/2dDesign.svg';
import BothsMockups from '../../Assets/Images/MarketingService/BothsMockups.svg';
import Branding from '../../Assets/Images/MarketingService/Branding.svg';
import ConceptStore from '../../Assets/Images/MarketingService/ConceptStore.svg';
import GiveAways from '../../Assets/Images/MarketingService/GiveAways.svg';
import InternalBranding from '../../Assets/Images/MarketingService/InternalBranding.svg';
import OutDoors from '../../Assets/Images/MarketingService/OutDoors.svg';
import Photography from '../../Assets/Images/MarketingService/Photography.svg';
import PrintingPublishing from '../../Assets/Images/MarketingService/Printing & Publishing.svg';
import Comaigns from '../../Assets/Images/MarketingService/Comaigns.svg';
import SelectedSubServiceSection from "./SelectedSubServiceSection";


import MaindDesign from '../../Assets/Images/MarketingService/2DMainImge.jpg';
import MainBothsMockups from '../../Assets/Images/MarketingService/MockMainImage.jpg';
import MainBranding from '../../Assets/Images/MarketingService/BrandingMainImage.jpg';
import MainConceptStore from '../../Assets/Images/MarketingService/ConceptMainImage.jpg';
import MainGiveAways from '../../Assets/Images/MarketingService/GiveAwaysMainImage.jpg';
import MainInternalBranding from '../../Assets/Images/MarketingService/InternalMainImage.jpg';
import MainOutDoors from '../../Assets/Images/MarketingService/OutDoorMainImage.jpg';
import MainPhotography from '../../Assets/Images/MarketingService/PhotographyMainImage.jpg';
import MainPrintingPublishing from '../../Assets/Images/MarketingService/PrintingMainImage.png';
import MainComaigns from '../../Assets/Images/MarketingService/ComaignsMainImage.jpg';
// end marketing images
import WorkSampleImage from '../../Assets/Images/MarketingService/WorkSampleImage.jpg'
import WorkSampleImage2 from '../../Assets/Images/MarketingService/WorkSampleImage2.jpg'
import WorkSampleImage3 from '../../Assets/Images/MarketingService/WorkSampleImage3.jpg'
import WorkSampleImage4 from '../../Assets/Images/MarketingService/WorkSampleImage4.jpg'
import WorkSampleImage5 from '../../Assets/Images/MarketingService/WorkSampleImage5.jpg'
import WorkSampleImage6 from '../../Assets/Images/MarketingService/WorkSampleImage6.jpg'
import Gallery from "./Gallery";


// media production images
import MediaProductiondocumentary from '../../Assets/Images/Media Production/documentary.svg';
import MediaProductionInfographic from '../../Assets/Images/Media Production/Infographic.svg';
import MediaProductionPost from '../../Assets/Images/Media Production/Post.svg';
import MediaProductionTV from '../../Assets/Images/Media Production/TV.svg';
import MediaProductionMainDocumentry from '../../Assets/Images/Media Production/MainDocumentry.jfif';
import MediaProductionMainInfoGrphic from '../../Assets/Images/Media Production/MainInfoGrphic.jfif';
import MediaProductionMainPost from '../../Assets/Images/Media Production/MainPost.jfif';
import MediaProductionMainTV from '../../Assets/Images/Media Production/MainTV.jfif';


// online solutions images 
import OnlineSolutionsMobile from '../../Assets/Images/Online Solutions/Mobile.svg';
import OnlineSolutionsMobileMainImage from '../../Assets/Images/Online Solutions/MobileMainImage.png';
import OnlineSolutionsSocial from '../../Assets/Images/Online Solutions/Social.svg';
import OnlineSolutionsSocialMainImage from '../../Assets/Images/Online Solutions/SocialMainImage.png';
import OnlineSolutionsWeb from '../../Assets/Images/Online Solutions/Web.svg';
import OnlineSolutionsWebMainImage from '../../Assets/Images/Online Solutions/WebMainImage.png';


// other services image 
import DubbingMainImage from '../../Assets/Images/OtherServices/DubbingMainImage.jfif';


import GalleryPrinting_13_1_1 from '../../Assets/Images/Gallery/Printing/13-1-1.jpg';
import GalleryPrinting_2_3 from '../../Assets/Images/Gallery/Printing/2-3.jpg';
import GalleryPrinting_20_ from '../../Assets/Images/Gallery/Printing/20-.jpg';
import GalleryPrinting_3_ from '../../Assets/Images/Gallery/Printing/3-.jpg';
import GalleryPrinting_5_ from '../../Assets/Images/Gallery/Printing/5-.jpg';
import GalleryPrinting_8 from '../../Assets/Images/Gallery/Printing/8.jpg';
import GalleryPrintingfeed_HD_quality_113x75 from '../../Assets/Images/Gallery/Printing/feed-HD-quality-113x75.jpg';
import GalleryPrintingmagic_services from '../../Assets/Images/Gallery/Printing/magic-services.png';
import GalleryPrintingnew_hawai from '../../Assets/Images/Gallery/Printing/new-hawai.png';
import GalleryPrintingUntitled_10_1 from '../../Assets/Images/Gallery/Printing/Untitled-10-1.png';
import GalleryPrintingUntitled_7_2 from '../../Assets/Images/Gallery/Printing/Untitled-7-2.png';
import GalleryPrintingvodafone from '../../Assets/Images/Gallery/Printing/vodafone.png';


import GalleryBrandingepfa_2 from '../../Assets/Images/Gallery/Branding/epfa-2.jpg';
import GalleryBrandingepfa from '../../Assets/Images/Gallery/Branding/epfa.jpg';
import GalleryBrandingUntitled_1_3 from '../../Assets/Images/Gallery/Branding/Untitled-1-3.png';
import GalleryBrandingUntitled_2_1 from '../../Assets/Images/Gallery/Branding/Untitled-2-1.png';
import GalleryBrandingUntitled_3_2 from '../../Assets/Images/Gallery/Branding/Untitled-3-2.png';
import GalleryBrandingUntitled_4_2 from '../../Assets/Images/Gallery/Branding/Untitled-4-2.png';
import GalleryBrandingUntitled_5_1 from '../../Assets/Images/Gallery/Branding/Untitled-5-1.png';
import GalleryBrandingUntitled_6_2 from '../../Assets/Images/Gallery/Branding/Untitled-6-2.png';
import GalleryBrandingUntitled_7_3 from '../../Assets/Images/Gallery/Branding/Untitled-7-3.png';


import Gallery2D3D_1_2 from '../../Assets/Images/Gallery/2D&3D/1-2.png';
import Gallery2D3D_2_4 from '../../Assets/Images/Gallery/2D&3D/2-4.jpg';
import Gallery2D3D_3_1 from '../../Assets/Images/Gallery/2D&3D/3-1.png';
import Gallery2D3D_33_1_1 from '../../Assets/Images/Gallery/2D&3D/33-1-1.jpg';
import Gallery2D3D_54_1_1 from '../../Assets/Images/Gallery/2D&3D/54-1-1.jpg';
import Gallery2D3D_9_1 from '../../Assets/Images/Gallery/2D&3D/9-1.png';
import Gallery2D3Dchracter_mind from '../../Assets/Images/Gallery/2D&3D/chracter-mind.png';
import Gallery2D3DGoodcals_Booth_0 from '../../Assets/Images/Gallery/2D&3D/Goodcals-Booth-0.png';
import Gallery2D3DGoodcals_Booth_04 from '../../Assets/Images/Gallery/2D&3D/Goodcals-Booth-04.png';
import Gallery2D3DIMOLA_0 from '../../Assets/Images/Gallery/2D&3D/IMOLA-0.png';
import Gallery2D3Dredcon_1 from '../../Assets/Images/Gallery/2D&3D/redcon-1.png';
import Gallery2D3Dstoryboard from '../../Assets/Images/Gallery/2D&3D/storyboard.png';
import Gallery2D3Dstoryboard3 from '../../Assets/Images/Gallery/2D&3D/storyboard3.png';
import Gallery2D3Dvito_2 from '../../Assets/Images/Gallery/2D&3D/vito-2.png';

import InternalBranding_5_01 from '../../Assets/Images/Gallery/InternalBranding/5-01.jpg';
import InternalBrandingAdmired_Simulation_1 from '../../Assets/Images/Gallery/InternalBranding/Admired-Simulation-1.jpg';
import InternalBrandingBusiness_center_1_1 from '../../Assets/Images/Gallery/InternalBranding/Business-center-1-1.jpg';
import InternalBrandingclarkson_01 from '../../Assets/Images/Gallery/InternalBranding/clarkson-01.jpg';
import InternalBrandingclarkson_2_01 from '../../Assets/Images/Gallery/InternalBranding/clarkson-2-01.jpg';
import InternalBrandingContract_room_simulation_1 from '../../Assets/Images/Gallery/InternalBranding/Contract-room-simulation-1.jpg';
import InternalBrandingNPS_Simulation_1 from '../../Assets/Images/Gallery/InternalBranding/NPS-Simulation-1.jpg';


import Outdoors_577991_50c5do from '../../Assets/Images/Gallery/Outdoors/577991-50c5do.jpg';
import Outdoors_9021060_h3kf_7b_visTEJRAodVB32AgPWhRp7ldR8S_cQIWFDQ from '../../Assets/Images/Gallery/Outdoors/9021060_h3kf_7b_visTEJRAodVB32AgPWhRp7ldR8S-cQIWFDQ.jpg';
import Outdoorsmansoria_vrw from '../../Assets/Images/Gallery/Outdoors/mansoria-vrw.jpg';
import OutdoorsOutdoors from '../../Assets/Images/Gallery/Outdoors/Outdoors.jpg';
import OutdoorsToyota_3D_Billboard_New_Crolla_2014_Night from '../../Assets/Images/Gallery/Outdoors/Toyota-3D-Billboard-New-Crolla-2014-Night.jpg';
import OutdoorsToyota_3D_Billboard_Presentation_Day from '../../Assets/Images/Gallery/Outdoors/Toyota-3D-Billboard-Presentation-Day.jpg';
import OutdoorsUntitled_3 from '../../Assets/Images/Gallery/Outdoors/Untitled-3.png';
import OutdoorsUntitled_4 from '../../Assets/Images/Gallery/Outdoors/Untitled-4.png';
import OutdoorsUntitled_6 from '../../Assets/Images/Gallery/Outdoors/Untitled-6.png';
import OutdoorsUntitled_7 from '../../Assets/Images/Gallery/Outdoors/Untitled-7.png';

import Photography_1_1 from '../../Assets/Images/Gallery/Photography/1-1.png';
import Photography_10_1 from '../../Assets/Images/Gallery/Photography/10-1.png';
import Photography_2 from '../../Assets/Images/Gallery/Photography/2.png';
import Photography_3 from '../../Assets/Images/Gallery/Photography/3.png';
import Photography_4 from '../../Assets/Images/Gallery/Photography/4.png';
import Photography_5 from '../../Assets/Images/Gallery/Photography/5.png';
import Photography_7 from '../../Assets/Images/Gallery/Photography/7.png';
import Photography_8 from '../../Assets/Images/Gallery/Photography/8.png';
import Photography_9 from '../../Assets/Images/Gallery/Photography/9.png';
import PhotographyIMG_74 from '../../Assets/Images/Gallery/Photography/IMG-74.jpg';
import PhotographyIMG_0003 from '../../Assets/Images/Gallery/Photography/IMG_0003.jpg';
import PhotographyIMG_0004 from '../../Assets/Images/Gallery/Photography/IMG_0004.jpg';
import PhotographyIMG_0011 from '../../Assets/Images/Gallery/Photography/IMG_0011.jpg';

import MockupsUntitled_1_1 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-1-1.png';
import MockupsUntitled_10 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-10.png';
import MockupsUntitled_11 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-11.png';
import MockupsUntitled_12 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-12.png';
import MockupsUntitled_13 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-13.png';
import MockupsUntitled_14 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-14.png';
import MockupsUntitled_15 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-15.png';
import MockupsUntitled_2 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-2.png';
import MockupsUntitled_3_1 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-3-1.png';
import MockupsUntitled_4_1 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-4-1.png';
import MockupsUntitled_5 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-5.png';
import MockupsUntitled_6_1 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-6-1.png';
import MockupsUntitled_7_1 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-7-1.png';
import MockupsUntitled_8 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-8.png';
import MockupsUntitled_9 from '../../Assets/Images/Gallery/Booths & Mockups/Untitled-9.png';


import Giveaways_2339754_121x75 from '../../Assets/Images/Gallery/Giveaways/2339754-121x75.jpg';
import Giveaways_5_1_1 from '../../Assets/Images/Gallery/Giveaways/5-1-1.jpg';
import Giveaways_8_1 from '../../Assets/Images/Gallery/Giveaways/8-1.jpg';
import GiveawaysGiveaways_3_2_1 from '../../Assets/Images/Gallery/Giveaways/Giveaways-3-2-1.jpg';
import GiveawaysGiveaways from '../../Assets/Images/Gallery/Giveaways/Giveaways.jpg';
import GiveawaysGiveaways2_1 from '../../Assets/Images/Gallery/Giveaways/Giveaways2-1.jpg';
import GiveawaysUntitled_1_2 from '../../Assets/Images/Gallery/Giveaways/Untitled-1-2.png';


import PublicRelations_595 from '../../Assets/Images/Gallery/PublicRelations/595.png';
import PublicRelations_95 from '../../Assets/Images/Gallery/PublicRelations/95.png';
import PublicRelationsasd from '../../Assets/Images/Gallery/PublicRelations/asd.png';
import PublicRelationsllp from '../../Assets/Images/Gallery/PublicRelations/llp.png';
import PublicRelationsLOGOs_46_1 from '../../Assets/Images/Gallery/PublicRelations/LOGOs-46-1.png';
import PublicRelationsunnamed_1 from '../../Assets/Images/Gallery/PublicRelations/unnamed-1.png';


import Web_20e0f9da_1459_4a71_ab06_715e436e9684 from '../../Assets/Images/Gallery/Web/20e0f9da-1459-4a71-ab06-715e436e9684.jpg';
import Web_9cf8be28_d1ba_4cac_ba7b_df176360a8fc from '../../Assets/Images/Gallery/Web/9cf8be28-d1ba-4cac-ba7b-df176360a8fc.jpg';
import Webair1travel_website_design_development_waleedsayed_scaled from '../../Assets/Images/Gallery/Web/air1travel-website-design-development-waleedsayed-scaled.jpg';
import Webappmedic_website_design from '../../Assets/Images/Gallery/Web/appmedic-website-design.jpg';
import Webarab from '../../Assets/Images/Gallery/Web/arab.jpg';
import Webargtravel_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/argtravel-website-design-waleedsayed.jpg';
import Webboxstores_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/boxstores-website-design-waleedsayed.jpg';
import Webcosmetics_shop_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/cosmetics-shop-website-design-waleedsayed.jpg';
import Webdecoration_home_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/decoration-home-website-design-waleedsayed.jpg';
import Webfitnessway_waleed_sayed from '../../Assets/Images/Gallery/Web/fitnessway-waleed-sayed.jpg';
import Webfreelanex_webdesigndev_waleed_sayed_scaled from '../../Assets/Images/Gallery/Web/freelanex-webdesigndev-waleed-sayed-scaled.jpg';
import Webhair_care_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/hair-care-website-design-waleedsayed.jpg';
import Webhr_website_design_waleedsayed_scaled from '../../Assets/Images/Gallery/Web/hr-website-design-waleedsayed-scaled.jpg';
import Webismile_dental_webdesigndev_waleedsayed_scaled from '../../Assets/Images/Gallery/Web/ismile-dental-webdesigndev-waleedsayed-scaled.jpg';
import Webkey from '../../Assets/Images/Gallery/Web/key.jpg';
import Webkiddy from '../../Assets/Images/Gallery/Web/kiddy.jpg';
import Webkids_fashion_website_design_waleed_sayed from '../../Assets/Images/Gallery/Web/kids-fashion-website-design-waleed-sayed.jpg';
import Webpetrol_energy_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/petrol-energy-website-design-waleedsayed.jpg';
import Webriadco from '../../Assets/Images/Gallery/Web/riadco.jpg';
import Websecurity_cam_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/security-cam-website-design-waleedsayed.jpg';
import Webstart_website_design_waleedsayed from '../../Assets/Images/Gallery/Web/start-website-design-waleedsayed.jpg';
import Websunl_1 from '../../Assets/Images/Gallery/Web/sunl-1.jpg';
import Webtailor_website_design_waleedsayed2 from '../../Assets/Images/Gallery/Web/tailor-website-design-waleedsayed2.jpg';


import SocialMedia_2_5 from '../../Assets/Images/Gallery/SocialMedia/2-5.jpg';
import SocialMedia_84_D8A7D984D8A5D8ACD8AAD985D8A7D8B9D98A_D8A7D984D8ADD982D98AD982D98A_146x146 from '../../Assets/Images/Gallery/SocialMedia/84-D8A7D984D8A5D8ACD8AAD985D8A7D8B9D98A-D8A7D984D8ADD982D98AD982D98A-146x146.png';
import SocialMediaAbo_Tarek from '../../Assets/Images/Gallery/SocialMedia/Abo-Tarek.png';
import SocialMediaapp_1 from '../../Assets/Images/Gallery/SocialMedia/app-1.jpg';
import SocialMediaapp_4 from '../../Assets/Images/Gallery/SocialMedia/app-4.jpg';
import SocialMediaapp_66 from '../../Assets/Images/Gallery/SocialMedia/app-66.jpg';
import SocialMediaD8A5D8ADD8ACD8B2_D985D984D8B9D8A8D983 from '../../Assets/Images/Gallery/SocialMedia/D8A5D8ADD8ACD8B2-D985D984D8B9D8A8D983.png';
import SocialMediaD8A7D984D8AAD8B3D988D98AD982_D8B2D985D8A7D986 from '../../Assets/Images/Gallery/SocialMedia/D8A7D984D8AAD8B3D988D98AD982-D8B2D985D8A7D986.png';
import SocialMediaD8A7D984D8AAD988D8A7D8B5D984_D8A7D984D8A5D8ACD8AAD985D8A7D8B9D98A_D8A7D984D8ADD982D98AD982D98A from '../../Assets/Images/Gallery/SocialMedia/D8A7D984D8AAD988D8A7D8B5D984-D8A7D984D8A5D8ACD8AAD985D8A7D8B9D98A-D8A7D984D8ADD982D98AD982D98A.png';
import SocialMediaD8A7D984D8ACD987D8A7D8B2_D8A7D984D981D986D98A from '../../Assets/Images/Gallery/SocialMedia/D8A7D984D8ACD987D8A7D8B2-D8A7D984D981D986D98A.png';
import SocialMediaD8A7D984D8B3D983D8B1D98A_2 from '../../Assets/Images/Gallery/SocialMedia/D8A7D984D8B3D983D8B1D98A-2.png';
import SocialMediaD8ACD8A8D8B1D8A7D986_D8AED984D98AD984_D8ACD8A8D8B1D8A7D986 from '../../Assets/Images/Gallery/SocialMedia/D8ACD8A8D8B1D8A7D986-D8AED984D98AD984-D8ACD8A8D8B1D8A7D986.jpg';
import SocialMediaD8AED984D8B7D8A9_D8A7D984D983D8B4D8B1D98A_D981D986 from '../../Assets/Images/Gallery/SocialMedia/D8AED984D8B7D8A9-D8A7D984D983D8B4D8B1D98A-D981D986.png';
import SocialMediaD8AED984D98AD983_D981D98A_D8ACD98AD8A8_D8A7D984D8B9D985D98AD984 from '../../Assets/Images/Gallery/SocialMedia/D8AED984D98AD983-D981D98A-D8ACD98AD8A8-D8A7D984D8B9D985D98AD984.jpg';
import SocialMediaD8B4D983D984_D8ACD8AFD98AD8AF from '../../Assets/Images/Gallery/SocialMedia/D8B4D983D984-D8ACD8AFD98AD8AF.png';
import SocialMediaD8B9D98AD8A7D8AFD8A7D8AAD8A7_D8AED8A7D8B1D8ACD98AD987 from '../../Assets/Images/Gallery/SocialMedia/D8B9D98AD8A7D8AFD8A7D8AAD8A7-D8AED8A7D8B1D8ACD98AD987.png';
import SocialMediaD983D8A8D8B1_D985D8A8D98AD8B9D8A7D8AAD983_D985D8B9D8A7D986D8A7 from '../../Assets/Images/Gallery/SocialMedia/D983D8A8D8B1-D985D8A8D98AD8B9D8A7D8AAD983-D985D8B9D8A7D986D8A7.png';
import SocialMediaD985D8B4_D987D8AAD982D8AFD8B1_D8AAD988D982D981 from '../../Assets/Images/Gallery/SocialMedia/D985D8B4-D987D8AAD982D8AFD8B1-D8AAD988D982D981.png';
import SocialMediaD985D982D8A7D8AFD98AD8B1_D8A7D984D8AAD8B7D8A8D98AD982_D8B9D984D98AD986D8A7 from '../../Assets/Images/Gallery/SocialMedia/D985D982D8A7D8AFD98AD8B1-D8A7D984D8AAD8B7D8A8D98AD982-D8B9D984D98AD986D8A7.png';
import SocialMediahelpfultips_1_22_12_2019_ from '../../Assets/Images/Gallery/SocialMedia/helpfultips-1-22-12-2019..jpg';
import SocialMediahima_2 from '../../Assets/Images/Gallery/SocialMedia/hima-2.jpg';
import SocialMedialO8Z_2 from '../../Assets/Images/Gallery/SocialMedia/lO8Z-2.png';
import SocialMediamind_all from '../../Assets/Images/Gallery/SocialMedia/mind-all.png';
import SocialMediamindp from '../../Assets/Images/Gallery/SocialMedia/mindp.png';
import SocialMediaNSC_camera_post from '../../Assets/Images/Gallery/SocialMedia/NSC-camera-post.png';
import SocialMediaNSC_esc from '../../Assets/Images/Gallery/SocialMedia/NSC-esc.png';
import SocialMediapost_01 from '../../Assets/Images/Gallery/SocialMedia/post-01.jpg';
import SocialMediapost_3 from '../../Assets/Images/Gallery/SocialMedia/post-3.jpg';
import SocialMediashopping_now from '../../Assets/Images/Gallery/SocialMedia/shopping-now.jpg';
import SocialMediaStar_Dust_fb from '../../Assets/Images/Gallery/SocialMedia/Star-Dust-fb.png';
import SocialMediatgmoa from '../../Assets/Images/Gallery/SocialMedia/tgmoa.jpg';
import SocialMediaUntitled_1_02 from '../../Assets/Images/Gallery/SocialMedia/Untitled-1-02.jpg';


import Mobile_179eb52a_40de_4b47_b067_4a5605d7193d from '../../Assets/Images/Gallery/Mobile/179eb52a-40de-4b47-b067-4a5605d7193d.jpg';
import Mobile_31b748c6_24a2_4fa2_84de_958d9a1d7005 from '../../Assets/Images/Gallery/Mobile/31b748c6-24a2-4fa2-84de-958d9a1d7005.jpg';
import Mobile_40082c39_dd51_4ed5_be12_b954c3895f95 from '../../Assets/Images/Gallery/Mobile/40082c39-dd51-4ed5-be12-b954c3895f95.jpg';
import Mobile_880402a8_37c2_485c_a040_3975799c96ac from '../../Assets/Images/Gallery/Mobile/880402a8-37c2-485c-a040-3975799c96ac.jpg';
import Mobile_90955f52_bf9d_417c_b1a7_80f101f57e4a from '../../Assets/Images/Gallery/Mobile/90955f52-bf9d-417c-b1a7-80f101f57e4a.jpg';
import Mobilec6f560ab_981a_499b_9a2c_fcd6ff048004 from '../../Assets/Images/Gallery/Mobile/c6f560ab-981a-499b-9a2c-fcd6ff048004.jpg';
import Mobilecb07ce9d_1ce9_4ce7_8956_84fe75cb6ad4 from '../../Assets/Images/Gallery/Mobile/cb07ce9d-1ce9-4ce7-8956-84fe75cb6ad4.jpg';
import Mobilee839dc51_1c11_4fa4_9e01_ca8fca7dd11b from '../../Assets/Images/Gallery/Mobile/e839dc51-1c11-4fa4-9e01-ca8fca7dd11b.jpg';
import Mobilefb2a2922_f5c1_4eb0_b04e_9db8a83e74b8 from '../../Assets/Images/Gallery/Mobile/fb2a2922-f5c1-4eb0-b04e-9db8a83e74b8.jpg';
import Mobileffba3d35_b853_4396_a3c5_8fd16360e6ba from '../../Assets/Images/Gallery/Mobile/ffba3d35-b853-4396-a3c5-8fd16360e6ba.jpg';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 5
    },
    ipad: {
        breakpoint: { max: 1300, min: 990 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 990, min: 768 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 768, min: 446 },
        items: 2
    },
    smobile: {
        breakpoint: { max: 446, min: 350 },
        items: 1
    },
    ssmobile: {
        breakpoint: { max: 350, min: 328 },
        items: 1
    },
    xsmobile: {
        breakpoint: { max: 328, min: 0 },
        items: 1
    }
};


const responsive2 = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 5
    },
    ipad: {
        breakpoint: { max: 1300, min: 990 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 990, min: 768 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 768, min: 576 },
        items: 3
    },
    smobile: {
        breakpoint: { max: 576, min: 350 },
        items: 2
    },
    ssmobile: {
        breakpoint: { max: 350, min: 328 },
        items: 2
    },
    xsmobile: {
        breakpoint: { max: 328, min: 0 },
        items: 2
    }
};

const CustomPrevButton = ({ onClick, Class }) => (
    <button className={`Center CustomPrevBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </button>
);

const CustomNextButton = ({ onClick, Class }) => (
    <button className={`Center CustomNextBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
    </button>
);

const ServicesFirstSection = () => {
    const Services = [
        { id: 1, icon: MediaProduction, Header: "Media Production" },
        { id: 2, icon: OnlineSolutions, Header: "Online Solutions" },
        // { id: 3, icon: Subtitling, Header: "Dubbing & Subtitling" },
        { id: 4, icon: DubbingSubtitling, Header: "Dubbing & Subtitling" },
        { id: 5, icon: PublicRelationsServices, Header: "Public Relations Services" },
        { id: 6, icon: MarketingServices, Header: "Marketing Services" }
    ];
    const SubServices = [
        {   
            id: 1, 
            title:"2D & 3D Design",       
            description:"Our team have been producing high quality commercial illustrations? motion graphics and character design and regularly work with some of the largest advertising agencies and brands in the world. We can manage every aspect of your project and view each job with equal importance? no matter how small. we think attention to detail and our ability to combine cutting edge ?3D illustration.", 
            MainImage:MaindDesign, 
            image: dDesign, 
            serviceId: 6 ,
            Gallery:[
                Gallery2D3D_1_2,
                Gallery2D3D_2_4,
                Gallery2D3D_3_1,
                Gallery2D3D_33_1_1,
                Gallery2D3D_54_1_1,
                Gallery2D3D_9_1,
                Gallery2D3Dchracter_mind,
                Gallery2D3DGoodcals_Booth_0,
                Gallery2D3DGoodcals_Booth_04,
                Gallery2D3DIMOLA_0,
                Gallery2D3Dredcon_1,
                Gallery2D3Dstoryboard,
                Gallery2D3Dstoryboard3,
                Gallery2D3Dvito_2,
            ]
        },
        {   
            id: 2, 
            title:"Booths & Mockups",     
            description:"We provide a complete design, production and management service. Our aim is to provide world-class exhibition solutions and maximize the effectiveness on the fairground. Our experience to work with high quality specifications, using high skilled workforce, excellent design development, expertise with careful attention to detail.", 
            MainImage:MainBothsMockups, 
            image: BothsMockups, 
            serviceId: 6 ,
            Gallery:[
                MockupsUntitled_1_1,
                MockupsUntitled_10,
                MockupsUntitled_11,
                MockupsUntitled_12,
                MockupsUntitled_13,
                MockupsUntitled_14,
                MockupsUntitled_15,
                MockupsUntitled_2,
                MockupsUntitled_3_1,
                MockupsUntitled_4_1,
                MockupsUntitled_5,
                MockupsUntitled_6_1,
                MockupsUntitled_7_1,
                MockupsUntitled_8,
                MockupsUntitled_9,
            ]


        },
        {   
            id: 3, 
            title:"Branding",             
            description:"A brand is the idea or image of a specific product or service that consumers connect with? by identifying the name? logo? slogan? or design of the company who owns the idea or image.", 
            MainImage:MainBranding, 
            image: Branding, 
            serviceId: 6 ,
            Gallery:[
                GalleryBrandingepfa_2,
                GalleryBrandingepfa,
                GalleryBrandingUntitled_1_3,
                GalleryBrandingUntitled_2_1,
                GalleryBrandingUntitled_3_2,
                GalleryBrandingUntitled_4_2,
                GalleryBrandingUntitled_5_1,
                GalleryBrandingUntitled_6_2,
                GalleryBrandingUntitled_7_3,
            ]
        },
        {   
            id: 4, 
            title:'Concept Stores',       
            description:"A concept store offers shoppers multiple types of items with one centralized theme. All the products in a concept store add to the theme of the establishment, even though they might be different categories altogether. For example, shoes, shirts and furniture in a beach concept store contribute to the theme.",
             MainImage:MainConceptStore, 
             image: ConceptStore, 
             serviceId: 6 ,
             Gallery:[]
        },
        {   
            id: 5, 
            title:'Giveaways',            
            description:"We will help your company standout by providing you with our new giveaways ideas in stock or we will tailor the giveaways that will suit your company branding, wither you have an exhibition, marketing campaign or an activation, we will provide you with the giveaways you want.", 
            MainImage:MainGiveAways, 
            image: GiveAways, 
            serviceId: 6,
            Gallery:[
                Giveaways_2339754_121x75,
                Giveaways_5_1_1,
                Giveaways_8_1,
                GiveawaysGiveaways_3_2_1,
                GiveawaysGiveaways,
                GiveawaysGiveaways2_1,
                GiveawaysUntitled_1_2,
            ]
        },
        {   
            id: 6, 
            title:"Internal Branding",    
            description:"Internal branding is a corporate philosophy that focuses on bringing the company’s core culture, identity, and premise to its employees as well as its consumers, and usually looks to make workers at all levels “ambassadors” or true representatives of the company and its ideals. Most people are familiar with external branding, which can include things like logos, slogans, and the general “feel” of a product or company.", 
            MainImage:MainInternalBranding, 
            image: InternalBranding, 
            serviceId: 6,
            Gallery:[
                InternalBranding_5_01,
                InternalBrandingAdmired_Simulation_1,
                InternalBrandingBusiness_center_1_1,
                InternalBrandingclarkson_01,
                InternalBrandingclarkson_2_01,
                InternalBrandingContract_room_simulation_1,
                InternalBrandingNPS_Simulation_1,
            ]
        },
        {   
            id: 7,
            title:"Outdoors & Signage",    
            description:"MIND encompasses the vast array of outdoor media available to marketers and advertisers, strategically planned and positioned to reach the right target audience in the right place at the right time, when they are outdoors. Small, large and interactive outdoor advertising formats offer high impact solutions to reach your audience demographicly.",
            MainImage:MainOutDoors, 
            image: OutDoors,
            serviceId: 6 ,
            Gallery:[
                Outdoors_577991_50c5do,
                Outdoors_9021060_h3kf_7b_visTEJRAodVB32AgPWhRp7ldR8S_cQIWFDQ,
                Outdoorsmansoria_vrw,
                OutdoorsOutdoors,
                OutdoorsToyota_3D_Billboard_New_Crolla_2014_Night,
                OutdoorsToyota_3D_Billboard_Presentation_Day,
                OutdoorsUntitled_3,
                OutdoorsUntitled_4,
                OutdoorsUntitled_6,
                OutdoorsUntitled_7,
            ]
        },
        {   
            id: 8, 
            title:"Photography",          
            description:"When we select our photographers we ensure they have the skills to be outstanding ambassadors for your organization.They know when to add value to an event and when to fade into the background. We select our photographers based not only on their technical skills and adherence to detail but also upon their ability to positively interact with your staff and clients.", 
            MainImage:MainPhotography, 
            image: Photography, 
            serviceId: 6 ,
            Gallery:[
                Photography_1_1,
                Photography_10_1,
                Photography_2,
                Photography_3,
                Photography_4,
                Photography_5,
                Photography_7,
                Photography_8,
                Photography_9,
                PhotographyIMG_74,
                PhotographyIMG_0003,
                PhotographyIMG_0004,
                PhotographyIMG_0011,
            ]
        },
        {   
            id: 9,
            title:"Printing & Publishing", 
            description:"We aim to deliver your ideas into reality as you experience the luxury of high quality printed materials and reliable staff with affordable prices.",
            MainImage:MainPrintingPublishing, 
            image: PrintingPublishing, 
            serviceId: 6 ,
            
            Gallery:[
                GalleryPrinting_13_1_1,
                GalleryPrinting_2_3,
                GalleryPrinting_20_,
                GalleryPrinting_3_,
                GalleryPrinting_5_,
                GalleryPrinting_8,
                GalleryPrintingfeed_HD_quality_113x75,
                GalleryPrintingmagic_services,
                GalleryPrintingnew_hawai,
                GalleryPrintingUntitled_10_1,
                GalleryPrintingUntitled_7_2,
                GalleryPrintingvodafone,
            ],
            AfterShowText:'At MIND we will implement quality procedure at every stage.From the inception of design to delivery, making sure your brand and ideas will be red and understood.',
        },
        {   
            id: 10,
            title:"Marketing Campaigns",  
            description:"Specific activities designed to promote a product, service or business. A marketing campaign is a coordinated series of steps that can include promotion of a product through different mediums (television, radio, print, online, outdoors…ext.) using a variety of different types of advertisements. The campaign doesn’t have to rely solely on advertising, and can also include demonstrations, word of mouth and other interactive techniques. Marketing campaigns can be designed with different ends in mind, including building a brand image, introducing a new product, increasing sales of a product already in the market, or even reducing the impact of negative news.", 
            MainImage:MainComaigns, 
            image: Comaigns, 
            serviceId: 6 ,
            Gallery:[]
        },
        {   
            id: 11, 
            title:"Info-graphic Videos",       
            description:"Info-graphics are the smart new digital way of communicating ideas, data and knowledge – quickly and efficiently. They explain often complex information using graphics and highly distilled copy.", 
            MainImage:MediaProductionMainInfoGrphic, 
            image: MediaProductionInfographic, 
            serviceId: 1 ,
            Gallery:[]
        },
        {   
            id: 12, 
            title:"Documentary",       
            description:"Our crew, and our huge network of the film making talents are ready to film and shoot any events, reality stories, news reports, and corporate documentaries. Our long experience in shooting huge projects all around the MENA region makes us one of the best Media companies that you can rely on.", 
            MainImage:MediaProductionMainDocumentry , 
            image: MediaProductiondocumentary, 
            serviceId: 1 ,
            Gallery:[]
        },
        {   
            id: 13,
            title:"TV & Radio Ads",       
            description:"We are able to offer TV commercials and Digital promo videos that give our clients instant credibility at the lowest production cost.", 
            MainImage:MediaProductionMainTV, 
            image: MediaProductionTV, 
            serviceId: 1 ,
            Gallery:[]
        },
        {   
            id: 14,
            title:"Post Production",       
            description:"Our experienced team, and latest equipment will enhance your productions with our services of: Editing ,Mixing and Color Correction", 
            MainImage:MediaProductionMainPost, 
            image: MediaProductionPost, 
            serviceId: 1 ,
            Gallery:[]
        },
        {   
            id: 15,
            title:"Website Development",       
            description:"Exceptional web design keeps users engaged with appealing aesthetics and emotional interaction. Your website, more than a static brand, speaks universally. Our expert team understands web development's nuances, creating outstanding, user-friendly websites with simple communication. We combine the latest technologies with bespoke techniques to build resilient websites and bring your vision to life.",
            MainImage:OnlineSolutionsWebMainImage, 
            image: OnlineSolutionsWeb, 
            serviceId: 2,
            Gallery:[
                Web_20e0f9da_1459_4a71_ab06_715e436e9684,
                Web_9cf8be28_d1ba_4cac_ba7b_df176360a8fc,
                Webair1travel_website_design_development_waleedsayed_scaled,
                Webappmedic_website_design,
                Webarab,
                Webargtravel_website_design_waleedsayed,
                Webboxstores_website_design_waleedsayed,
                Webcosmetics_shop_website_design_waleedsayed,
                Webdecoration_home_website_design_waleedsayed,
                Webfitnessway_waleed_sayed,
                Webfreelanex_webdesigndev_waleed_sayed_scaled,
                Webhair_care_website_design_waleedsayed,
                Webhr_website_design_waleedsayed_scaled,
                Webismile_dental_webdesigndev_waleedsayed_scaled,
                Webkey,
                Webkiddy,
                Webkids_fashion_website_design_waleed_sayed,
                Webpetrol_energy_website_design_waleedsayed,
                Webriadco,
                Websecurity_cam_website_design_waleedsayed,
                Webstart_website_design_waleedsayed,
                Websunl_1,
                Webtailor_website_design_waleedsayed2,
            ]
        },
        {   
            id: 16,
            title:"Mobile Applications",       
            description:"We can create a wide range of mobile apps based on your requirements. Our experienced programmers have the acumen to come up with fresh ideas and provide out of the box solutions to suit your needs.",
            MainImage:OnlineSolutionsMobileMainImage, 
            image: OnlineSolutionsMobile, 
            serviceId: 2,
            Gallery:[
                Mobile_179eb52a_40de_4b47_b067_4a5605d7193d,
                Mobile_31b748c6_24a2_4fa2_84de_958d9a1d7005,
                Mobile_40082c39_dd51_4ed5_be12_b954c3895f95,
                Mobile_880402a8_37c2_485c_a040_3975799c96ac,
                Mobile_90955f52_bf9d_417c_b1a7_80f101f57e4a,
                Mobilec6f560ab_981a_499b_9a2c_fcd6ff048004,
                Mobilecb07ce9d_1ce9_4ce7_8956_84fe75cb6ad4,
                Mobilee839dc51_1c11_4fa4_9e01_ca8fca7dd11b,
                Mobilefb2a2922_f5c1_4eb0_b04e_9db8a83e74b8,
                Mobileffba3d35_b853_4396_a3c5_8fd16360e6ba,
            ]
        },
        {   
            id: 17,
            title:"Social Media Management",       
            description:"We are capable of creating and managing your social media to add value to your business and customers base. Our team has a selection of the most creative, ambitious and hardworking staff and they all have the same goal to satisfy our clients. We work across all known platforms (Facebook, YouTube, Twitter, Instagram, LinkedIn,..etc)",
            MainImage:OnlineSolutionsSocialMainImage, 
            image: OnlineSolutionsSocial, 
            serviceId: 2,
            Gallery:[
                SocialMedia_2_5,
                SocialMediaAbo_Tarek,
                SocialMediaapp_1,
                SocialMediaapp_4,
                SocialMediaapp_66,
                SocialMediaD8A5D8ADD8ACD8B2_D985D984D8B9D8A8D983,
                SocialMediaD8A7D984D8AAD8B3D988D98AD982_D8B2D985D8A7D986,
                SocialMediaD8A7D984D8AAD988D8A7D8B5D984_D8A7D984D8A5D8ACD8AAD985D8A7D8B9D98A_D8A7D984D8ADD982D98AD982D98A,
                SocialMediaD8A7D984D8ACD987D8A7D8B2_D8A7D984D981D986D98A,
                SocialMediaD8A7D984D8B3D983D8B1D98A_2,
                SocialMediaD8ACD8A8D8B1D8A7D986_D8AED984D98AD984_D8ACD8A8D8B1D8A7D986,
                SocialMedia_84_D8A7D984D8A5D8ACD8AAD985D8A7D8B9D98A_D8A7D984D8ADD982D98AD982D98A_146x146,
                SocialMediaD8AED984D8B7D8A9_D8A7D984D983D8B4D8B1D98A_D981D986,
                SocialMediaD8AED984D98AD983_D981D98A_D8ACD98AD8A8_D8A7D984D8B9D985D98AD984,
                SocialMediaD8B4D983D984_D8ACD8AFD98AD8AF,
                SocialMediaD8B9D98AD8A7D8AFD8A7D8AAD8A7_D8AED8A7D8B1D8ACD98AD987,
                SocialMediaD983D8A8D8B1_D985D8A8D98AD8B9D8A7D8AAD983_D985D8B9D8A7D986D8A7,
                SocialMediaD985D8B4_D987D8AAD982D8AFD8B1_D8AAD988D982D981,
                SocialMediaD985D982D8A7D8AFD98AD8B1_D8A7D984D8AAD8B7D8A8D98AD982_D8B9D984D98AD986D8A7,
                SocialMediahelpfultips_1_22_12_2019_,
                SocialMediahima_2,
                SocialMedialO8Z_2,
                SocialMediamind_all,
                SocialMediamindp,
                SocialMediaNSC_camera_post,
                SocialMediaNSC_esc,
                SocialMediapost_01,
                SocialMediapost_3,
                SocialMediashopping_now,
                SocialMediaStar_Dust_fb,
                SocialMediatgmoa,
                SocialMediaUntitled_1_02,
            ]
        },
        {   
            id: 18,
            title:"Dubbing & Subtitling",       
            description:"We have the latest technology available for professional film dubbing for entertainment, educational & corporate industries. We can lip-synch your project into Arabic, Asian & European languages. Each project is done by native speakers who work together to capture both the language & culture of the country for which the program is being dubbed.",
            MainImage:DubbingMainImage, 
            image: DubbingMainImage, 
            serviceId: 4,
            Gallery:[]
        },
        {   
            id: 19,
            title:"Public Relations Services",       
            description:"There are many roles that define Public Relations in Egypt, many think it is only a business to business communication plan, however, Public Relations is much more interrogated in our everyday lives and is one of the most important tools that we unknowingly use every single day.",
            MainImage:DubbingMainImage, 
            image: DubbingMainImage, 
            serviceId: 5,
            Gallery:[
                PublicRelations_595,
                PublicRelations_95,
                PublicRelationsasd,
                PublicRelationsllp,
                PublicRelationsLOGOs_46_1,
                PublicRelationsunnamed_1,
            ]
            
        },
    ]
    const [selectedService, setSelectedService] = useState(1);
    const [selectedSubService, setSelectedSubService] = useState(11);
    const [selectedSubServiceData, setSelectedSubServiceData] = useState(SubServices.filter(i=>i.id===11)[0]);

    const handleOnSelect = (id) => {
        setSelectedService(id);
        setSelectedService(id);
        const subs = SubServices.filter(i => i.serviceId === id);
        if (subs.length > 0) {
            setSelectedSubService(subs[0].id);
            setSelectedSubServiceData(subs[0]);

        } else {
            setSelectedSubService(null);
        }
    };
    const handleSelectSubService = (id)=>{
        setSelectedSubService(id);
        const sub = SubServices.find(i => i.id === id);
        
        setSelectedSubServiceData(sub);
    }


    return (
        <section className="ServicesFirstSection">
            <div className="FirstServicesSectionHeader">
                <div className="ServicesHeadingContainer">
                    <span className="HeaderServices">Our Services</span>
                    <div className="UnderLineServices"></div>
                    <span className="AfterLineText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                </div>
                
                <div className="container">
                    <div className="slider-container ServicesSlider">
                        <Carousel
                            responsive={responsive}
                            infinite={false}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            draggable={true}
                            customLeftArrow={<CustomPrevButton Class="" />}
                            customRightArrow={<CustomNextButton Class="" />}
                        >
                            {Services.map((service) => (
                                <div className="SerciceCardContainer SerciceNewCardContainer" key={service.id}>
                                    <ServicesNewCard
                                        id={service.id}
                                        icon={service.icon}
                                        Header={service.Header}
                                        IsSelected={selectedService === service.id}
                                        onSelect={handleOnSelect}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                {SubServices.filter(s=>s.serviceId==selectedService).length>1&&
                    <div className="container CustomContainer">
                        <div className="slider-container ServicesSlider">
                            <Carousel
                                responsive={responsive2}
                                infinite={false}
                                autoPlay={false}
                                autoPlaySpeed={2000}
                                arrows={false}
                                draggable={true}
                                customLeftArrow={<CustomPrevButton Class="" />}
                                customRightArrow={<CustomNextButton Class="" />}
                            >
                                {SubServices.filter(s=>s.serviceId==selectedService).map((service) => (
                                    <div className="SerciceCardContainer SerciceNewCardContainer" key={service.id}>
                                        <SubServiceCard

                                            id={service.id}
                                            image={service.image}
                                            title={service.title}
                                            IsSelected={selectedSubService === service.id}
                                            onSelect={handleSelectSubService}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                }
                {console.log(selectedSubServiceData)}
                {selectedSubServiceData&&
                    
                    <SelectedSubServiceSection 
                        id={selectedSubServiceData.id}
                        Header={selectedSubServiceData.title}
                        MainImage={selectedSubServiceData.MainImage}
                        description={selectedSubServiceData.description}
                    />
                }
                
            </div>
            
            {selectedSubServiceData && selectedSubServiceData.Gallery && selectedSubServiceData.Gallery.length > 0 &&
                <Gallery 
                    key={selectedSubServiceData.id} 
                    AfterShowText={selectedSubServiceData.AfterShowText}
                    Images={selectedSubServiceData.Gallery}
                />
            }

            

               

        </section>
    );
};

export default ServicesFirstSection;
