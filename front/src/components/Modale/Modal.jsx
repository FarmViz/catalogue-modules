// composant permettant d'afficher une modale


import React from 'react';
import Modal from 'react-modal';
import '../Css/Global.css';
import '../Css/Grid.css';
import './Modal.css';

// constante d"finissant les propriétés de style de la modale
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#3293ad',
   
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

// pour que la modale s'affiche par-dessus tous les autres éléments on doit lui spécifier la div contenante de tous les éléments
Modal.setAppElement('#root')

function ModalDiv() {

  // variable permettant d'afficher le titre de la modale
  var subtitle;


  const [modalIsOpen, setIsOpen] = React.useState(false);

  // fonction ouvrant la modale
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // propriétés de style du titre de la modale
    subtitle.style.color = '#f00';
    subtitle.style.textAlign = 'center';
  }

  // fonction fermant la modale
  function closeModal() {
    setIsOpen(false);
  }

  return (

    // conteneur du bouton permettant d'ouvrir la modale
    <div className="dsk-6 tab-12 mob-12 max-width row justContCenter  blueDiv">

      {/* bouton pour ouvrir la modale */}
      <button onClick={openModal}>Open Modal</button>

      {/* début de la modale */}
      <Modal

        // appel des fonctions permettant de manipuler la modale
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        {/* div englobant le contenu de la modale pour centrer le contenu */}
        <div className="column justContCenter alignItemCenter marginTopBottom1rem">
          {/* Titre de la modale */}
          <h2 className="marginTopBottom1rem"ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>

          {/* contenu de la modale */}
          <div className="marginTopBottom1rem">I am a modal</div>
          <form className="dsk-4 tab-6 mob-12 column alignItemCenter justContCenter marginTopBottom1rem">
            <label>input me</label>
            <input className="marginTopBottom1rem" />
            <button className="marginTopBottom1rem">Valider</button>

          </form>

          {/* bouton de fermeture de la modale */}
          <button className="marginTopBottom1rem" onClick={closeModal}>close</button>

          {/* fin de la div englobante du contenu */}
        </div>

        {/* fin de la modale */}
      </Modal>

      {/* fin du conteneur du bouton d'ouverture de la modale */}
    </div>
  );
}

export default ModalDiv;