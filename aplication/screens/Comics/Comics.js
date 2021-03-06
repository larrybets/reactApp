import React, {Component} from 'react';
import BackgroundImage from "../../components/BackgroundImage";
import PreLoader from '../../components/preLoader';
import {StyleSheet, FlatList} from 'react-native';
import {ListItem} from "react-native-elements";
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import ComicEmpty from "../../components/Comic/ComicEmpty";
import ComicAddButton from "../../components/Comic/ComicAddButton";

export default class Comics extends Component {
	constructor () {
		super();
		this.state = {
			comics: [],
			loaded: false,
			comic_logo: require('../../../assets/images/fondo1.jpeg')
		};

		this.refComics = firebase.database().ref().child('comics');

	}

	componentDidMount () {
		console.log('entra');
		this.refComics.on('value', snapshot => { 

			console.log('Demtro'); 

			let comics = [];
			snapshot.forEach(row => {
				comics.push({
					id: row.key,
					name: row.val().name,
					editorial: row.val().editorial,
					price: row.val().price,
					description: row.val().description,
					note: row.val().note
					
				})
			});

			this.setState({
				comics,
				loaded: true
			});
		})
	}

	addComic () {
		const navigateAction = NavigationActions.navigate({
			routeName: 'AddComic'
		});
		this.props.navigation.dispatch(navigateAction);
	}

	restaurantDetail (comic) {
		
	}

	renderComic (comic) {
        return (
            <ListItem
                containerStyle={styles.item}
                titleStyle={styles.title}
                roundAvatar
                title={`${comic.name} (Precio: ${comic.precio})`}
                avatar={this.state.comic_logo}
                onPress={() => this.comicDetail(comic)}
                rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: styles.listIconStyle}}
            />
        )
    }

	render () {

		const {loaded, comics} = this.state;
		
		if ( ! loaded) { 
			return <PreLoader/>
		}

		if ( !comics.length) {
			return (
				<BackgroundImage source={require('../../../assets/images/fondo1.jpeg')}>

					<ComicEmpty text="No hay comicssssss disponibles" />
					<ComicAddButton addComic={this.addComic.bind(this)} />
				</BackgroundImage>
			);
		}

		return (
			<BackgroundImage source={require('../../../assets/images/background.jpg')}>

				<FlatList
					data={comics}
					renderItem={(data) => this.renderComic(data.item)}
					keyExtractor={(data) => data.id}
				/>

				<ComicAddButton addComic={this.addComic.bind(this)} />
			</BackgroundImage>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		color: '#fff'
	},
	listIconStyle: {
		marginRight: 10,
		fontSize: 15,
		color: 'rgba(255, 38, 74, 0.6)'
	},
	item: {
		padding: 0,
		backgroundColor: 'rgba(206, 206, 206, 0.6)',
	}
});