import { atom, selector } from 'recoil';
import { Categories, IToDo } from '../interface';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const todoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(todoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
