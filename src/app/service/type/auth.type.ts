/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

export type MenuItemType = {
  level: number;
  title: string;
  icon: string;
  open: boolean;
  selected: boolean;
  disabled: boolean;
  children?: MenuItemType[];
};

export type LoginRequestType = {
  password: string;
  name: string;
};
