import { Image } from 'react-native';

export const cacheFonts = (fonts: any) => {
  //return fonts.map((font) => loadAsync(font));
};

export const cacheImages = (images: string[]) => {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      //return Asset.fromModule(image).downloadAsync();
      console.log("What is the next")
    }
  });
};
