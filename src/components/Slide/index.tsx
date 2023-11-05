import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as S from './style';
import posts from '@/assets/images/Welcome/slide/posts.svg';
import tags from '@/assets/images/Welcome/slide/tags.svg';
import status from '@/assets/images/Welcome/slide/status.svg';
import tickets from '@/assets/images/Welcome/slide/tickets.svg';

export default function Slide() {
  return (
    <S.Swiper className="slide">
      <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide>
          <S.Slide1>
            <img src={posts} alt="글들을 파일에 모아둔 모습" />
            <span>
              블로그, SNS 등 에서 발견했던 좋은 글들을
              <br />
              나중에 보려다 잊어버린 적 있지 않으신가요?
            </span>
          </S.Slide1>
        </SwiperSlide>
        <SwiperSlide>
          <S.Slide2>
            <img src={tags} alt="태그 사용 예시" />
            <span>
              <span className="point">태그</span>로 정리하여 손쉽게 다시 찾아보고
            </span>
          </S.Slide2>
        </SwiperSlide>
        <SwiperSlide>
          <S.Slide3>
            <img src={status} alt="3가지 상태 안내" />
            <span>읽던 글도 잊지않고 끝까지 읽도록 관리할 수 있어요</span>
          </S.Slide3>
        </SwiperSlide>
        <SwiperSlide>
          <S.Slide4>
            <span>
              흩어져 있는 좋은 글들을
              <br />
              <span className="point">KEEP ON</span> 에서 정리해보세요
            </span>
            <img src={tickets} alt="티켓" />
          </S.Slide4>
        </SwiperSlide>
        <span></span>
      </Swiper>
    </S.Swiper>
  );
}
