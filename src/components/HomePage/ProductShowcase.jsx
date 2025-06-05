import React from "react"
import Face from '../../assets/Face.png'
import Relaxed from '../../assets/Relaxed.jpg'
import Combo from '../../assets/Combo.jpg'
import Gun from '../../assets/Gun.png'
const products = [
    {
      id: 1,
      name: 'Miniatures',
      href: '#',
      price: '400(Tend to change with the product)',
      imageSrc: Face,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Relaxed Flower Pots Large',
      href: '#',
      price: '250',
      imageSrc: Relaxed,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Corporate Box',
      href: '#',
      price: '1000',
      imageSrc: Combo,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Mini Gun',
      href: '#',
      price: '400',
      imageSrc: Gun,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  const Bestseller = () =>{
    return (
        <div className="bg-white">
          {/* <br /><br /> */}
          
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <p className="text-2xl font-bold text-center text-black">Our Best Sellers</p> <br />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className="mt-4 text-lg text-black font-bold">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">&#8377;{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )
  };
  export default  Bestseller;
  