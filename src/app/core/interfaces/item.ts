import { Option } from './option';

export interface Item {
  title: string;
  path?: string;
  options?: Option[];
}
