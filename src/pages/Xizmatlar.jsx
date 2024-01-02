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
          <SwiperSlide className='py-5 mx-28'>
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
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={kardUchun}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
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