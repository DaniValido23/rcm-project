import bcryptjs from 'bcryptjs';


interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}



type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}




export const initialData: SeedData = {

  users: [
    {
      email: 'fernando@google.com',
      name: 'Fernando Herrera',
      password: bcryptjs.hashSync('123456'),
      role: 'admin'
    },
    {
      email: 'melissa@google.com',
      name: 'Melissa Flores',
      password: bcryptjs.hashSync('123456'),
      role: 'user'
    },


  ],


  categories: [
    'Shirts', 'Pants', 'Hoodies', 'Hats'
  ],
  products: [
    {
      description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
      images: [
        '1506211-00-A_0_2000.jpg',
        '1506211-00-A_1_2000.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_corp_jacket",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Corp Jacket",
      gender: 'kid'
    },
  ]
};