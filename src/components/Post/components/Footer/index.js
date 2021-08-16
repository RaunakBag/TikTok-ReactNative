import React, {useState, useEffect} from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'
import ADIcon from 'react-native-vector-icons/AntDesign'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IoniconsIcons from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const Footer = ({likesCount:likesCountProp , caption, postedAt}) =>  {
    
    const[isLiked, setIsLike] = useState('initialState : false');
    const[likesCount, setLikesCount] = useState('initialState :0');

    const onLikePressed = () =>{
        setIsLike(!isLiked)
        const amount = isLiked? -1:+1
        setLikesCount(likesCount+amount)
    }

    useEffect( () =>{
        setLikesCount(likesCountProp)
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                <TouchableWithoutFeedback onPress={onLikePressed}>
                    {isLiked ?
                    <ADIcon name='heart' size={25} color='red'/>
                    :
                    <ADIcon name='hearto' size={25} color='grey'/> 
                    }
                </TouchableWithoutFeedback>
                <FontistoIcon name='comment' size={25}/>
                <IoniconsIcons name='paper-plane-outline' size={25}/>
                </View>
                <FAIcon name='bookmark-o' size={25}/>
            </View>
            <Text style={styles.likes}>{likesCount}Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

export default Footer