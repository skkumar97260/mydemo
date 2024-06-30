import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import bottomlogo from '../../assets/sinup.webp';
import image from '../../assets/siva.jpg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './user.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Slider from "react-slick";
import Rightbar from '../../components/rightbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { getIntro } from '../../api/intro';
import { getAbout } from '../../api/about';
function User() {
  const [value, setValue] = useState(0);
  const [intros, setIntros] = useState([]);
  const [abouts, setAbouts] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
  getPortfolio();
  }, []);

  const getPortfolio = async () => {
    try {
      const res = await getIntro();
      console.log(res?.data?.result);
      const res1 = await getAbout();
      setIntros(res?.data?.result);
      setAbouts(res1.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <Rightbar/>
      <div className="container  p-3 mt-5">
        {/* Intro Section */}
      
        <div>
          <h2>Intro</h2>
          <hr />
          <div className='container-fluid developer_background p-5 d-flex justify-content-center align-items-center gap-2 user_intro mt-1 flex-column flex-lg-row'>
            {intros?.map((intro, index) => (
             
            
      <><div className='col-12 col-lg-6 col-md-6 mb-4 mb-lg-0'>
                <div className='text-white    '><h5>{intro?.title}</h5></div>
                <div className='d-flex gap-3 '>
                  <h1 className='user_intro_fullname'>{intro?.firstName}</h1>
                  <h1 className='user_intro_fullname'>{intro?.lastName}</h1>
                </div>
                <div>
                  <h2 className='text-white text-bold '>{intro?.caption}</h2>
                </div>
                <div className='text-white'>
                 {intro?.description}
                </div>
                <div className='mt-3'>
                  <Link to="/contactus">
                    <button href="/contactus" className='bg-white text-white text-bold border-2 border border-warning p-2 contact_me'>Contact Me</button>
                  </Link>
                </div>
              </div><div className='col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center'>
                  <img className='rounded-circle' src={intro?.image} alt="Developer" height={"300px"} width={"300px"} />
                </div></>
      ))}
    </div>
        </div>
     
        {/* About Section */}
        <div className='mt-5'>
          <div>
            <h2>About</h2>
            <hr />
            {abouts?.map((about, index) => (
          
            <div className='container-fluid d-flex justify-content-center align-items-center row user_background '>
              <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"100%"} width={"100%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-5'>
                <div className='mt-lg-5 mt-md-5 mt-2 '>
                  <span className='text-black '>
                    I am FullStack Mern Developer. Currently working as a frontend Reactjs developer in India and Also I am working as a FullStack Mern Developer.
                  </span>
                </div>
                <div className='mt-lg-5 mt-md-5 mt-2 '>
                  <span className='text-black '>
                    I am FullStack Mern Developer. Currently working as a frontend Reactjs developer in India and Also I am working as a FullStack Mern Developer.
                  </span>
                </div>
              </div>
              <div className='mt-5 '>
                <div className='text-black '>
                  Here are few technologies I have been working with recently:
                </div>
                <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-primary mb-3 mt-2  '>
                <Slider {...settings}>
        <div className='col-4 col-lg-2 col-md-3 mt-2 border-box m-3'>
          <div>
          <div className='d-flex justify-content-center align-items-center'><img src={bottomlogo} alt="HTML" className="img-fluid tech-logo " height={150}  width={150}/></div>
          <span className='text-white d-flex justify-content-center align-items-center '>HTML</span>
          </div>
        </div>
        <div className='col-4 col-lg-2 col-md-3 mt-2 border-box m-3'>
          <div>
          <div className='d-flex justify-content-center align-items-center'><img src={bottomlogo} alt="HTML" className="img-fluid tech-logo " height={150}  width={150}/></div>
          <span className='text-white '>CSS</span>
          </div>
        </div>
        <div className='col-4 col-lg-2 col-md-3 mt-2 border-box m-3'>
          <div>
          <div className='d-flex justify-content-center align-items-center'><img src={bottomlogo} alt="HTML" className="img-fluid tech-logo " height={150}  width={150}/></div>
          <span className='text-white '>JavaScript</span>
          </div>
        </div>
        <div className='col-4 col-lg-2 col-md-3 mt-2 border-box m-3'>
          <div>
          <div className='d-flex justify-content-center align-items-center'><img src={bottomlogo} alt="HTML" className="img-fluid tech-logo " height={150}  width={150}/></div>
          <span className='text-white'>React</span>
          </div>
        </div>
        <div className='col-4 col-lg-2 col-md-3 mt-2 border-box m-3'>
          <div>
          <div className='d-flex justify-content-center align-items-center'><img src={bottomlogo} alt="HTML" className="img-fluid tech-logo " height={150}  width={150}/></div>
          <span className='text-white'>Node.js</span>
          </div>
        </div>
        <div className='col-4 col-lg-2 col-md-3 mt-2 border-box m-3'>
          <div>
          <div className='d-flex justify-content-center align-items-center'><img src={bottomlogo} alt="HTML" className="img-fluid tech-logo " height={150}  width={150}/></div>
          <span className='text-white'>MongoDB</span>
          </div>
        </div>
      </Slider>
                </div>
              </div>
            </div>
              ))}
          </div>
        </div>

        {/* Vertical Tabs Section */}
        <div className='mt-5'>
          <h2>Projects</h2>
          <hr />
        <div className='container-fluid row user_about mt-1 user_background1 '>
           
          

            <div className='col-12 col-lg-12 col-md-12 d-flex container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
                <div className='col-12 col-lg-4 col-md-3 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
            <Box sx={{bgcolor: 'background.paper', display: 'flex', height: 'auto', width: 'auto'}}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider',color:"violet",fontWeight:"700",fontSize:"20px" }}
            >
              <Tab label="metoo.care" />
              <Tab label="Bharat Farms" />
             
            </Tabs>
            
            </Box>
            </div>
            <div className='col-12 col-lg-8 col-md-9'>
              <div role="tabpanel" hidden={value !== 0}>
                <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  '>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    metoo.care
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                    I am FullStack Mern Developer. Currently working as a frontend Reactjs developer in India and Also I am working as a FullStack Mern Developer.
                  </span>
                </div>
              </div>
                </div>
               
              </div>
              <div role="tabpanel" hidden={value !== 1}>
              <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  h-100'>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Bharat Farms
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                    I am FullStack Mern Developer. Currently working as a frontend Reactjs developer in India and Also I am working as a FullStack Mern Developer.
                  </span>
                </div>
              </div>
                </div>
              </div>
             
            </div>
           </div>
        </div>
        </div>

          {/* Vertical Tabs Section */}
          <div className='mt-5'>
          <h2>Experience</h2>
          <hr />
        <div className='container-fluid row user_about mt-1 user_background '>
           
          

            <div className='col-12 col-lg-12 col-md-12 d-flex container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
                <div className='col-12 col-lg-4 col-md-3 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
            <Box sx={{bgcolor: '#FCAD7D', display: 'flex', height: 'auto', width: 'auto'}}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider',color:"violet",fontWeight:"700",fontSize:"20px" }}
            >
              <Tab label="2022-2023" />
              <Tab label="Bharat Farms" />
            </Tabs>
            
            </Box>
            </div>
            <div className='col-12 col-lg-8 col-md-9'>
              <div role="tabpanel" hidden={value !== 0}>
                <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  '>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div>2022-2023</div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Pixalive Group
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                   I have been working  since 10 months in this company and I am currently working as a frontend developer.
                   I have completed  one live project that project name was metoo.care
                  </span>
                </div>
              </div>
                </div>
               
              </div>
              <div role="tabpanel" hidden={value !== 1}>
              <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  h-100'>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Bharat Farms
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                    I am FullStack Mern Developer. Currently working as a frontend Reactjs developer in India and Also I am working as a FullStack Mern Developer.
                  </span>
                </div>
              </div>
                </div>
              </div>
              
            </div>
           </div>
        </div>
        </div>

      {/* certification */}
      <div className='mt-5'>
          <h2>Certification</h2>
          <hr />
        <div className='container-fluid row user_about mt-1 user_background1 '>
           
          

            <div className='col-12 col-lg-12 col-md-12 d-flex container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
                <div className='col-12 col-lg-4 col-md-3 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
            <Box sx={{bgcolor: 'background.paper', display: 'flex', height: 'auto', width: 'auto'}}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider',color:"violet",fontWeight:"700",fontSize:"20px" }}
            >
              <Tab label="metoo.care" />
              <Tab label="Bharat Farms" />
             
            </Tabs>
            
            </Box>
            </div>
            <div className='col-12 col-lg-8 col-md-9'>
              <div role="tabpanel" hidden={value !== 0}>
                <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  '>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    metoo.care
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                  To completed Full Project The Company gave me a certification .
                  </span>
                </div>
              </div>
                </div>
               
              </div>
              <div role="tabpanel" hidden={value !== 1}>
              <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  h-100'>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Bharat Farms
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                   To completed Full Project The Company gave me a certification .
                  </span>
                </div>
              </div>
                </div>
              </div>
              
            </div>
           </div>
        </div>
        </div>
        <div className='mt-5'>
          <h2>Education</h2>
          <hr />
        <div className='container-fluid row user_about mt-1 user_background1 '>
           
          

            <div className='col-12 col-lg-12 col-md-12 d-flex container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
                <div className='col-12 col-lg-4 col-md-3 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2 '>
            <Box sx={{bgcolor: 'background.paper', display: 'flex', height: 'auto', width: 'auto'}}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider',color:"violet",fontWeight:"700",fontSize:"20px" }}
            >
              <Tab label="metoo.care" />
              <Tab label="Bharat Farms" />
              <Tab label="SMS" />
            </Tabs>
            
            </Box>
            </div>
            <div className='col-12 col-lg-8 col-md-9'>
              <div role="tabpanel" hidden={value !== 0}>
                <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  '>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    metoo.care
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                  To completed Full Project The Company gave me a certification .
                  </span>
                </div>
              </div>
                </div>
               
              </div>
              <div role="tabpanel" hidden={value !== 1}>
              <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  h-100'>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Bharat Farms
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                   To completed Full Project The Company gave me a certification .
                  </span>
                </div>
              </div>
                </div>
              </div>

              <div role="tabpanel" hidden={value !== 2}>
              <div className='col-12 col-lg-12 col-md-12 container-fluid row justify-content-center align-items-center text-center text-warning mb-3 mt-2  h-100'>
                <div className=' col-12 col-lg-6 col-md-6'>
                <div><img src={bottomlogo} alt="Bottom Logo" height={"50%"} width={"50%"} /></div>
              </div>
              <div className=' col-12 col-lg-6 col-md-6  d-flex flex-column gap-2'>
                <div className='mt-1 '>
                  <span className='text-black '>
                    sms
                  </span>
                </div>
                <div className='mt-1 '>
                  <span className='text-black '>
                    Software Developer(Frontend)
                  </span>
                </div>
                <div className='mt-1'>
                  <span className='text-black '>
                   To completed Full Project The Company gave me a certification .
                  </span>
                </div>
              </div>
                </div>
              </div>
              
            </div>
           </div>
        </div>
        </div>
     {/* contact */}
     <div className='mt-5'>
  <h2>Contact</h2>
  <hr />
  <div className='container-fluid developer_background p-5 d-flex justify-content-center align-items-center gap-2 user_intro mt-1 flex-column flex-lg-row'>
  <div className='col-12 col-lg-6 col-md-6'>
  <div><img src={bottomlogo} alt="Bottom Logo" height={"100%"} width={"100%"} /></div>
  </div>
  <div className='col-12 col-lg-6 col-md-6 d-flex flex-column gap-3'>
    <div className='text-white d-flex align-items-center'>name: <div className='text-black ms-2'>Sivakumar R</div></div>
    <div className='text-white d-flex align-items-center'>email: <div className='text-black ms-2'>skkumar97260@example.com</div></div>
    <div className='text-white d-flex align-items-center'>age: <div className='text-black ms-2'>23</div></div>
    <div className='text-white d-flex align-items-center'>gender: <div className='text-black ms-2'>male</div></div>
    <div className='text-white d-flex align-items-center'>address: <div className='text-black ms-2'>41/2 kallipalam road, krishnanagar, kasipalayam, gopi(6383454)</div></div>
    <div className='text-white d-flex align-items-center'>phone: <div className='text-black ms-2'>1234567890</div></div>
    <div className='text-white d-flex align-items-center'>Languages: <div className='text-black ms-2'>Tamil, English, Telugu</div></div>
    <div className='d-flex justify-content-center'>
      <a href='https://linkedin.com/in/siva-kumar-6106092b4' className='text-white linkedin_icon me-3' target='_blank' rel='noopener noreferrer'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/skkumar97260/' className='text-white github_icon me-3' target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
      <a href='https://www.instagram.com/skkumar97260/' className='text-white instagram_icon me-3' target='_blank' rel='noopener noreferrer'>
        <FaInstagram />
      </a>
    </div>
  </div>
</div>

</div>



      </div>
    </>
  );
}

export default User;
