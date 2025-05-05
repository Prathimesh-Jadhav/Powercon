import cnc from '../assets/cnc-icon.png'
import cncMachine from '../assets/cnc_machine.jpg'
import cncMachine2 from '../assets/cnc_machine2.jpg'
import power from '../assets/power.webp'

import ups from '../assets/ups.jpg'
import rectifiers from '../assets/rectifiers.jpg'

export const services = [
    {
        image:cncMachine2,
        title:"CNC Machine Maintainance",
        description:"We offer precision CNC machining services for a wide range of materials, including metals, plastics, and composites. Our state-of-the-art CNC machines ensure high accuracy and repeatability, making us the ideal choice for your machining needs.",
    },
    {
        image:cncMachine,
        title:"Industrial Automation",
        description:"We provide comprehensive industrial automation solutions to optimize your manufacturing processes. Our team of experts will work with you to design and implement custom automation systems that improve efficiency and reduce costs.",
    },
    {
        image:power,
        title:"Power Solutions",
        description:"We offer a range of power solutions, including UPS systems, generators, and power distribution units. Our products are designed to provide reliable power backup and distribution for your critical equipment.",
    },
    {
        image:cnc,
        title:"Power Solutions",
        description:"We offer a range of power solutions, including UPS systems, generators, and power distribution units. Our products are designed to provide reliable power backup and distribution for your critical equipment.",
    },
    {
        image:cnc,
        title:"Solar solutions",
        description:"We provide solar solutions for residential and commercial applications. Our team will work with you to design and install a solar system that meets your energy needs and reduces your carbon footprint.",
    }
]

export const spareParts = [
    {
      id: 1,
      name: "Online UPS 1500VA",
      category: "Mechanical Components",
      price: 249.99,
      rating: 4.8,
      stockStatus: "In Stock",
      deliveryTime: "2-3 Business Days",
      image: ups,
      compatibleWith: ["Model X15", "Model Z20", "Industrial Pro 5000"]
    },
    {
      id: 2,
      name: "Rectifiers 24V 10A",
      category: "Motion Control",
      price: 89.95,
      rating: 4.6,
      stockStatus: "Limited Stock",
      deliveryTime: "3-5 Business Days",
      image: rectifiers,
      compatibleWith: ["Model S10", "Model X15", "Precision 2000"]
    },
    {
      id: 3,
      name: "Control Board PCB",
      category: "Electronics",
      price: 179.50,
      rating: 4.9,
      stockStatus: "In Stock",
      deliveryTime: "1-2 Business Days",
      image: cnc,
      compatibleWith: ["Model Z20", "Industrial Pro 5000", "AutoCNC 360"]
    }
  ];
