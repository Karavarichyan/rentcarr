// import all images from assets/images directory
import img01 from "../all-images/cars-img/teslannn.jpeg";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/ferari.jpeg";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/audi.jpeg";
import img08 from "../all-images/cars-img/roys.jpeg";
import img09 from '../all-images/cars-img/niva.jpeg'
import img10 from "../all-images/slider-img/nark.jpg"

const carData = [
  { id: 9,
    brand: "vaz",
    rating: 52,
    carName: "Niva",
    imgUrl: img09,
    model: "Model 3",
    price: 10,
    speed: "???kmpl",
    gps: "GPS Navigation no",
    seatType: "Heated seats no",
    automatic: "Automatic no",
    description:
      " Stylishly put, it's not advisable to drive a Niva, as it can be hazardous to your health."

      
  },
  { id: 10,
    brand: "BMW E-36",
    rating: 52,
    carName: "BMW E-36",
    imgUrl: img10,
    model: "E-36",
    price: 100,
    speed: "175kmpl",
    gps: "GPS Navigation no",
    seatType: "Heated seats yes",
    automatic: "Automatic no",
    description:
      " BMW E36, which is a part of the BMW 3 Series, is a popular model that was produced from 1990 to 1999. The 1997 BMW E36 would be from the later years of its production cycle. Here's a brief overview:"

      
  },
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla ",
    imgUrl: img01,
    model: "Model 3",
    price: 220,
    speed: "220kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    'Experience the luxury of the Tesla , a Model 3 that combines eco-friendliness with cutting-edge technology. With a remarkable fuel efficiency of 20 km per liter, you can explore the city without worrying about refueling frequently. The car comes equipped with GPS navigation to help you navigate effortlessly, and heated seats for your comfort during colder days. Enjoy the convenience of automatic transmission, making your journey even more enjoyable. Explore the city in style and sustainability with the Tesla ',
  },
  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Model-2023",
    price: 120,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      'The 2023 Toyota Camry is the epitome of luxury and performance. With a stellar rating of 102, it stands out as a top choice among car enthusiasts. This model comes equipped with a powerful and efficient 140kmpl engine, ensuring you get the most out of every drop of fuel.',
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 200,
    speed: "180kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The 2022 BMW X3 is the pinnacle of luxury and performance, earning an impressive rating of 132. This model is the embodiment of BMW's commitment to excellence, featuring cutting-edge technology and remarkable design.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 120,
    speed: "120kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Nissan Mercielago Model-2022 is the embodiment of luxury and performance, boasting a rating of 102. This model combines exceptional technology and refined design, making it an attractive choice for those who value quality",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari ",
    imgUrl: img05,
    model: "Model-2022",
    price: 450,
    speed: "240kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Ferrari Model-2022 is a blend of style and performance, featuring a rating of 94. This car effortlessly combines advanced technology and sleek design to create a remarkable driving experience. With a fuel efficiency of 240 km/l and automatic transmission, it offers both economy and ease of use. The built-in GPS navigation system ensures you never lose your way, and the heated seats provide comfort in any weather.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 180,
    speed: "160kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Mercedes Benz XC90 Model-2022 is the epitome of luxury, boasting a rating of 119. This model exemplifies Mercedes-Benz's commitment to excellence, offering cutting-edge technology and refined design. With a fuel efficiency of 160 km/l and automatic transmission, it provides a smooth and efficient ride. Equipped with GPS navigation and heated seats, it ensures you're always on track and comfortable during your journey.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi ",
    imgUrl: img07,
    model: "Model 3",
    price: 190,
    speed: "190kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Audi Fiesta Model 3 is a stylish and efficient choice with a rating of 82. This car is designed to impress, featuring advanced technology and a modern design. With a fuel efficiency of 190 km/l and automatic transmission, it's perfect for both city driving and long trips. The GPS navigation system keeps you on the right path, and the heated seats add a touch of luxury to your ride.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 550,
    speed: "160kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Rolls Royce Colorado Model 3 is the epitome of luxury and sophistication, earning a rating of 52. This car embodies the Rolls-Royce legacy of excellence, featuring opulent design and advanced technology. With a fuel efficiency of 160 km/l and automatic transmission, it combines power and efficiency. The GPS navigation system ensures you reach your destination with ease, while the heated seats provide unmatched comfort."

      
  },

];

export default carData;