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
  counter: number;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  (Props: CardProps): JSX.Element;
  Buttons: (Props: ButtonsProps) => JSX.Element;
  Image: (Props: ImageProps) => JSX.Element;
  Title: (Props: TitleProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxReached: boolean;
  maxCount?: number;
  product: Product;
  
  increaseBy: (value: number) => void;
  reset: () => void;
}