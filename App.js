import React from 'react';
import {Text, View} from 'react-native';
import * as firebase from 'firebase';
import {Ionicons} from '@expo/vector-icons';
import BottomNavigation, {IconTab} from 'react-native-material-bottom-navigation';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'feed',
            content: null,
        }

        var config = {
            apiKey: "AIzaSyAWmv1Hkh4oSauahZG9yCIhq470az2tWtQ",
            authDomain: "hilite-54ff0.firebaseapp.com",
            databaseURL: "https://hilite-54ff0.firebaseio.com",
            projectId: "hilite-54ff0",
            storageBucket: "hilite-54ff0.appspot.com",
            messagingSenderId: "272103104265"
        };

        firebase.initializeApp(config);

    }

    tabs = [
        {
            key: 'feed',
            icon: 'md-bookmarks',
            barColor: '#fff',
            pressColor: 'rgba(0, 0, 0, 0.07)',
            content: <Text>1</Text>
        },
        {
            key: 'search',
            icon: 'md-search',
            barColor: '#fff',
            pressColor: 'rgba(0, 0, 0, 0.07)',
            content: <Text>2</Text>
        },
        {
            key: 'profile',
            icon: 'md-person',
            barColor: '#fff',
            pressColor: 'rgba(0, 0, 0, 0.07)',
            content: <Text>3</Text>
        }
    ]

    componentWillMount() {
        this.setState({
            content: this.tabs[0].content
        })
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 1, padding: 100}}>
                    {this.state.content}
                </View>
                <BottomNavigation
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                    onTabPress={(newTab, oldTab) => {
                        this.setState({
                            content: newTab.content,
                        })
                    }}
                />
            </View>
        )
    }

    renderTab = ({tab, isActive}) => {
        let color = 'gray',
            colorActive = 'red'

        if (isActive) {
            color = colorActive;
        }

        return (
            <IconTab
                key={tab.key}
                isActive={isActive}
                renderIcon={this.renderIcon(tab.icon, color)}
            />
        )
    }

    renderIcon = (iconName, color) => ({isActive}) => {
        return <Ionicons size={24} color={color} name={iconName}/>
    }
}
