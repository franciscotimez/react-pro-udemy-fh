import { Props as ButtonsProps } from '../components/ProductButtons';
import { Props as CardProps } from '../components/ProductCard';
import { Props as ImageProps } from '../components/ProductImage';
import { Props as TitleProps } from '../components/ProductTitle';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  (Props: CardProps): JSX.Element;
  Buttons: (Props: ButtonsProps) => JSX.Element;
  Image: (Props: ImageProps) => JSX.Element;
  Title: (Props: TitleProps) => JSX.Element;
}
