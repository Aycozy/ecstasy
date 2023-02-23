import images from './images';

const wines = [
  {
    title: 'Pounded yam and Egusi',
    price: '$56',
    tags: 'yoruba | dish',
  },
  {
    title: 'Amala & Gbegiri',
    price: '$59',
    tags: 'yoruba | dish',
  },
  {
    title: 'Starch & Banga',
    price: '$44',
    tags: 'delta | dish',
  },
  {
    title: 'Fufu & Okra Soup',
    price: '$31',
    tags: 'igbo | dish',
  },
  {
    title: 'Eba & Efo Riro',
    price: '$26',
    tags: 'yoruba | dish',
  },
];

const cocktails = [
  {
    title: 'Dodo and pepper soup',
    price: '$20',
    tags: 'appetizer | snacks | brunch ',
  },
  {
    title: 'Jollof rice and chicken',
    price: '$16',
    tags: 'lunch | dinner | variety',
  },
  {
    title: 'White rice and stew',
    price: '$26',
    tags: 'breakfast | light',
  },
  {
    title: 'Suya and goat meat soup',
    price: '$26',
    tags: 'desert | variet',
  },
  {
    title: 'Small chops',
    price: '$26',
    tags: 'snacks | desert',
  },
];
const awards = [
  {
    imgUrl: images.award02,
    title: 'Adunni Award',
    subtitle: 'award for the best indigeneous soup across west africa.',
  },
  {
    imgUrl: images.award01,
    title: 'Elegushi esperito 2022',
    subtitle: 'THe best egusi for the year 2022.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Customer service award exclusively by the customers.',
  },
  {
    imgUrl: images.award03,
    title: 'Adari chef 2022',
    subtitle: ' The most Outstanding Chef award preseted to our chef, ayo tom-peterson.',
  },
];

export default { wines, cocktails, awards };
