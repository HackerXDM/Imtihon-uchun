import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import { PhoneOutlined, Telegram } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//import syles
import { styles } from "../styles";

//import Img
import TimerImg from "../image/Timer_Img.svg"

const Header = () => {
  const notify = () => {
    toast.success("So`rovingiz yuborildi", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  //Modal

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    // Modalni yopish uchun kerakli ishlar ham bajarishingiz mumkin
  };

  // 1 function
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  //2 function
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleMouseEnter2 = () => {
    setShowDropdown2(true);
  };

  const handleMouseLeave2 = () => {
    setShowDropdown2(false);
  };

  //3 function
  const [showDropdown3, setShowDropdown3] = useState(false);

  const handleMouseEnter3 = () => {
    setShowDropdown3(true);
  };

  const handleMouseLeave3 = () => {
    setShowDropdown3(false);
  };

  //4 function
  const [showDropdown4, setShowDropdown4] = useState(false);

  const handleMouseEnter4 = () => {
    setShowDropdown4(true);
  };

  const handleMouseLeave4 = () => {
    setShowDropdown4(false);
  };


  const handleOpen = () => setOpen((cur) => !cur);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Add logic to collect form data, perform validation, and submit if valid
    const email = document.getElementById('email').value; // Get the email input value
    const password = document.getElementById('password').value; // Get the password input value
    
    // Perform validation or make API requests here
    
    // For example, you can log the values for now:
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Clear inputs or perform further actions as needed
    
    // Close the dialog or reset the form
    handleOpen(); // Close the dialog
  };
  
  return (
    <header>
      <div>
        <ToastContainer />
      </div>
      <div className={`${styles.container}`}>
        <form onSubmit={handleSubmit}>
          <Dialog
            size="xs"
            open={open}
            onClose={handleOpen}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-full max-w-[24rem]">
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  Sign In
                </Typography>
                <Typography
                  className="mb-3 font-normal"
                  variant="paragraph"
                  color="gray"
                >
                  Enter your email and password to Sign In.
                </Typography>
                <div className="mb-2">
                  <label htmlFor="email" className="-mb-2">
                    Your Email
                  </label>
                  <Input id="email" label="Email" size="lg" />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="-mb-2">
                    Your Password
                  </label>
                  <Input
                    id="password"
                    label="Password"
                    size="lg"
                    type="password"
                  />
                </div>
                <div className="-ml-2.5 -mt-3">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                 onClick={() => {
                    notify();
                    handleOpen();
                  }}
                  type="submit"
                  variant="gradient"
                  fullWidth
                >
                  Sign In
                </Button>
                <Typography
                  variant="small"
                  className="mt-4 flex justify-center"
                >
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={handleOpen}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
          </Dialog>
        </form>

        <div>
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center justify-center flex-1">
              {" "}
              {/* flex-1 o'lchamni tayinlash */}
              <Link to="/" className="flex items-center justify-center">
                {" "}
                {/* Bitta Link ichida joylashtirish */}
                <img
                  src={TimerImg}
                  alt="Timer.logo"
                  style={{ width: "100px", height: "100px" }}
                />
              </Link>
            </div>

            <div className="flex items-center justify-end space-x-6">
              <a href="https://t.me/Xack_XDM" target="_blank">
                <Telegram />
              </a>
              <a href="tel:+998978383880">
                <PhoneOutlined />
              </a>
              <button
               onClick={handleOpen}
                type="submit"
                className="px-4 py-2 border-2 border-black font-bold uppercase font-sans text-sm inline-block"
              >
                Qo'ng'iroq qiling
              </button>
            </div>
          </div>


          <nav>
            <ul class="flex w-full justify-center space-x-[119px] flex-wrap grid-cols-5 items-center ">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative  inline-block"
              >
                <NavLink className="hover:text-green-400 uppercase" to="/sotish">
                  Sotish
                </NavLink>
                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 bg-white  px-10 rounded-md shadow-md ${showDropdown ? "block" : "hidden"
                    }`}
                >
                  <ul className="flex flex-col w-44 py-3 space-y-4">
                    <li className="text-lg font-serif">
                      <NavLink
                        className={"w-full  hover:text-black"}
                        to="/sotish/shveytsariya_soatlari/Brendni_sotib_olish"
                      >
                        Shveytsariya soatlari
                      </NavLink>
                    </li>
                    <li className="text-lg font-serif">
                      <NavLink to="/sotish/zargarlik_buyumlari">Zargarlik buyumlari</NavLink>
                    </li>

                    <li className="text-lg font-serif">
                      <NavLink to="/sotish/sumkalar">Sumka</NavLink>
                    </li>

                    <li className="text-lg font-serif">
                      <NavLink to="/sotish/telefon">Telefon</NavLink>
                    </li>
                  </ul>

                </div>
              </li>

              {/* Dropdown-2 */}
              <li
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                className="relative"
              >
                <NavLink className="hover:text-green-400 uppercase " to="/Onlayn_Baholash/onlayn_kuz_soatlari">
                  Onlayn baholash
                </NavLink>
                <div
                  className={`absolute top-full left-0 bg-white px-10 p-5 rounded-md shadow-md ${showDropdown2 ? "block" : "hidden"
                    }`}
                >
                  <ul className="flex flex-col w-56 py-3 space-y-4">
                    {" "}
                    {/* Flex klasiga ega bo'lgan ul */}
                    <li className="text-lg font-serif">
                      <NavLink to="/onlayn_baholash/onlayn_kuz_aksessuarlari">Onlayn kuz aksessuarlari</NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Dropdown-3 */}
              <li
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                className="relative"
              >
                <NavLink className="hover:text-green-400 uppercase" to="/katalog">
                  Katalog
                </NavLink>
              </li>


              {/* Dropdown-4 */}
              <li
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
                className="relative"
              >
                <NavLink className="hover:text-green-400 uppercase" to="/kompaniya_haqida">
                  Kompaniya haqida
                </NavLink>
                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 px-10 bg-white p-2 rounded-md shadow-md ${showDropdown4 ? "block" : "hidden"
                    }`}
                >
                  <ul className="flex flex-col w-56 py-3 space-y-4">
                    {" "}
                    {/* Flex klasiga ega bo'lgan ul */}
                    <li className="text-lg font-serif">
                      <NavLink
                        className={" w-full hover:text-black"}
                        to="/kompaniya_haqida/yetkazib_berish_va_kafolat"
                      >
                        yetkazib berish va kafolat
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Dropdown-5 */}
              <NavLink className="hover:text-green-400 uppercase" to="/xizmatlar">
                Xizmatlar
              </NavLink>


              {/* Dropdown-6 */}
              <NavLink className="hover:text-green-400 uppercase" to="/kontakt">
                Kontaktlar
              </NavLink>
              {/* Dropdown */}
              <ul className="flex flex-col w-44 py-3 space-y-4">
                {" "}
                {/* Flex klasiga ega bo'lgan ul */}
              </ul>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
