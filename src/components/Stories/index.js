import React from 'react'
import Story from '../Story'
import {View, FlatList} from 'react-native'
import styles from './styles'


const data=[
    {
        imageUri:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
        name:"Luke",
    },
    {
        imageUri:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2b8911407779.560f735535e09.jpg",
        name:"Harry",
    },{
        imageUri:"http://images4.fanpop.com/image/photos/16300000/Random-people-random-16382026-600-800.jpg",
        name:"Alice",
    },{
        imageUri:"https://pbs.twimg.com/media/DJWhERJVYAE4e2_.jpg",
        name:"Ron",
    },{
        imageUri:"https://i.dailymail.co.uk/i/pix/2014/03/26/article-0-1C91BEE700000578-336_306x393.jpg",
        name:"Kayla",
    },{
        imageUri:"https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg",
        name:"Rock",
    },{
        imageUri:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e98f2535036667.58bc6981515a3.jpg",
        name:"Wright",
    },
]



const Stories = () => (
    <FlatList
        data={data}
        keyExtractor={({name}) => name}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
    />
)

export default Stories