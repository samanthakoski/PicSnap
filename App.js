import React, { useState } from 'react';
import {
  Alert,
  useWindowDimensions
} from 'react-native';
import Scrolling from './src/screens/scrollScreen';
import Share from './src/screens/shareScreen';

const App = () => {

  const [scrolling, setScrolling] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([
    {id: 1, title: 'bridge', image: require('./src/images/bridge.jpg')},
    {id: 2, title: 'buildingLights', image: require('./src/images/buildingLights.jpg')},
    {id: 3, title: 'candle', image: require('./src/images/candle.jpg')},
    {id: 4, title: 'canoe', image: require('./src/images/canoe.jpg')},
    {id: 5, title: 'chairs', image: require('./src/images/chairs.jpg')},
    {id: 6, title: 'coilBuilding', image: require('./src/images/coilBuilding.jpg')},
    {id: 7, title: 'flower', image: require('./src/images/flower.jpg')},
    {id: 8, title: 'hallway', image: require('./src/images/hallway.jpg')},
    {id: 9, title: 'mountainLake', image: require('./src/images/mountainLake.jpg')},
    {id: 10, title: 'ripples', image: require('./src/images/ripples.jpg')},
    {id: 11, title: 'signs', image: require('./src/images/signs.jpg')},
    {id: 12, title: 'trail', image: require('./src/images/trail.jpg')},
    {id: 13, title: 'tree', image: require('./src/images/tree.jpg')},
  ]);
  
  const onSelectImage = imageUri => {
    setSelectedImage(imageUri);
    setScrolling(false);
  }

  const onBack = () => {
    setSelectedImage(null);
    setScrolling(true);
  }

  const onShareImage = imageUri => {
    Alert.alert('Share', 'Image was sent to Snapchat');
    setScrolling(true);
   /*
    let photoContent = {
      content: {
        uri: imageUri,
      }
    };
  
    CreativeKit.sharePhoto(photoContent)
      .then(() => {
        console.log("Image sent to Snapchat");
      })
      .catch((error) => {
        console.log("Image failed to send");
        console.log(error);
      });
      */
  }

  let {width: windowWidth, height: windowHeight} = useWindowDimensions();
  windowHeight = windowHeight - 150;
  
  return (
    scrolling ? <Scrolling images={images} onSelect={onSelectImage} height={windowHeight}/> : 
      <Share 
        onBack={onBack} 
        onShare={onShareImage} 
        imageUri={selectedImage} 
        height={windowHeight}/>
  )
  
/*
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', marginVertical:8 }}>
      <Text
        style={{
          color: 'black',
          fontSize: 32,
          marginTop: 50,
          marginBottom: 25
        }}
      >
        PicSnap
      </Text>
      
      <View style={{ flex: 1 / 2, marginTop: 20 }}>
        <Carousel
          layout='default'
          data={images}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => onSelect(index)}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              style={{ width: '100%', height: '100%' }}
              resizeMode='contain'
              source={item.image}
            />
          )}
        />
        <Pagination
          inactiveDotColor='gray'
          dotColor={'orange'}
          activeDotIndex={picSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
        <Button
          title="Send to Snap"
          onPress={() => Alert.alert("send to snap")}
        />
    </View>
      
    </View>
  ); */
};

export default App;