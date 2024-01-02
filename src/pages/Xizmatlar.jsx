import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import syles
import { styles } from "../styles"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

// Kard-material-tailwind
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


//image import 
import kardUchun from "../image/kardUchun.jpg"
import kardUchunBesh from "../image/kardUchunBesh.png"
import kardUchunOnBesh from "../image/kardUchunOnBesh.jpg"
import kardUchunOnIkki from "../image/kardUchunOnIkki.png"
import kardUchunOnYetti from "../image/kardUchunOnYetti.png"
import kardUchunOnBir from "../image/kardUchunOnBir.png"
import kardUchunOnUch from "../image/kardUchunOnUch.png"
import kardUchunOnTort from "../image/kardUchunOnTort.png"
import kardUchunTort from "../image/kardUchunTort.png"
import kardUchunOlti from "../image/kardUchunOlti.webp"
import kardUchunYetti from "../image/kardUchunYetti.webp"

const Xizmatlar = () => {
  return (
    <>

      <Swiper
        slidesPerView={4} // Bir safarda ko`rsatiladigan kardlar soni
        slidesPerGroup={1} // Har bir o`tkazgandan so`ng necha kard o`tishi
        centeredSlides={false}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4, // Ekran 769px dan katta bo`lsa 4 kard o`tishi
            slidesPerGroup: 4,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper mb-10"
      >
        <div>
          <SwiperSlide className='p-5 ml-28'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  className='w-[400px] h-[223px]'
                  src={kardUchun}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                 Ranaldo/Qo'l soati
                </Typography>
                <Typography>
                Xo‘sh, hozirgi davrda soatlar biz uchun qanchalik muhim? Avvalo aytish kerakki soat nafaqat vaqtni ko‘rsatuvchi vosita, balki o‘z egasining alohida bir hislatlarini ifodalovchi aylanib ulgurgan. erkak kishi uchun eng yahshi sovg‘alardan biri hisoblanadi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5 mb-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[360px] h-[250px]'
                  src={kardUchunBesh}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[352px] h-[250px]'
                  src={kardUchunOnIkki}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                 Ranaldo/Qo'l soati
                </Typography>
                <Typography>
                Xo‘sh, hozirgi davrda soatlar biz uchun qanchalik muhim? Avvalo aytish kerakki soat nafaqat vaqtni ko‘rsatuvchi vosita, balki o‘z egasining alohida bir hislatlarini ifodalovchi aylanib ulgurgan. erkak kishi uchun eng yahshi sovg‘alardan biri hisoblanadi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[223px]'
                  src={kardUchunOnYetti}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[351px] h-[222px]'
                src={kardUchunOnBir}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                 Ranaldo/Qo'l soati
                </Typography>
                <Typography>
                Xo‘sh, hozirgi davrda soatlar biz uchun qanchalik muhim? Avvalo aytish kerakki soat nafaqat vaqtni ko‘rsatuvchi vosita, balki o‘z egasining alohida bir hislatlarini ifodalovchi aylanib ulgurgan. erkak kishi uchun eng yahshi sovg‘alardan biri hisoblanadi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[222px]'
                  src={kardUchunOnUch}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[222px]'
                  src= {kardUchunOnTort}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[360px] h-[230px]'
                  src={kardUchunOnBesh}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[222px]'
                  src= {kardUchunTort}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[360px] h-[230px]'
                  src={kardUchunOlti}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[360px] h-[230px]'
                  src= {kardUchunYetti}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[223px]'
                  src={kardUchunOnYetti}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[351px] h-[222px]'
                src={kardUchunOnBir}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                 Ranaldo/Qo'l soati
                </Typography>
                <Typography>
                Xo‘sh, hozirgi davrda soatlar biz uchun qanchalik muhim? Avvalo aytish kerakki soat nafaqat vaqtni ko‘rsatuvchi vosita, balki o‘z egasining alohida bir hislatlarini ifodalovchi aylanib ulgurgan. erkak kishi uchun eng yahshi sovg‘alardan biri hisoblanadi.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[222px]'
                  src={kardUchunOnUch}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[222px]'
                  src= {kardUchunOnTort}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[360px] h-[230px]'
                  src={kardUchunOnBesh}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[350px] h-[222px]'
                  src= {kardUchunTort}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[360px] h-[230px]'
                  src={kardUchunOlti}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide className='p-5'>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                className='w-[360px] h-[230px]'
                  src= {kardUchunYetti}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bugungi kundagi ahamiyati
                </Typography>
                <Typography>
                Faqatgina 1275 – yilga kelib zamonaviy soatlar davri, Angliyada birinchi mexanik soat ixtiro qilinishi bilan boshlandi. Shu davrdan boshlab to hozirgacha biz ko‘rib turgan soatlar o‘zining eng mukammal ko‘rinishiga, mexanizmiga ega bo‘ldi.
                </Typography>

              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}

export default Xizmatlar