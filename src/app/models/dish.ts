import { Comment } from './comment';

export interface Dish {
    name: string;
    imagepath: string;
    description: string;
    comments?: Comment[];
}
