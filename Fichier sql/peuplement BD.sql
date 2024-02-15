
USE `vente_en_ligne`;

INSERT INTO `Users` (`prenom`, `nom`, `email`, `telephone`, `password`, `address`, `role`, `nb_point_fidelite`) VALUES
('Jane', 'Smith', 'jane.smith@admin.com', '987654321', 'hashed_password', '456 Oak St, Townsville', 1, 0),
('John', 'Doe', 'john.doe@user.com', '123456789', 'hashed_password', '123 Main St, Cityville', 0, 100);

INSERT INTO `Commandes` (`quantite`, `dateCommande`, `statutCommande`, `produitId`, `userId`) VALUES
(2, '2024-01-22 10:30:00', 1, 1, 1),
(1, '2024-01-23 12:45:00', 2, 3, 2);

INSERT INTO `Produits` (`nom_produit`, `prix`, `stock`, `imageProduit`, `descriptionProduit`, `categorieId`, `rabaisProduit`) VALUES
('Dentifrice Blanchissant', 5.99, 50, 'https://urls.fr/LMHvkP', 'Formule avancÃ©e pour un sourire Ã©clatant.', 1, 0),
('Dentifrice Protection Caries', 10.99, 30, 'https://urls.fr/LMHvkP', 'Renforce l''Ã©mail pour une protection maximale contre les caries.', 1, 0),
('Dentifrice Soin Dentaire Sensible', 10.99, 100, 'https://urls.fr/LMHvkP', 'SpÃ©cialement conÃ§u pour les dents sensibles.', 1, 0),
('Dentifrice RafraÃ®chissant', 6.99, 10, 'https://urls.fr/LMHvkP', 'Un mÃ©lange unique pour une haleine fraÃ®che durable.', 1, 0),
('Shampooing nourrissant', 12.99, 1, 'https://cutt.ly/6wZGymDU', 'Shampooing nourrissant pour cheveux doux et soyeux', 3, 0),
('Après-shampooing', 15.99, 1, 'https://cutt.ly/6wZGymDU', 'Après-shampooing hydratant pour des cheveux brillants', 3, 0),
('Parfum', 49.99, 2, 'https://cutt.ly/zwZGtFgX', 'Parfum floral élégant pour une journée fraîche', 4, 0),
('Lotion', 24.99, 2, 'https://cutt.ly/VwZFN58u', 'Lotion tonique pour une peau revitalisée', 2, 0),
('Crème hydratante', 19.99, 3, 'https://cutt.ly/VwZFN58u', 'Crème hydratante pour une peau lisse et nourrie', 2, 0),
('Fond de teint', 29.99, 3, 'https://urls.fr/jDlbCh', 'Fond de teint léger pour une peau impeccable', 2, 0),
('Shampooing', 14.99, 1, 'https://cutt.ly/6wZGymDU', 'Shampooing volumisant pour des cheveux pleins de vie', 3, 0),
('Après-shampooing', 17.99, 1, 'https://cutt.ly/6wZGymDU', 'Après-shampooing revitalisant pour des cheveux éclatants', 3, 0),
('Parfum', 54.99, 2, 'https://cutt.ly/zwZGtFgX', 'Parfum boisé pour une touche masculine', 4, 0),
('Lotion', 29.99, 2, 'https://cutt.ly/VwZFN58u', 'Lotion apaisante pour une peau confortable', 2, 0),
('Crème', 21.99, 3, 'https://cutt.ly/VwZFN58u', 'Crème hydratante à la vanille pour une peau douce', 2, 0),
('Palette de fards à paupières', 39.99, 3, 'https://urls.fr/jDlbCh', 'Palette de fards à paupières pour un look glamour', 2, 0),
('Shampooing', 16.99, 1, 'https://cutt.ly/6wZGymDU', 'Shampooing énergisant pour des cheveux forts', 3, 0),
('Après-shampooing', 18.99, 1, 'https://cutt.ly/6wZGymDU', 'Après-shampooing nourrissant pour une chevelure soyeuse', 3, 0),
('Parfum sucré', 44.99, 2, 'https://cutt.ly/zwZGtFgX', 'Parfum sucré pour une séduction subtile', 4, 0),
('Lotion hydratante', 26.99, 2, 'https://cutt.ly/VwZFN58u', 'Lotion hydratante pour une peau éclatante', 2, 0),
('Crème apaisante', 22.99, 3, 'https://cutt.ly/VwZFN58u', 'Crème apaisante pour une peau réconfortée', 2, 0),
('Mascara waterproof', 32.99, 3, 'https://urls.fr/jDlbCh', 'Mascara waterproof pour des cils irrésistibles', 2, 0),
('Shampooing anti-frisottis', 19.99, 1, 'https://cutt.ly/6wZGymDU', 'Shampooing anti-frisottis pour des cheveux lisses', 3, 0),
('Après-shampooing', 21.99, 1, 'https://cutt.ly/6wZGymDU', 'Après-shampooing démêlant pour des cheveux soyeux', 3, 0),
('Parfum frais', 39.99, 2, 'https://cutt.ly/zwZGtFgX', 'Parfum frais pour une journée dynamique', 4, 0),
('Lotion', 28.99, 2, 'https://cutt.ly/VwZFN58u', 'Lotion rafraîchissante pour une peau revigorée', 2, 0),
('Crème hydratante', 24.99, 3, 'https://cutt.ly/VwZFN58u', 'Crème hydratante à la rose pour une peau délicate', 2, 0),
('Rouge à lèvres', 19.99, 3, 'https://urls.fr/jDlbCh', 'Rouge à lèvres longue tenue pour des lèvres éclatantes', 2, 0),
('Shampooing', 18.99, 1, 'https://cutt.ly/6wZGymDU', 'Shampooing fortifiant pour des cheveux en pleine santé', 3, 0),
('Après-shampooing', 23.99, 1, 'https://cutt.ly/6wZGymDU', 'Après-shampooing réparateur pour des cheveux nourris', 3, 0),
('Parfum fruité', 34.99, 2, 'https://cutt.ly/zwZGtFgX', 'Parfum fruité pour une touche sucrée', 4, 0),
('Lotion tonique', 31.99, 2, 'https://cutt.ly/VwZFN58u', 'Lotion tonique pour une peau tonifiée', 2, 0),
('Crème hydratante', 26.99, 3, 'https://cutt.ly/VwZFN58u', 'Crème hydratante mentholée pour une sensation fraîche', 2, 0),
('Palette de maquillage', 49.99, 3, 'https://urls.fr/jDlbCh', 'Palette de maquillage polyvalente pour un look personnalisé', 2, 0);