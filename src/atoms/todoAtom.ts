import { atom, selector } from 'recoil';
import { Categories, IToDo } from '../interface';

export const todoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(todoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
