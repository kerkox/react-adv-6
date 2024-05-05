import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title:   ({ title }: ProductTitleProps) => JSX.Element;
  Image:   ({ img }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
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

export interface ProductCardHanlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product

  increaseBy: (value: number) => void;
  reset: () => void;
}