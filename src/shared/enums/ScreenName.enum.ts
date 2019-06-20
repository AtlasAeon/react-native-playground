import { Enum } from 'src/shared/utils/Enum';

export const ScreenName = Enum('Login', 'Main', 'Applications');

export type ScreenName = Enum<typeof ScreenName>;
