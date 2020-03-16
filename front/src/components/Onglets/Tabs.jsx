// affichage de texte et d'image sous forme d'onglets

// !! ne pas oublier d'importer les blocs d'affichage de texte et d'image !!



import React, { Component } from 'react';
import './Tabs.css';
import '../Css/Global.css';
import '../Css/Grid.css';
import { NavLink } from 'react-router-dom';
import BlocTxtLeftImgRight from '../ImageTextBloc/TextLeftImageRight';
import BlocImgLeftTxtRight from '../ImageTextBloc/ImageLeftTextRight';


class TabsSection extends Component {

  constructor() {
    super();

    // lien entre la fonction _handleTabChange et le render du composant
    this._handleTabChange = this._handleTabChange.bind(this)
  }


  // méthode affichant le contenu des onglets
  _handleTabChange(index) {
    console.log('Selected tab index', index);
  }

  render() {
    return (

      // conteneur des onglets limitant leur latgeur à 1024px en version bureau
      <div className="dsk-10 tab-12 mob-12 max-width">

        {/* début du composant onglets */}
        <TabPanel onTabChange={this._handleTabChange}>

          {/* onglet 1 */}
          <div title="Tab 1">

            {/* composant affichant un texte à gauche et une image à droite*/}
            <BlocTxtLeftImgRight />
          </div>

          {/* onglet 2 */}
          <div title="Tab 2">

            {/* composant affichant un texte à droite et une image à gauche*/}
            <BlocImgLeftTxtRight />
          </div>

          {/* onglet 3 */}
          <div title="Tab 3">

            {/* composant affichant un texte à gauche et une image à droite*/}
            <BlocTxtLeftImgRight />
          </div>

          {/* onglet 4 */}
          <div title="Tab 4">
            {/* composant affichant un texte à droite et une image à gauche*/}
            <BlocImgLeftTxtRight />
          </div>
        </TabPanel>
      </div>
    );
  }
}

class TabPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // état initial de l'onglet choisi
      selectedTabIndex: props.children.length == 0 ? null : 0
    };
    
    // liaison entre la méthode handleClick et le render
    this._handleClick = this._handleClick.bind(this);
  }
  // méthode de mise à jour de l'onglet choisi quand on clique sur un onglet
  _handleClick(index) {
    this.setState({
      selectedTabIndex: index
    });
    // appel des propriétés de l'onglet choisi
    this.props.onTabChange(index);
  }
    // méthode définissant le rendu des onglets
  _renderTabs() {

    // déclaration des titres des onglets comme tableau vide
    let tabs = [];

    // remplissage du tableau
    for (let i = 0; i < this.props.children.length; i++) {
      tabs.push(

        // contenu et comportement du titre d'un onglet
        <Tab
          key={`tab-${i}`}
          label={this.props.children[i].props.title}
          index={i}
          isSelected={i === this.state.selectedTabIndex}
          onClick={this._handleClick} />
      );
    }

    return tabs;
  }
    // rendu du contenu de chaque onglet
  _renderTabContent() {
    return this.props.children[this.state.selectedTabIndex].props.children;
  }

  render() {

    // si l' onglet n'est pas sélectionné, ne pas afficher son contenu
    if (this.state.selectedTabIndex == null) {
      return 'nope';
    }

    // sinon, afficher l'onglet et son contenu
    return (

      // div conteneur de l'ensemble des onglets
      <div className="tab-panel">

        {/* div contenant les titres des onglets */}
        <div className="tab-panel__header">
          {this._renderTabs()}
        </div>
        
        {/* div affichant les blocs image et texte */}
        <div className="tab-panel__content">
          {this._renderTabContent()}
        </div>
      </div>
    );
  }
}

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }


  // choix de l'onglet
  _handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {

    // constante permettant le choix de l'affichage en fonction de la sélection
    const tabClassName = this.props.isSelected ? 'tab tab--selected' : 'tab';

    return (
      // affichage des onglets
      <span className={tabClassName} onClick={this._handleClick}>
        <span className="tab__label">{this.props.label}</span>
      </span>
    );
  }
}



// composant counter livré dans le code, inutile ici, récupérable ailleurs

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     }

//     this._intervalId = null;
//   }

//   componentDidMount() {
//     this._interValId = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this._intervalId);
//   }

//   render() {
//     return (
//       <div>{this.state.count}</div>
//     )
//   }
// }





export default TabsSection;
