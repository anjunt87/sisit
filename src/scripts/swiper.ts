import Swiper from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

new Swiper(".testimonial-swiper", {
 modules:[Pagination, Navigation, Autoplay],
 slidesPerView:1,
 autoplay:true,
 pagination:{ el:".swiper-pagination" }
});