import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import UpcommingProducts from './Components/UpcommingProducts/UpcommingProducts'
import React, { useEffect, useState } from 'react';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  // const [ab, setAb] = useState([]);
  // useEffect(() => {
  //   fetch('./products.JSON')
  //     .then(res => res.json())
  //     .then(data => setAb(data));
  // }, []);

  return (
    <div className="App">
      {/* <p>{ab.length}</p> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/upcommings" element={<UpcommingProducts />} />
          < Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </div >
  );
}

export default App;



/*
const products=
[
{
id: 1,
name: "Treadmill for Home",
model:"SH-T399P",
motor: "DC  1.25 CHP /2. 5 PHP",
speed: "0.5-16km",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T399.jpg",
details: "SH-T399P treadmill is created for all exercisers who want to burn their calories, build their muscles and keep healthy. With a functional compact design, our SH-T399P Treadmill is an ideal machine for exercisers who want to organize their space, to clean the covered floor and to move easily."
},
{
id: 2,
name: "Treadmill For Home",
model: "SH-T210",
motor: "DC  1.25 CHP /2. 5 PHP",
speed: "0.5-16km",
image: "https://www.shuafitness.com/wp-content/uploads/2021/11/SH-T210-7.png",
details: "This treadmill adopts a foldable design, Innovation driven foldable structure, perfect storage feature. It is 143mm in height after folded. It uses Dual shock absorption: Honeycomb air bridge composite shock absorber and Magnetic suspension shock system." 
},
{
id: 3,
name: "Commercial Treadmill",
model: "SH-T9100&SH-T9100T",
motor: "AC3.0CHP/6.0PHP",
speed: "0.5-25km",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T9100T-6.jpg",
details: "The unique  design of this treadmill offers optimal durability, performance, and stability for trainers, allowing you to enjoy a comfortable and effective running experience. With optional heart rate monitoring belt, you can engage workout safely." 
},
{
id: 4,
name: "Treadmill for Home",
model: "SH-T6700A",
motor: "AC 2.0 HP",
speed: "0.5-25km",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T6700A-1.jpg",
details: "The dedication driven design of the SH-6700A delivers top reliability, performance and efficiency for exercisers, and unparalleled feel, comfort and immersive experience for trainers. Incline function enables users to do intensive and effective workout. With Bluetooth, linking smart devices and heart rate monitors are available." 
},
{
id: 5,
name: "Treadmill for Home",
model: "SH-T5100",
motor: "DC2.5HP",
speed: "0.5-16KM/H",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T5100.jpg",
details: "The sleek and elegant design of our SH-T5100 treadmill combines striking visual appeal, performance and reliability with advanced low impact technology for workout that provides. A powerful and extra-large screen console improves the intuitive experience with running speed, time, distance, calories and etc. " 
},
{
id: 6,
name: "Treadmill for Home",
model: "SH-T9119P" ,
motor: "(DC)1.25 HP",
speed: "0.5-16KM/H",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T9119P.jpg",
details: "The innovation-driven design of SHUA SH-T9119P treadmill represents optimal reliable, high-performance and efficient solution for cardio training. Equipped with Bluetooth and various exercise programs, the top training experience is enjoyable and exciting. The diamond-texture running belt delivers the anti-slip and low impact performance, allowing exercisers to do even high-intensity workout. And the foldable design is the desirable, offering a convenient and simply option." 
},
{
id: 7,
name: "Treadmill for Home",
model: "SH-T5600",
motor: "1.25HP",
speed: "0.5-6km/h",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T5600.jpg",
details: "Optimize exercise with SHUA SH-T5600 treadmill that’s simple and attractive for new users and seniors. A precision-engineered drive system, ergonomic long handlebar and large running surface stand up to daily exercise use. With the integrated and smart console, exercise experience can be interesting and comfortable. And running belt has massage function, offering a relax and comfortable training." 
},
{
id: 8,
name: "Commercial Treadmill",
model: "SH-T5918",
motor: "6.0 HP",
speed: "0.8-20km/h",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T5918-6.jpg",
details: "For walkers, joggers, runners, sprinters and marathoners who demand different levels of exercise performance and comfort in SHUA SH-T5918 refine treadmill sets a new industrial standard. Ergonomic design with engineered and powerful, durable components delivers high-intensity workouts and performance training in comfort. Smart integrated console and incline function give the most intuitive and effective workout experience." 
},
{
id: 9,
name: "Commercial Treadmill",
model: "SH-T8919 & SH-T8919T",
motor: "3.0 HP",
speed: "0.8-20km/h",
image: "https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T8919T-6.jpg",
details: "Our professional treadmill designer created this SH-T8919&SH-T8919T innovative treadmill for allowing all trainers to workout and to reach their exercise goals. With modern integrated console and 15.6-inch display, this treadmill is ideal for walkers, joggers, and serious runners alike to having an intuitive exerciser experience." 
}
]

const upcomming=[
  {
    id:'u1',
    name:'Treadmill for Home',
    model:'SH-T5500&T5500A',
    description: 'SHUA best SH-T5500&SH-T5500A treadmill carries out a new standard with a low impact running platform and a high-performance motor that make even the high-level intense runs feel comfortable, stable and smooth in different running environments. It is built to last with the high efficiency and great materials.',
    image:'https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T5500.jpg'
  },
  {
    id:'u2',
    name:'Treadmill for Home',
    model:'SH-T3300',
    description: 'The combination of powerful motor and premium shock absorption technology gives SHUA SH-T3300 treadmill’s capacity to provide quiet, effective and low impact exercise experience. It is built to last and withstand even the high-intensity workout.',
    image:'https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T3300.jpg'
  },
  {
    id:'u3',
    name:'Treadmill for Home',
    model:'SH-T2100',
    description: 'The refine design of SH-T2100 walking treadmill offers a quiet powerful motor with adjustable speeds, allowing trainers to enjoy a noiseless and immersive exercise experience. With advanced low impact technology, no knees injury while workout.',
    image:'https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T2100.jpg'
  },
  {
    id:'u4',
    name:'Curved Treadmill',
    model:'SH-T901Z',
    description: 'The ergonomic design of the curved treadmill , which provides the solutionfor alignment correction of the ankles, knees, hips and back, enables usersto keep natural position at all times and avoid joint and knee stress, no matter what their height and weight are. ',
    image:'https://www.shuafitness.com/wp-content/uploads/2021/10/SH-T901Z-01.png'
  }
]

Stringified:
Products:

[{"id":1,"name":"Treadmill for Home","model":"SH-T399P","motor":"DC  1.25 CHP /2. 5 PHP","speed":"0.5-16km","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T399.jpg","details":"SH-T399P treadmill is created for all exercisers who want to burn their calories, build their muscles and keep healthy. With a functional compact design, our SH-T399P Treadmill is an ideal machine for exercisers who want to organize their space, to clean the covered floor and to move easily."},{"id":2,"name":"Treadmill For Home","model":"SH-T210","motor":"DC  1.25 CHP /2. 5 PHP","speed":"0.5-16km","image":"https://www.shuafitness.com/wp-content/uploads/2021/11/SH-T210-7.png","details":"This treadmill adopts a foldable design, Innovation driven foldable structure, perfect storage feature. It is 143mm in height after folded. It uses Dual shock absorption: Honeycomb air bridge composite shock absorber and Magnetic suspension shock system."},{"id":3,"name":"Commercial Treadmill","model":"SH-T9100&SH-T9100T","motor":"AC3.0CHP/6.0PHP","speed":"0.5-25km","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T9100T-6.jpg","details":"The unique  design of this treadmill offers optimal durability, performance, and stability for trainers, allowing you to enjoy a comfortable and effective running experience. With optional heart rate monitoring belt, you can engage workout safely."},{"id":4,"name":"Treadmill for Home","model":"SH-T6700A","motor":"AC 2.0 HP","speed":"0.5-25km","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T6700A-1.jpg","details":"The dedication driven design of the SH-6700A delivers top reliability, performance and efficiency for exercisers, and unparalleled feel, comfort and immersive experience for trainers. Incline function enables users to do intensive and effective workout. With Bluetooth, linking smart devices and heart rate monitors are available."},{"id":5,"name":"Treadmill for Home","model":"SH-T5100","motor":"DC2.5HP","speed":"0.5-16KM/H","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T5100.jpg","details":"The sleek and elegant design of our SH-T5100 treadmill combines striking visual appeal, performance and reliability with advanced low impact technology for workout that provides. A powerful and extra-large screen console improves the intuitive experience with running speed, time, distance, calories and etc. "},{"id":6,"name":"Treadmill for Home","model":"SH-T9119P","motor":"(DC)1.25 HP","speed":"0.5-16KM/H","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T9119P.jpg","details":"The innovation-driven design of SHUA SH-T9119P treadmill represents optimal reliable, high-performance and efficient solution for cardio training. Equipped with Bluetooth and various exercise programs, the top training experience is enjoyable and exciting. The diamond-texture running belt delivers the anti-slip and low impact performance, allowing exercisers to do even high-intensity workout. And the foldable design is the desirable, offering a convenient and simply option."},{"id":7,"name":"Treadmill for Home","model":"SH-T5600","motor":"1.25HP","speed":"0.5-6km/h","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T5600.jpg","details":"Optimize exercise with SHUA SH-T5600 treadmill that’s simple and attractive for new users and seniors. A precision-engineered drive system, ergonomic long handlebar and large running surface stand up to daily exercise use. With the integrated and smart console, exercise experience can be interesting and comfortable. And running belt has massage function, offering a relax and comfortable training."},{"id":8,"name":"Commercial Treadmill","model":"SH-T5918","motor":"6.0 HP","speed":"0.8-20km/h","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T5918-6.jpg","details":"For walkers, joggers, runners, sprinters and marathoners who demand different levels of exercise performance and comfort in SHUA SH-T5918 refine treadmill sets a new industrial standard. Ergonomic design with engineered and powerful, durable components delivers high-intensity workouts and performance training in comfort. Smart integrated console and incline function give the most intuitive and effective workout experience."},{"id":9,"name":"Commercial Treadmill","model":"SH-T8919 & SH-T8919T","motor":"3.0 HP","speed":"0.8-20km/h","image":"https://www.shuafitness.com/wp-content/uploads/2021/09/SH-T8919T-6.jpg","details":"Our professional treadmill designer created this SH-T8919&SH-T8919T innovative treadmill for allowing all trainers to workout and to reach their exercise goals. With modern integrated console and 15.6-inch display, this treadmill is ideal for walkers, joggers, and serious runners alike to having an intuitive exerciser experience."}]

*/