-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Lun 17 Février 2020 à 12:22
-- Version du serveur :  5.7.29-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `farmviz`
--
CREATE DATABASE IF NOT EXISTS `farmviz` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `farmviz`;

-- --------------------------------------------------------

--
-- Structure de la table `traduction`
--

CREATE TABLE `traduction` (
  `id` int(11) NOT NULL,
  `banniere_titre` varchar(255) NOT NULL,
  `banniere_texte` text,
  `banniere_telephone` varchar(16) DEFAULT NULL,
  `navbar_titre` varchar(100) DEFAULT NULL,
  `navbar_status_ste` varchar(30) DEFAULT NULL,
  `navbar_accueil` varchar(50) DEFAULT NULL,
  `navbar_services` varchar(50) DEFAULT NULL,
  `navbar_societes` varchar(50) DEFAULT NULL,
  `navbar_contact` varchar(50) DEFAULT NULL,
  `offre_titre` varchar(255) DEFAULT NULL,
  `offre_sous_titre` varchar(255) DEFAULT NULL,
  `offre_texte` varchar(255) DEFAULT NULL,
  `offre_texte1` varchar(255) DEFAULT NULL,
  `offre_texte2` varchar(255) DEFAULT NULL,
  `offre_texte3` varchar(255) DEFAULT NULL,
  `offre_texte4` varchar(255) DEFAULT NULL,
  `offre_texte5` varchar(255) DEFAULT NULL,
  `offre_texte6` varchar(255) DEFAULT NULL,
  `offre_texte7` varchar(255) DEFAULT NULL,
  `offre_prix_lancement` varchar(255) DEFAULT NULL,
  `offre_prix_normal` varchar(255) DEFAULT NULL,
  `offre_decouvrir` varchar(255) DEFAULT NULL,
  `offre_precommander` varchar(255) DEFAULT NULL,
  `offre_texte_condition` varchar(255) DEFAULT NULL,
  `offre_lien_condition` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `traduction`
--

INSERT INTO `traduction` (`id`, `banniere_titre`, `banniere_texte`, `banniere_telephone`, `navbar_titre`, `navbar_status_ste`, `navbar_accueil`, `navbar_services`, `navbar_societes`, `navbar_contact`, `offre_titre`, `offre_sous_titre`, `offre_texte`, `offre_texte1`, `offre_texte2`, `offre_texte3`, `offre_texte4`, `offre_texte5`, `offre_texte6`, `offre_texte7`, `offre_prix_lancement`, `offre_prix_normal`, `offre_decouvrir`, `offre_precommander`, `offre_texte_condition`, `offre_lien_condition`) VALUES(1, 'La technologie au service de l\'homme et de l\'environnement', 'Service client 6j/7 de 7h à 21h', '02 23 23 52 10', 'FarmViz', 'sas', 'Accueil', 'Services', 'Société', 'Contact', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '');
INSERT INTO `traduction` (`id`, `banniere_titre`, `banniere_texte`, `banniere_telephone`, `navbar_titre`, `navbar_status_ste`, `navbar_accueil`, `navbar_services`, `navbar_societes`, `navbar_contact`, `offre_titre`, `offre_sous_titre`, `offre_texte`, `offre_texte1`, `offre_texte2`, `offre_texte3`, `offre_texte4`, `offre_texte5`, `offre_texte6`, `offre_texte7`, `offre_prix_lancement`, `offre_prix_normal`, `offre_decouvrir`, `offre_precommander`, `offre_texte_condition`, `offre_lien_condition`) VALUES(2, 'Technology serving people and the environment', 'Customer service 6 days a week from 7 a.m. to 9 p.m.', '02 23 23 52 10', 'FarmViz', 'sas', 'Home', 'Services', 'Companies', 'Contact', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `traduction`
--
ALTER TABLE `traduction`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `traduction`
--
ALTER TABLE `traduction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
