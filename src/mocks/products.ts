// thumbs
import Tradicional from '../assets/images/coffee/expresso.svg';
import Americano from '../assets/images/coffee/expresso-americano.svg';
import Cremoso from '../assets/images/coffee/expresso-cremoso.svg';
import Gelado from '../assets/images/coffee/cafe-gelado.svg';
import ComLeite from '../assets/images/coffee/cafe-com-leite.svg';
import Latte from '../assets/images/coffee/latte.svg';
import Capuccino from '../assets/images/coffee/capuccino.svg';
import Machiatto from '../assets/images/coffee/machiatto.svg';
import Mochaccino from '../assets/images/coffee/mochaccino.svg';
import ChocolateQuente from '../assets/images/coffee/chocolate-quente.svg';
import Cubano from '../assets/images/coffee/cubano.svg';
import Havaiano from '../assets/images/coffee/havaiano.svg';
import Arabe from '../assets/images/coffee/arabe.svg';
import Irlandes from '../assets/images/coffee/irlandes.svg';

export enum CoffeeTypes {
	TRADICIONAL = 'tradicionañ',
	ALCOOLICO = 'alcohólico',
	GELADO = 'helado',
	COM_LEITE = 'con leche',
	ESPECIAL = 'especial',
}
export interface Product {
	id: string;
	image: string;
	name: string;
	types: CoffeeTypes[];
	description: string;
	price: number;
	inventory: number;
	quantity: number;
}

export const products: Product[] = [
	{
		id: 'coffee-1',
		image: Tradicional,
		name: 'Expresso Tradicional',
		types: [CoffeeTypes.TRADICIONAL],
		description: 'Café tradicional hecho con agua caliente y granos molidos',
		price: 5.5,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-2',
		image: Americano,
		name: 'Expresso Americano',
		types: [CoffeeTypes.TRADICIONAL],
		description: 'Espresso diluido, menos intenso que el tradicional',
		price: 5.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-3',
		image: Cremoso,
		name: 'Expresso Cremoso',
		types: [CoffeeTypes.TRADICIONAL],
		description: 'Café expresso tradicional con espuma cremosa',
		price: 6.5,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-4',
		image: Gelado,
		name: 'Expresso Gelado',
		types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.GELADO],
		description: 'Bebida preparada com café expresso y cubos de hielo',
		price: 6.0,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-5',
		image: ComLeite,
		name: 'Café com Leite',
		types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
		description: 'Espresso mitad y mitad tradicional con leche al vapor',
		price: 5.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-6',
		image: Latte,
		name: 'Latte',
		types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
		description: 'Un shot de espresso con el doble de leche y espuma cremosa',
		price: 6.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-7',
		image: Capuccino,
		name: 'Capuccino',
		types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
		description:
			'Bebida de canela elaborada a partir de dosis iguales de café, leche y espuma',
		price: 7.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-8',
		image: Machiatto,
		name: 'Macchiato',
		types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
		description:
			'Café espresso mezclado con un poco de leche caliente y espuma',
		price: 7.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-9',
		image: Mochaccino,
		name: 'Mocaccino',
		types: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
		description:
			'Café espresso con salsa de chocolate, un poco de leche y espuma',
		price: 8.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-10',
		image: ChocolateQuente,
		name: 'Chocolate Quente',
		types: [CoffeeTypes.ESPECIAL, CoffeeTypes.COM_LEITE],
		description:
			'Bebida elaborada con chocolate disuelto en leche caliente y café',
		price: 9.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-11',
		image: Cubano,
		name: 'Cubano',
		types: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO, CoffeeTypes.COM_LEITE],
		description: 'Bebida espresso helada con ron, nata y menta',
		price: 10.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-12',
		image: Havaiano,
		name: 'Havaiano',
		types: [CoffeeTypes.ESPECIAL],
		description: 'Bebida dulce preparada con café y leche de coco',
		price: 10.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-13',
		image: Arabe,
		name: 'Árabe',
		types: [CoffeeTypes.ESPECIAL],
		description: 'Bebida preparada con granos de café árabe y especias',
		price: 9.9,
		inventory: 10,
		quantity: 1,
	},
	{
		id: 'coffee-14',
		image: Irlandes,
		name: 'Irlandês',
		types: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO],
		description:
			'bebida a base de café, whisky irlandés, azúcar y nata montada',
		price: 9.9,
		inventory: 10,
		quantity: 1,
	},
];
