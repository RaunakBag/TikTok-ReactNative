import React from 'react'
import {FlatList} from 'react-native'
import Post from '../Post'
import Stories from "../../components/Stories"

const data = [
    {
        id: '1',
        user: {
            imageUri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
            name: 'Luke'
        },
        imageUri: 'https://wallpaperaccess.com/full/211836.jpg',
        caption: 'Into the Woods!!! #instagram',
        likesCount: 89,
        postedAt: '6 minutes ago'
    },
    {
        id: '2',
        user: {
            imageUri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2b8911407779.560f735535e09.jpg",
            name: 'Harry'
        },
        imageUri: "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        caption: 'Into the Woods!!! #instagram',
        likesCount: 89,
        postedAt: '6 minutes ago'
    }, 
    {
        id: '3',
        user: {
            imageUri: "http://images4.fanpop.com/image/photos/16300000/Random-people-random-16382026-600-800.jpg",
            name: 'James'
        },
        imageUri: "https://wallpapercave.com/wp/wp5476518.jpg",
        caption: 'Into the Woods!!! #instagram',
        likesCount: 89,
        postedAt: '6 minutes ago'
    }

]

const Feed = () => (
    <FlatList 
        data={data}
        renderItem={({item}) => 
        <Post post={item} />}
        keyExtractor={({id})=>id}
        ListHeaderComponent={Stories}
    />
)

export default Feed