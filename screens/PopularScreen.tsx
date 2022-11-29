import type { HomeTabScreenProps } from '../navigation/types';

export function PopularScreen({ navigation, route }: HomeTabScreenProps<'Popular'>) {
    navigation.navigate('Home')

    return null;
}
