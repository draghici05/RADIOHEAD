import { ImageSourcePropType } from 'react-native';

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;   
};

export const ImageSlider = [
    {
        title: 'Pablo Honey',
        image: require('../assets/covers/pablo-honey.jpg'),
        description: 'Album 1'
    },
    {
        title: 'The Bends',
        image: require('../assets/covers/the-bends.png'),
        description: 'Album 2'
    },
    {
        title: 'OK Computer',
        image: require('../assets/covers/ok-computer.png'),
        description: 'Album 3'

    },
    {
        title: 'Kid A',
        image: require('../assets/covers/kid-a.png'),
        description: 'Album 4'
    },
    {
        title: 'Amnesiac',
        image: require('../assets/covers/amnesiac.png'),
        description: 'Album 5'

    },
    {
        title: 'In Rainbows',
        image: require('../assets/covers/pablo-honey.jpg'),
        description: 'Album 6'

    },
    {
        title: 'Hail to The Thief',
        image: require('../assets/covers/pablo-honey.jpg'),
        description: 'Album 7'

    },
    {
        title: 'The King of the Limbs',
        image: require('../assets/covers/pablo-honey.jpg'),
        description: 'Album 8'

    },
    {
        title: 'A Moon Shaped Pool',
        image: require('../assets/covers/pablo-honey.jpg'),
        description: 'Album 9'

    },

    
]