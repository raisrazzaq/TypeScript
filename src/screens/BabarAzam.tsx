import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
interface DataType {
  image: ImageSourcePropType;
  title: string;
  id: number;
  Description: string;
}
const BabarAzam = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState<DataType[]>([
    {
      image: require('../assets/babar1.webp'),
      title: 'Babar Azam',
      id: 1,
      Description:
        'Mohammad Babar Azam Born	15 October 1994 (age 29) Walled City, Lahore, Punjab, Pakistan Nickname	Bobby Height 5 ft 11 in (180 cm) Batting Right-handed Bowling	Right-arm off break Role	Batter',
    },
    {
      image: require('../assets/babar2.jpeg'),
      title: 'Babar Azam',
      id: 2,
      Description:
        'With 44 wins, he is the joint-most successful T20I captain of all time. He is Pakistans most prolific T20I batter and his maiden T20I century of 122, which he scored against South Africa, is the highest current individual score by a Pakistani, in the format.He also remains the only captain to take Pakistan to the number 1 ODI team rankings. Azam was a member of the Pakistan team that won the 2017 ICC Champions Trophy.',
    },
    {
      image: require('../assets/babar3.jpeg'),
      title: 'Babar Azam',
      id: 3,
      Description:
        'In May 2015, Babar was included in the Pakistani ODI squad for home series against Zimbabwe.[16] He made his ODI debut in the third ODI on 31 May and scored an impressive fifty scoring 54 runs off 60 balls.[17] His impressive debut earned him a place in both Test and ODI squads selected for an away series against Sri Lanka. He was not selected to play in the Test series. During the ODI series, he only scored 37 runs in the two matches that he played.[18] Babar was included in the squad for the away ODI series against Zimbabwe in September 2015.[19]',
    },
    {
      image: require('../assets/babar4.jpeg'),
      title: 'Babar Azam',
      id: 4,
      Description:
        'He was retained in the ODI squad for the home series against England. In the first ODI of the four match series he scored 62 not out with a strike rate of 100 which helped Pakistan win the match.[20] He had scores of 4, 22 and 51 in next three matches respectively.[21] He finished the series with 139 runs at an average of 46.33.[22]',
    },
    {
      image: require('../assets/babar5.jpeg'),
      title: 'Babar Azam',
      id: 5,
      Description:
        'In January 2016, Pakistan toured New Zealand. In the first ODI match, Babar scored 62 runs off 76 balls. Pakistan lost the match by 70 runs.[23] He was the leading run scorer in the ODI series with 145 runs in 2 innings at an average of 72.50.[24]',
    },
  ]);
  const ref = useRef<FlatList>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FlatList
          ref={ref}
          onScroll={e => {
            setCurrentIndex(
              (
                e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              ).toFixed(0),
            );
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          data={data}
          renderItem={({item, index}) => {
            return (
              <View style={styles.container}>
                <Image source={item.image} style={{width: 200, height: 200}} />
                <Text style={{fontSize: 32, fontWeight: 'bold', marginTop: 20}}>
                  {item.title}
                </Text>
                <Text style={styles.desc}>{item.Description}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 50}}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                height: 5,
                width: currentIndex == index ? 20 : 5,
                alignItems: 'center',
                marginLeft: 10,
                borderRadius: 5,
                backgroundColor: currentIndex == index ? 'red' : 'black',
              }}
            />
          );
        })}
      </View>
      <View style={styles.wrapper}>
        {currentIndex == 0 && (
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              setCurrentIndex(currentIndex + 1);
              ref.current?.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex + 1),
              });
            }}>
            <Text style={{color: 'white', alignSelf: 'center'}}>
              Let's Start
            </Text>
          </TouchableOpacity>
        )}
        {currentIndex > 0 && currentIndex < data.length - 1 ? (
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.Btn}
              onPress={() => {
                setCurrentIndex(currentIndex - 1);
                ref.current?.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) - 1,
                });
              }}>
              <Text style={{color: 'white', alignSelf: 'center'}}>
                Previous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modal}
              onPress={() => {
                if (data.length - 1 > currentIndex) {
                  setCurrentIndex(currentIndex + 1);
                  ref.current?.scrollToIndex({
                    animated: true,
                    index: parseInt(currentIndex) + 1,
                  });
                }
              }}>
              <Text style={{color: 'white', alignSelf: 'center'}}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {currentIndex == data.length - 1 && (
          <TouchableOpacity style={styles.Button} onPress={() => {}}>
            <Text style={{color: 'white', alignSelf: 'center'}}>
              Go to Dashboard
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'justify',
    padding: 10,
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    justifyContent: 'space-between',
    padding: 10,
  },
  Pressable: {
    width: '90%',
    height: 50,
    backgroundColor: 'black',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 10,
  },
  content: {
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Btn: {
    width: '30%',
    height: 50,
    backgroundColor: 'black',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 10,
  },
  modal: {
    width: '30%',
    height: 50,
    backgroundColor: 'black',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 10,
  },
  Button: {
    width: '90%',
    height: 50,
    backgroundColor: 'black',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
  },
});

export default BabarAzam;
